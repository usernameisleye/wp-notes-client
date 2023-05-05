import { Link } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";
import MobileNav from "../components/MobileNav/MobileNav";
import { useEffect, useState } from "react";

const Blogs = () => {

    return ( 
        <div className="Blogs">
            <MobileNav />

            <main className="main">
            <h2>Archive</h2>
                <section className="pinned">
                    <h3>Pinned</h3>

                    <div className="pinned_blogs">
                        <ul role="list">
                            <li>
                                <div className="content">
                                    <h4>Light & Bright in Brooklyn</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. </p>
                                    <p>Feb 8, 2021</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="other">
                    <h3>Other</h3>

                    <div className="other_blogs">
                        <ul role="list">
                            <li>
                                {/* {blogs && blogs.map((blog, index) => { */}
                                    <Link to="/details">
                                        <Blog />
                                    </Link>
                                {/* })} */}
                            </li>
                            <li>
                                <div className="content">
                                    <h4>Light & Bright in Brooklyn</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. </p>
                                    <p>Feb 8, 2021</p>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <h4>Light & Bright in Brooklyn</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. </p>
                                    <p>Feb 8, 2021</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </section>

                <button className="all-posts">All Posts</button>
            </main>

            <Footer />
        </div>
     );
}
 
export default Blogs;