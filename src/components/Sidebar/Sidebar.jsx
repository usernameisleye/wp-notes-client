import { useState } from "react";
import Search from "../Search/Search";
import { Link, useLocation } from "react-router-dom";

import { useThemeContext } from "../../context/ThemeContext";
import { useAuthContext } from "../../context/AuthContext";
import Logout from "../Logout/Logout";

const Sidebar = () => {
    const { theme } = useThemeContext();
    const { user } = useAuthContext();

    // Get route location
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const links = [
        {
            title: "Blog",
            to: "/"
        },
        {
            title: "Contact",
            to: "/contact"
        },
    ];

    // Close tab function
    const closeTab = () => {
        document.querySelector(".Sidebar").classList.add("hide");
    };

    return ( 
        <aside className="Sidebar | hide">
            <div className="top">
                <div className="logo">
                    <Link to="/">
                        <img src="/images/Logo.svg" alt="WP notes logo" />
                    </Link>

                </div>

                <div className="user">
                    <img src={user ? user.avatar : "/images/user-img.png"} alt="Default user image"/>
                </div>
            </div>

            <div className="close" onClick={closeTab}>
                <button>
                    <img src={`/images/${theme ? "close" : "close-white"}.png`} alt="Close icon" />
                </button>
            </div>
            
            <Search />

            <nav>
                {user ? (
                    <ul className="links" role="list">
                        {links.map((link, index) => (
                            <li
                                key={index}
                            >
                                <Link
                                to={ link.to }
                                className={location.pathname === link.to  ? "active" : null}
                                >{ link.title }</Link>
                            </li>

                        ))}

                        <button 
                          className="logout"
                          onClick={() => setOpen(true)}
                        >Log out</button>
                    </ul>
                ) : (
                    <ul className="links" role="list">
                        <li>
                            <Link
                            to="/signin"
                            className={location.pathname === "signin"  ? "active" : null}
                            >Sign In</Link>
                        </li>
                    </ul>
                )}
            </nav>

            <Logout 
                open={open}
                setOpen={setOpen}
            />
        </aside>
     );
}
 
export default Sidebar;