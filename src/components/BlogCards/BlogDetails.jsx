import { useParams, useNavigate } from "react-router-dom";
import "./BlogDetails.css";

// Example blog data (same IDs as your blog cards)
const blogs = [
  {
    id: "1",
    title:
      "Cedar Capital Bank Launches 40+ Currency Multi-Wallet for Global Businesses",
    category: "PRODUCT LAUNCH — CEDAR CAPITAL BANK",
    date: "May 18, 2026",
    readTime: "4 min read",
    image: "/assets/images/blog1.jpg",
    content: [
      "Cedar Capital Bank unveils a unified multi-currency wallet enabling instant cross-border payments across more than 40 currencies for fintechs and global enterprises.",
      "Cedar Capital Bank today announced the general availability of its multi-currency wallet, a unified treasury layer that supports more than 40 currencies natively and settles cross-border payments in seconds rather than days.",
      "The release builds on Cedar's pre-integrated banking platform and gives fintechs, marketplaces, and global enterprises a single ledger to hold, convert, and disburse funds without managing dozens of correspondent banking relationships.",
      "\"Our customers are operating across borders from day one,\" said the Cedar Capital Bank product team. \"This release removes the friction that historically slowed expansion — one wallet, one compliance posture, one source of truth for every currency.\"",
      "The wallet ships with built-in FX, programmatic conversion rules, and full compliance tooling including KYC, sanctions screening, and transaction monitoring.",
      "Multi-currency wallet capabilities are available immediately to all Cedar Capital Bank platform clients via the standard API and admin console.",
    ],
  },
];

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <section className="blog-details">
      
      {/* ✅ HERO SECTION */}
      <div className="blog-hero">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← BACK
        </button>

        <div className="hero-content">
          <span className="blog-category">{blog.category}</span>

          <h1>{blog.title}</h1>

          <div className="blog-meta">
            <span>{blog.date}</span>
            <span>•</span>
            <span>Phoenicia Newsroom</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
        </div>
      </div>

      {/* ✅ CONTENT SECTION */}
      <div className="blog-body">
        {blog.content.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </section>
  );
}