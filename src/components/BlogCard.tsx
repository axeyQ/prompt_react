import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css"; // You can create and customize this CSS file
import { truncateText } from "utils/textUtils";

interface Blog {
  id: number;
  title: string;
  path: string;
  component: string;
  image: string;
  description: string;
  category: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="blog-card">
        <p className="blog-category">{blog.category}</p>
      <Link to={blog.path} className="blog-link"><h2>{blog.title}</h2></Link>
      <p className="d-none d-lg-block">{truncateText(blog.description, 30)}</p>
      <p className="d-block d-lg-none">{truncateText(blog.description, 90)}</p>
      {blog.image && <img src={blog.image} alt={blog.title} />}
    </div>
  );
};

export default BlogCard; 