import formatDistanceToNow  from 'date-fns/formatDistanceToNow';

const Blog = ({post}) => {
    return ( 
        <div className="content">
            <h4 className="header">{post.title}</h4>
            <p className="body">{post.summary} </p>
            <p>{ formatDistanceToNow(new Date(post.published_at), { addSuffix: true }) }</p>
        </div>
     );
}
 
export default Blog;