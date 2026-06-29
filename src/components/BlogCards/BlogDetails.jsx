import { useParams, useNavigate } from "react-router-dom";
import blogs from "../../data/blogs";
import "./BlogDetails.css";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <section className="blog-page">

      {/* ✅ HERO */}
      <div
        className="blog-hero"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="overlay"></div>

        {/* ✅ BACK */}
        <div className="back" onClick={() => navigate(-1)}>
          ← BACK
        </div>

        <div className="hero-content">

          {/* CATEGORY */}
          <div className="category">
            {blog.category} <span className="line"></span> TEACHWISE
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

      {/* ✅ BODY */}
      <div className="blog-body">

        <div className="content">

          {/* FIRST BIG PARA */}
          <p className="lead">{blog.description}</p>

          {blog.content?.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

        </div>

      </div>

    </section>
  );
}