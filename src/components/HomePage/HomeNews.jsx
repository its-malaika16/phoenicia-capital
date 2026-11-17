import { Link } from "react-router-dom";
import blogs from "../../data/blogs";
import "./HomeNews.css";

const homeImages = {
  1: "/assets/images/news-cedar-bank.jpg?v=6",
  2: "/assets/images/news-teachwise.jpg?v=6",
  3: "/assets/images/news-petrovate.jpg?v=6",
};

export default function HomeNews() {
  const latestThree = blogs.slice(0, 3).map((blog) => ({
    ...blog,
    image: homeImages[blog.id] || blog.image,
  }));

  return (
    <section className="home-news">
      <div className="home-news-inner">
        <header className="home-news-head">
          <span className="home-news-kicker">Newsroom</span>
          <h2>
            Latest From Our
            <br />
            Companies
          </h2>
          <p>Product launches, milestones, and updates.</p>
        </header>

        <div className="home-news-list">
          {latestThree.map((blog) => (
            <Link className="news-row" key={blog.id} to={`/blogs/${blog.id}`}>
              <div className="news-copy">
                <span className="news-category">{blog.category}</span>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <div className="news-meta">
                  <span>{blog.date}</span>
                  <span className="news-read">Read &gt;</span>
                </div>
              </div>
              <img src={blog.image} alt="" width="1024" height="1024" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
