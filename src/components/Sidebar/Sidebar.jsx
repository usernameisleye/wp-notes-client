import { useState } from "react";
import Search from "../Search/Search";

const Sidebar = () => {
    // State values
    const [close, setClose] = useState(false)

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
            title: "Portfolio",
            to: "/portfolio"
        }
    ];

    const closeTab = () => {
        setClose(true);
    };

    return ( 
        <aside className={`Sidebar ${ close ? "hide" : "" }`}>
            <div className="logo">
                <img src="./images/logo.png" alt="WP notes logo" />
            </div>

            <div className="close" onClick={closeTab}>
                <button>
                    <img src="./images/close.png" alt="" className="Close icon"/>
                </button>
            </div>
            
            <Search />

            <nav>
                <ul className="links" role="list">
                    <li>
                        <a href="" className="active">Home</a>
                    </li>

                    {links.map((link, index) => (
                        <li key={index} className="">
                            <a href="">{link.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
     );
}
 
export default Sidebar;