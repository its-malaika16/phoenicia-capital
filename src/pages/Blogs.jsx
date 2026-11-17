import blogs from "../data/blogs";
import BlogCard from "../components/BlogCards/BlogCard";
import "../styles/Blogs.css";
import BlogHero from "../components/BlogCards/BlogHero";

const cardImages = {
  1: "/assets/images/news-cedar-bank.jpg?v=6",
  2: "/assets/images/news-teachwise.jpg?v=6",
  3: "/assets/images/news-petrovate.jpg?v=6",
  4: "/assets/images/news-payroll.jpg?v=1",
  5: "/assets/images/news-meeting.jpg?v=1",
  6: "/assets/images/news-cedar-bank.jpg?v=6",
  7: "/assets/images/news-teachwise.jpg?v=6",
  8: "/assets/images/news-petrovate.jpg?v=6",
  9: "/assets/images/news-payroll.jpg?v=1",
};

export default function Blogs() {
  return (
    <div className="blogs-section">
      <BlogHero />

      <div className="blogs-grid">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={{ ...blog, image: cardImages[blog.id] || blog.image }}
          />
        ))}
      </div>
    </div>
  );
}
