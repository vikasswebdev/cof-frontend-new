import React from "react";
import BlogItemComp from "./BlogItem";
import api from "@/http";

const Blogs = async () => {
  const blogs = await api.blog.getBlogs();
  return (
    <div className="p-5 w-full" data-uk-grid="true">
      <div className="flex flex-wrap justify-around">
        {blogs.map((blog, i) => {
          return <BlogItemComp blogItem={blog} key={`${blog.slug}`} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
