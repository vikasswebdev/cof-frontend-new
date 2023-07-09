import { Metadata } from "next";
import React from "react";
import Blogs from "./Blogs";

export const metadata: Metadata = {
  title: "Blogs",
};

const Blog: React.FC = () => {
  return (
    <>
      <div className="container mx-auto min-h-screen">
        <div>
          <h1 className="text-5xl md:pl-10 pl-5 pt-10 md:text-7xl font-bold">
            Blogs
          </h1>
          <Blogs />
        </div>
      </div>
    </>
  );
};

export default Blog;
