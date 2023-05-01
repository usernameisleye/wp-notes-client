import { useState } from "react";
import Search from "../Search/Search";

const MobileNav = () => {
    const [search, setSearch] = useState(false);

    const showSearch = () => {
        setSearch(!search);
    }

    return ( 
        <div className={`Mobile-nav ${search ? "background" : "*"}`}>
            <nav className="Mobile-nav_top">
                <div className="menu">
                    <button>
                        <img src="./images/menu.png" alt="Menu icon" />
                    </button>
                </div>

                <div className="logo">
                    <img src="./images/logo.png" alt="WP notes logo" />
                </div>

                <div className="search">
                    <button>
                        { search ? 
                            <img src="./images/close.png" alt="Search icon" onClick={showSearch}/>
                            :
                            <img src="./images/search.png" alt="Search icon" onClick={showSearch}/>
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