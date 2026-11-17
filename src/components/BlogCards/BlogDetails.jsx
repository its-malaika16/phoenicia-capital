import { useParams, useNavigate } from "react-router-dom";
import blogs from "../../data/blogs";
import Seo from "../Seo";
import "./BlogDetails.css";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <>
        <Seo
          title="Page not found | Phoenicia Capital Holdings"
          description="This Phoenicia Capital news page does not exist."
          path={`/blogs/${id}`}
          noindex
        />
        <h2 style={{ padding: "100px" }}>Blog not found</h2>
      </>
    );
  }

  return (
    <article className="blog-page">
      <Seo
        title={`${blog.title} | Phoenicia Capital`}
        description={blog.description}
        path={`/blogs/${blog.id}`}
      />
      <div className="blog-article">
        <button type="button" className="blog-back" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="blog-kicker">
          <span>{blog.category}</span>
          <span className="blog-kicker-line" />
          <span>Phoenicia</span>
        </div>

        <h1>{blog.title}</h1>

        <div className="blog-meta">
          <span>{blog.date}</span>
          <span aria-hidden="true">•</span>
          <span>Phoenicia Newsroom</span>
          <span aria-hidden="true">•</span>
          <span>{blog.readTime || "3 min read"}</span>
        </div>

        <img
          className="blog-photo"
          src={blog.image}
          alt=""
          draggable="false"
        />

        <p className="blog-lead">{blog.description}</p>

        {blog.content?.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </article>
  );
}
