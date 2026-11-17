import Seo from "../components/Seo";
import blogs from "../data/blogs";
import BlogCard from "../components/BlogCards/BlogCard";
import "../styles/Blogs.css";
import BlogHero from "../components/BlogCards/BlogHero";
import Footer from "../components/Footer/Footer";

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
    <>
      <Seo
        title="Newsroom | Phoenicia Capital Holdings"
        description="News from Phoenicia Capital Holdings and its ventures: TeachWise, Petrovate, Cedar Capital Bank, and Cedar Payroll."
        path="/blogs"
      />
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
      <Footer />
    </>
  );
}
