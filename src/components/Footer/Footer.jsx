import { Link } from "react-router-dom";
import { BiSun, BiMoon } from "react-icons/bi"
import { useThemeContext } from "../../hooks/useThemeContext";

const Footer = () => {
    // Theme Context
    const { theme, toggleTheme } = useThemeContext();
    
    const links = ["Instagram", "Twitter", "Facebook"];

    return ( 
        <footer className="Footer">
            <div className="Footer_top">
                <div className="logo">
                    <img src="./images/Logo.svg" alt="WP notes logo" />
                </div>

                <div className="theme-by">
                    <span className="first">Holo Themed by </span> 
                    <span className="dull">VitaThemes</span> |
                    <span className="dull"> Privacy</span>
                </div>
            </div>

            <div className="Footer_bottom">
                <ul role="list">
                    {links.map((link, index) => (
                        <li key={ index }>
                            <Link>{ link }</Link>
                        </li>
                    ))}
                </ul>

                {/* Theme Switch */}
                <div className="Switch">
                    <label htmlFor="mode">{ theme ? "Light Mode" : "Dark Mode" }</label>
                    <button
                    id="mode"
                    onClick={toggleTheme}
                    aria-label="toggle theme"
                    >
                        { theme ? <BiMoon /> : <BiSun /> }
                    </button>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;