import Footer from "../components/Footer/Footer";
import MobileNav from "../components/MobileNav/MobileNav";

const Blog = () => {
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
                                <div className="content">
                                    <h4>Business Partners Work at Modern Office</h4>
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
 
export default Blog;