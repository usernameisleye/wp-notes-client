import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";

import formatDistanceToNow  from 'date-fns/formatDistanceToNow';
import { useAuthContext } from "../context/AuthContext";

const Details = () => {
    const { user } = useAuthContext();

    const { id } = useParams();
    const navigate = useNavigate();

    // Comment states
    const [comment, setComment] = useState("");
    const [loadComment, setLoadComment] = useState(false);
    const [errorComment, setErrorComment] = useState(null);

    const [blog, setBlog] = useState(null);
    const [allComments, setAllComments] = useState([]);

    // Utils
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Format Date
    const formatDate = (date) => {
        return formatDistanceToNow(new Date(date), { addSuffix: true });
    };

    // Get the blog
    useEffect(() => {
        setLoading(true);

        const fetchBlog = async () => {
            try{
                const res = await fetch(`http://localhost:2004/api/blogs/${id}`, {
                    credentials: "include"
                });
                const resData = await res.json();
    
                if(res.ok){
                    setBlog(resData);
                }
            }
            catch(error){
                setError(error.message);
            }
            finally{
                setLoading(false);
            }
        }

        fetchBlog();
    }, []);

    // Get comments
    const getComments = async () => {
        try{
            const res = await fetch("http://localhost:2004/api/blogs/comments", {
                credentials: "include"
            });
            const resData = await res.json();
            setAllComments(resData);
        }
        catch(error){
            setError(error.message);
        }
    }

    useEffect(() => {
        getComments();
    }, []);

    // Getting commments particular to the blog
    const blogComments = [];
    allComments.map(comment => {
        if(comment.post_id === id){
            if(comment){
                blogComments.push(comment);
            }
        }
    });


    // Create a comment
    const handleComment = async () => {
        setLoadComment(true);
        const body = {
            avatar: user.avatar,
            post_id: id, 
            username: user.username, 
            comment
        }; 

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
            credentials: "include"
        }

        try{
            const res = await fetch("http://localhost:2004/api/blogs/comments", options);

            if(res.ok){
                setComment("");
                getComments();
            }
        }
        catch(error){
            setErrorComment(error.message);
        }
        finally{
            setLoadComment(false);
        }
    }
    
    return ( 
        <div className="Details-div">
            { loading && <img 
              src="/images/loading-gif.gif" 
              alt="" 
              className="loading"
            />}

            {error && <div className="error">{error}</div>}

            { blog && (
                <div className="Details">
                    {/* Back arrow */}
                    <div className="Details_top">
                        <div className="back" onClick={() => navigate(-1)}>
                            <BiArrowBack /> Back
                        </div>
                    </div>
                    
                    {/* Header */}
                    <div className="header">
                        <h2>{blog.title}</h2>

                        <div className="header_bottom">
                            <span className="date">{ formatDate(blog.published_at) } / </span>
                            <span className="author">{blog.news_site} / </span>
                            <span className="comment-num">{blogComments && blogComments.length} {blogComments.length > 1 ? "Comments" : "Comment"}</span>
                        </div>
                    </div>

                    {/* Main image(if any) */}
                    <div className="image">
                        <img src={blog.image_url} alt="" />
                    </div>

                    {/* Body */}
                    <div className="body">
                        <h3>{blog.title}</h3>
                        <p>{blog.summary}</p>

                        {/* Link to main article */}
                        <div className="full">
                            <Link to={blog.url} target="_blank">
                                Read full article here
                            </Link>
                        </div>
                    </div>



                    {/* Comments */}
                    <div className="comments-section">
                        <h3>{blogComments && blogComments.length} {blogComments.length > 1 ? "Comments" : "Comment"}</h3>

                        <div className="comments">
                            {blogComments.length > 0 ? (
                                // Map comments
                                blogComments.map(comment=> (
                                    <div key={comment._id} className="comment">
                                        <div className="comment_pfp">
                                            <img src={comment.avatar ? comment.avatar : "/images/user-img.png"} alt="" />
                                        </div>

                                        <div className="comment_details">
                                            <h4>{comment.username} / {formatDate(comment.createdAt)}</h4>

                                            <p>{comment.comment}</p>
                                        </div>
                                    </div>
                                ))
                            ): (
                                <p className="empty">No Comments</p>
                            )}
                        </div>
                    </div>



                    {/* Create comment */}
                    <div className="post-comment">
                        <div className="post">
                            <label htmlFor="comment">Your Comment</label>
                            <textarea 
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            ></textarea>
                        </div>

                        {/* Comment error */}
                        { errorComment && <p className="error">{errorComment}</p> }

                        <button onClick={handleComment}>{loadComment ? "Posting..." : "Post Comment"}</button>
                    </div>
                </div>
            ) }
        </div>    
        );
}
 
export default Details;