import { useNavigate } from "react-router-dom";

export default function BlogCard({ blog }) {
  const navigate = useNavigate();

  return (
    <div
      className="blog-card"
      onClick={() => navigate(`/blogs/${blog.id}`)}
    >
      <img src={blog.image} alt={blog.title} />

      <div className="blog-content">
        <span className="blog-category">{blog.category}</span>

        <h3>{blog.title}</h3>
        <p>{blog.description}</p>

        <br></br>

        <div className="blog-footer">
          <span>{blog.date}</span>
          <span>Read →</span>
        </div>
      </div>
    </div>
  );
}
