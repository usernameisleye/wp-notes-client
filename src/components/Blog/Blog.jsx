const Blog = ({post}) => {
    return ( 
        <div className="content">
            <h4 className="header">{post.title}</h4>
            <p className="body">{post.body} </p>
            <p>{post.date}</p>
        </div>
     );
}
 
export default Blog;