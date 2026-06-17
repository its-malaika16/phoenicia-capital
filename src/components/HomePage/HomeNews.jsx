import blogs from "../../data/blogs";
import BlogCard from "../BlogCards/BlogCard";
import { useNavigate } from "react-router-dom";
import "../../styles/Blogs.css";
import "./HomeNews.css";

export default function HomeNews() {
  const navigate = useNavigate();

  const latestThree = blogs.slice(0, 3); // ✅ only 3

  return (
    <section className="blogs-section">

      <div className="blogs-header">
        <div>
          <span className="small-title">NEWSROOM</span>
          <h2>Latest from our companies</h2>
          <p>Product launches, milestones, and updates.</p>
        </div>

        {/* ✅ goes to /blogs */}
        <button onClick={() => navigate("/blogs")}>
          Explore More →
        </button>
      </div>

      <div className="blogs-grid">
        {latestThree.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

    </section>
  );
}
