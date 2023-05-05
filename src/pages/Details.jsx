import Footer from "../components/Footer/Footer";

const Details = () => {
    return ( 
        <div className="Details-div">

            <div className="Details">
                <div className="header">
                    <h2>Business Partners Work at Modern Office</h2>

                    <div className="header_bottom">
                        <span className="date">Feb 8, 2021 / </span>
                        <span className="author">By Vitathemes / </span>
                        <span className="comment-num">3 Comments</span>
                    </div>
                </div>

                <div className="image">
                    <img src="./images/details-img.png" alt="" />
                </div>

                <div className="body">
                    <h3>Light & Bright in Brooklyn🌍</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic facere enim, iste consequatur quaerat ducimus perspiciatis animi esse placeat eaque!</p>

                    <h3>Privacy & Sync</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Consectetur adipisicing elit. Ipsum, eum.</li>
                        <li>Porro corrupti rerum doloremque dolorem doloribus aperiam, accusamus ea!</li>
                    </ul>
                </div>

                <div className="comments-section">
                    <h3>3 Comments</h3>

                    <div className="comments">
                        <div className="comment">
                            <div className="comment_pfp">
                                <img src="./images/user-img.png" alt="" />
                            </div>

                            <div className="comment_details">
                                <h4>Jewel / Feb 8, 2021</h4>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui.</p>
                                <button>Reply</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="post-comment">
                    <div className="post">
                        <label htmlFor="comment">Your Comment</label>
                        <textarea id="comment"></textarea>
                    </div>

                    <button>Post Comment</button>
                </div>
            </div>

            <Footer />
        </div>    
     );
}
 
export default Details;