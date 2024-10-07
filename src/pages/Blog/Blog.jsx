import React from "react";
import IMAGES from "../../images";
import BlogCard from "./BlogCard";
import blogData from "./blogData";

export default function Blog() {
  return (
    <>
      <div className="relative flex items-center justify-center">
        <img
          src={IMAGES.blogHero}
          alt="blog"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex justify-center items-center">
          <h1 className="text-4xl md:text-7xl italic font-inter font-medium text-[#D9D9D9]" data-aos="fade-up">
            Blog
          </h1>
        </div>
      </div>
      <div className="bg-[#1E1E1E] min-h-screen">
        <div className="container mx-auto text-center py-28">
          <div className="flex justify-center mb-3" data-aos="fade-up"data-aos-delay="300">
            <span className="text-sm font-jura text-with-lines w-3/12 text-[#C0EA18]">
              Our Blogs
            </span>
          </div>
         
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16"
            data-aos="fade-up"data-aos-delay="600"
            style={{ gridAutoRows: "1fr" }}
          >
            {blogData.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
