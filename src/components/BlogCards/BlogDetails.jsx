import { useParams, useNavigate } from "react-router-dom";
import blogs from "../../data/blogs";
import "./BlogDetails.css";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <h2 style={{ padding: "100px" }}>Blog not found</h2>;

  return (
    <section className="blog-page">

      {/* ✅ HERO SECTION */}
      <div
        className="blog-hero"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="hero-overlay"></div>

        {/* ✅ BACK BUTTON */}
        <div className="back-btn" onClick={() => navigate(-1)}>
          ← BACK
        </div>

        {/* ✅ HERO CONTENT */}
        <div className="hero-content">

          {/* CATEGORY */}
          <div className="category">
            <span>{blog.category}</span>
            <span className="divider-line"></span>
            <span>PHOENICIA</span>
          </div>

          {/* TITLE */}
          <h1>{blog.title}</h1>

          {/* META */}
          <div className="meta">
            <span>{blog.date}</span>
            <span>•</span>
            <span>Phoenicia Newsroom</span>
            <span>•</span>
            <span>{blog.readTime || "3 min read"}</span>
          </div>

        </div>
      </div>

      {/* ✅ BODY SECTION */}
      <div className="blog-body">
        <div className="blog-container">

          {/* ✅ LEAD PARAGRAPH */}
          <p className="lead">{blog.description}</p>

          {/* ✅ CONTENT */}
          {blog.content?.map((para, index) => (
            <p key={index}>{para}</p>
          ))}

        </div>
      </div>

    </section>
  );
}
