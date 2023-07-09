import api from "@/http";
import { BlogItem } from "@/http/blog";
import { MetadataRoute } from "next";

const EXTERNAL_DATA_URL = process.env.NEXT_PUBLIC_API_URL;

function generateUrlArrayFromBlogs(
  blogs: BlogItem[]
): { url: string; lastModified: Date }[] {
  return blogs.map((blog) => ({
    url: `${EXTERNAL_DATA_URL}/blog/${blog.slug}`,
    lastModified: new Date(),
  }));
}

export default async function sitemap(): MetadataRoute.Sitemap {
  const blogs = await api.blog.getBlogs();

  const blogArr = generateUrlArrayFromBlogs(blogs);

  return [
    {
      url: `${EXTERNAL_DATA_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${EXTERNAL_DATA_URL}/contactus`,
      lastModified: new Date(),
    },
    {
      url: `${EXTERNAL_DATA_URL}/integration`,
      lastModified: new Date(),
    },
    {
      url: `${EXTERNAL_DATA_URL}/blog`,
      lastModified: new Date(),
    },
    ...blogArr,
  ];
}
