import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Blog from "../components/Blog/Blog";
import Paginate from "../components/Pagination/Paginate";

// Test data
import { Posts } from "../utils/Test";
import { useGlobalContext } from "../context/GlobalContext";

const Blogs = () => {
    const { search } = useGlobalContext();
    // States
    const [blogs, setBlogs] = useState([]);
    const [show, setShow] = useState(false);
    // Pagination
    const [currentPost, setCurrentPost] = useState([]);
    // Test
    const posts = Posts;
    const pinnedPosts = Posts.filter(post => post.pinned)

    useEffect(() => {
        // const fetchBlogs = async () => {
        //     try{
        //         const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        //         const resData = await res.json();
        //         // setBlogs(resData.results);
        //     }
        //     catch(err){
        //         console.log(err);
        //     }
        // };

        // fetchBlogs();
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
                    <h3>Pinned</h3>

                    <div className="pinned_blogs">
                        {/* Pinned post */}
                        <ul role="list">
                            {pinnedPosts.length > 0 ? (
                                pinnedPosts.map(pinnedPost => (
                                    <li key={pinnedPost.id}>
                                        <Link to={`/details/${pinnedPost.id}`}>
                                            <Blog post={pinnedPost} />
                                        </Link>
                                    </li>    
                                ))) :
                                (
                                    <p className="empty">No Pinned Post</p>
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
                            {currentPost.filter(item => {
                                const value = item.title.toLowerCase().includes(search.toLowerCase());

                                return value;
                            }
                            )
                            .map(post => (
                                <li key={post.id}>
                                    <Link to={`/details/${post.id}`}>
                                        <Blog post={post} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </section>

                <button className="all-posts" onClick={allPosts}>All Posts</button>
            </div>

            {/* Pagination */}
            <Paginate 
              show={show}
              posts={posts}
              setCurrentPost={setCurrentPost}
            />
        </div>
     );
}
 
export default Blogs;