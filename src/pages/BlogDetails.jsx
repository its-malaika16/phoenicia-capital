import { useParams } from "react-router-dom";
import blogs from "../data/blogs";

export default function BlogDetails() {
  const { id } = useParams();

  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <h2>Not found</h2>;

  return (
    <div style={{ padding: "80px 100px" }}>
      <h1>{blog.title}</h1>
      {blog.image}
      <p>{blog.description}</p>
    </div>
  );
}