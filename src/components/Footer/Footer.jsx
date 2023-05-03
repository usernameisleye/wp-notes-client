import { Link } from "react-router-dom";

const Footer = () => {
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
            </div>
        </footer>
     );
}
 
export default Footer;