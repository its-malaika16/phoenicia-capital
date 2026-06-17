import blogs from "../data/blogs";
import BlogCard from "../components/BlogCards/BlogCard";
import "../styles/Blogs.css";

export default function Blogs() {
  return (
    <div className="blogs-section">
      <h1>Blogs</h1>

      <div className="blogs-grid">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
