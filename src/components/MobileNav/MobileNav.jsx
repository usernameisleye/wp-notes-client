import { useState } from "react";
import { Link } from "react-router-dom";

import Search from "../Search/Search";
import { useThemeContext } from "../../context/ThemeContext";

const MobileNav = () => {
    // Theme Context
    const { theme } = useThemeContext();

    const [search, setSearch] = useState(false);

    const openTab = () => {
        document.querySelector(".Sidebar").classList.remove("hide");
    };

    const showSearch = () => {
        setSearch(!search);
    };

    return ( 
        <div className={`Mobile-nav ${search ? "background" : "*"}`}>
            <nav className="Mobile-nav_top">
                <div className="menu">
                    <button>
                        <img src={`/images/${theme ? "menu" : "menu-white"}.png`} alt="Menu icon" onClick={openTab}/>
                    </button>
                </div>

                <div className="logo">
                    <Link to="/">
                        <img src="/images/Logo.svg" alt="WP notes logo" />
                    </Link>
                </div>

                <div className="search">
                    <button>
                        { search ? 
                            <img src={`/images/${theme ? "close" : "close-white"}.png`} alt="Close icon" onClick={showSearch}/>
                            :
                            <img src={`/images/${theme ? "search" : "search-white"}.png`} alt="Search icon" onClick={showSearch}/>
                         }
                    </button>
                </div>
            </nav>

            <div className={`Mobile-nav_bottom ${search ? "show" : "hide"}`}>
                <Search />
            </div>
        </div>
     );
}
 
export default MobileNav;