import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => (
  <Link to={`/blog/${post.id}`}>
    <div className="bg-[#D8D8D8] rounded-lg overflow-hidden flex flex-col h-full transition-transform duration-300 hover:scale-105">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-60 object-cover "
      />
      <div className="p-5 flex flex-col flex-grow">
        <h5 className="text-xl font-bold mb-2 text-left ">{post.title}</h5>
        <p className="text-gray-700 text-left flex-grow">{post.description}</p>
      </div>
    </div>
  </Link>
);
export default BlogCard;
