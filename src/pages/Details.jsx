import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";
import { BsFillPinAngleFill, BsPinAngle } from "react-icons/bs"

// Test data
import { Posts } from "../utils/Test";

const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [comment, setComment] = useState("");
    
    const post = Posts.filter(Post => Post.id == id);

    // Pinned State
    const [pinned, setPinned] = useState(post[0].pinned);
    
    // Toggle pinned property
    const pinPost = () => {
        if(post[0].pinned === true){
            post[0].pinned = false;
            setPinned(post[0].pinned);
        }else{
            post[0].pinned = true;
            setPinned(post[0].pinned);
        }
    };

    return ( 
        <div className="Details-div">

            <div className="Details">
                {/* Back arrow */}
                <div className="Details_top">
                    <div className="back" onClick={() => navigate(-1)}>
                        <BiArrowBack /> Back
                    </div>

                    {/* Pin Post */}
                    <div className="pin" onClick={pinPost}>
                        { pinned ? <BsFillPinAngleFill /> : <BsPinAngle />}
                    </div>
                </div>
                
                {/* Header */}
                <div className="header">
                    <h2>{post[0].title}</h2>

                    <div className="header_bottom">
                        <span className="date">{post[0].date} / </span>
                        <span className="author">{post[0].by} / </span>
                        <span className="comment-num">3 Comments</span>
                    </div>
                </div>

                {/* Main image(if any) */}
                <div className="image">
                    <img src={post[0].img_url} alt="" />
                </div>

                {/* Body */}
                <div className="body">
                    <h3>{post[0].title}</h3>
                    <p>{post[0].body}</p>

                    <h3>Privacy & Sync</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Consectetur adipisicing elit. Ipsum, eum.</li>
                        <li>Porro corrupti rerum doloremque dolorem doloribus aperiam, accusamus ea!</li>
                    </ul>
                </div>

                {/* Comments */}
                <div className="comments-section">
                    <h3>3 Comments</h3>

                    <div className="comments">
                        <div className="comment">
                            <div className="comment_pfp">
                                <img src="/images/user-img.png" alt="" />
                            </div>

                            <div className="comment_details">
                                <h4>Jewel / Feb 8, 2021</h4>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui.</p>
                                <button>Reply</button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Create comment */}
                <div className="post-comment">
                    <div className="post">
                        <label htmlFor="comment">Your Comment</label>
                        <textarea 
                          id="comment"
                          value={comment}
                          onChange={setComment}
                        ></textarea>
                    </div>

                    <button>Post Comment</button>
                </div>
            </div>
        </div>    
     );
}
 
export default Details;