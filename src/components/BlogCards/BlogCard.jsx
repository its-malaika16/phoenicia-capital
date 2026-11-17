import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <Link className="blog-card" to={`/blogs/${blog.id}`}>
      <div className="blog-content">
        <span className="blog-category">{blog.category}</span>
        <h3>{blog.title}</h3>
        <p>{blog.description}</p>
        <div className="blog-footer">
          <span>{blog.date}</span>
          <span className="blog-read">Read &gt;</span>
        </div>
      </div>
      <img src={blog.image} alt="" width="1024" height="1024" />
    </Link>
  );
}
