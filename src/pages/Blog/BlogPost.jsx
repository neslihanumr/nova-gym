import React from "react";
import { Link, useParams } from "react-router-dom";
import blogData from "./blogData";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogData.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Blog post not found</div>;
  }

  const otherPosts = blogData.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div>
      <div className="relative w-full">
        <img
          src={post.heroImage}
          alt={post.title}
          className="w-full max-h-[100vh] object-cover "
        />
      </div>
      <div className="bg-[#1E1E1E] min-h-screen">
        <div className="flex-center container">
          <h1 
          data-aos="fade-up" className="highlight-large font-medium font-jura">
            {post.title}
          </h1>
          <div
          data-aos="fade-up" data-aos-delay="300"
            className="content font-jura"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        <div className="container mx-auto p-4 mt-32">
          <div className="flex justify-center items-center">
            <span 
            data-aos="fade-up" data-aos-delay="600"
            className="text-sm font-jura text-with-lines w-3/12  text-[#C0EA18] whitespace-nowrap">
              Other blogs you may like
            </span>
          </div>
          <div 
          data-aos="fade-up" data-aos-delay="900"
          className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16 mb-24">
            {otherPosts.map((otherPost) => (
              <Link to={`/blog/${otherPost.id}`} key={otherPost.id}>
                <div className="blog-card bg-[#D8D8D8] w-full md:w-96 h-auto md:h-96 flex-shrink-0 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                  <img
                    src={otherPost.image}
                    alt={otherPost.title}
                    className="w-full h-3/5 object-cover"
                  />
                  <h3 className="text-xl font-bold p-4 text-left">
                    {otherPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
