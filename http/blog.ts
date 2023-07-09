import instance from "./axios";

export interface BlogItem {
  _id: string;
  category: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  created_by_id: string | null;
  updated_by_id: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  metaRobots: string;
}

const blog = {
  async getBlogs() {
    const { data } = await instance.get<BlogItem[]>("/api/articles");
    return data;
  },
  async getBlog(slug: string) {
    const { data } = await instance.get<BlogItem>(`/api/article/${slug}`);
    return data;
  },
};

export default blog;
