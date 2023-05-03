import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "../Search/Search";

const Sidebar = () => {
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
    };

    return ( 
        <aside className={`Sidebar ${ close ? "hide" : "" }`}>
            <div className="top">
                <div className="logo">
                    <Link to="/">
                        <img src="./images/logo.png" alt="WP notes logo" />
                    </Link>

                </div>

                <div className="user">
                    <img src="./images/user-img.png" alt="Default user image"/>
                </div>
            </div>

            <div className="close" onClick={closeTab}>
                <button>
                    <img src="./images/close.png" alt="" className="Close icon"/>
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