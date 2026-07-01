import blogs from "../data/blogs";
import BlogCard from "../components/BlogCards/BlogCard";
import "../styles/Blogs.css";
import BlogHero from "../components/BlogCards/BlogHero";

export default function Blogs() {
  return (
    <div className="blogs-section">
      <BlogHero />

      <div className="blogs-grid">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
