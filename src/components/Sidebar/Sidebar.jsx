import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Search from "../Search/Search";
import { useThemeContext } from "../../hooks/useThemeContext";

const Sidebar = () => {
    const { theme } = useThemeContext();

    // State values
    const [close, setClose] = useState(false);
    const [active, setActive] = useState(0);

    const links = [
        {
            title: "Blog",
            to: "/"
        },
        {
            title: "Contact",
            to: "/contact"
        },
        {
            title: "Sign In",
            to: "/signin"
        }
    ];

    // Handle onclick active
    const handleActive = (index) => {
        setActive(index);
    }

    // Close tab function
    const closeTab = () => {
        setClose(true);
        document.querySelector(".Sidebar").classList.add("hide");
    };

    return ( 
        <aside className="Sidebar | hide">
            <div className="top">
                <div className="logo">
                    <Link to="/">
                        <img src="./images/Logo.svg" alt="WP notes logo" />
                    </Link>

                </div>

                <div className="user">
                    <img src="./images/user-img.png" alt="Default user image"/>
                </div>
            </div>

            <div className="close" onClick={closeTab}>
                <button>
                    <img src={`./images/${theme ? "close" : "close-white"}.png`} alt="Close icon" />
                </button>
            </div>
            
            <Search />

            <nav>
                <ul className="links" role="list">
                    {links.map((link, index) => (
                        <li 
                          key={index} 
                          onClick={() => handleActive(index)}
                        >
                            <Link
                             to={ link.to }
                             className={index === active ? "active" : "*"}
                             >{ link.title }</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
     );
}
 
export default Sidebar;