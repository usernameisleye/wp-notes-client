import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Blog from "../components/Blog/Blog";
import Paginate from "../components/Pagination/Paginate";

import { useGlobalContext } from "../context/GlobalContext";

const Blogs = () => {
    const { search } = useGlobalContext();
    // States
    const [blogs, setBlogs] = useState([]);
    const [show, setShow] = useState(false);
    // Pagination
    const [currentBlog, setCurrentBlog] = useState([]);
    // Featured
    const featuredBlogs = blogs.filter(blog => blog.featured);
    // Utils
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    
    let filtered = currentBlog.filter(blog => blog.title.toLowerCase().includes(search));
    useEffect(() => {
        setLoading(true);
        const fetchBlogs = async () => {
            try{
                const res = await fetch("http://localhost:2004/api/blogs", {
                    credentials: "include"
                });
                const resData = await res.json();

                setBlogs(resData.results);
                setLoading(false);
                setError(null);

                if(!res.ok){
                    throw Error("Error fetching from server");
                }
            }
            catch(error){
                setError(error.message);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const allPosts = (e) => {
        e.target.remove();
        setShow(true);
    };

    return ( 
        <div className="Blogs">

            <div className="main">
            <h2>Archive</h2>
                <section className="pinned">
                    <h3>Featured</h3>

                    <div className="pinned_blogs">
                        {/*Featured  post */}
                        <ul role="list">
                            {featuredBlogs.length > 0 ? (
                                // Mapping through featured post if present
                                featuredBlogs.map(featured => (

                                    <li key={featured.id}>
                                        <Link to={`/details/${featured.id}`}>
                                            <Blog post={featured} />
                                        </Link>
                                    </li>    
                                    
                                ))) :
                                (
                                    <p className="empty">No Featured Post</p>
                                )
                            }
                        </ul>
                    </div>
                </section>

                <section className="other">
                    <h3>Other</h3>

                    <div className="other_blogs">
                        {/* Posts */}
                        <ul role="list">
                            {/* Loading */}
                            { loading && <img 
                            src="/images/loading-gif.gif" 
                            alt="" 
                            className="loading"
                            />}

                            {error && <div className="error">{error}</div>}

                            {/* Omoo😭 */}
                            {blogs && (filtered.length > 0 || blogs ? (
                                currentBlog.filter(item => {
                                    return item.title.toLowerCase().includes(search.toLowerCase());
                                })
                                .map(post => (
                                    <li key={post.id}>
                                        <Link to={`/details/${post.id}`}>
                                            <Blog post={post} />
                                        </Link>
                                    </li>
                                ))
                            ): (
                                <p className="empty">No Matches Found</p>
                            ))}
                        </ul>
                    </div>

                </section>

                <button className="all-posts" onClick={allPosts}>All Posts</button>
            </div>

            {/* Pagination */}
            <Paginate 
              show={show}
              blogs={blogs}
              setCurrentBlog={setCurrentBlog}
            />
        </div>
     );
}
 
export default Blogs;