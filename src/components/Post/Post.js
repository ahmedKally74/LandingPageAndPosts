import "./Post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body}</p>
      <a href={post.link} className="post-link">
        Read more
      </a>
      <div className="post-comments">
        {post.comment_count} {post.comment_count === 1 ? "comment" : "comments"}
      </div>
    </div>
  );
};

export default Post;