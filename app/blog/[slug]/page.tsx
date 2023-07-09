import { Metadata, ResolvingMetadata } from "next";
import api from "@/http";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const blog = await api.blog.getBlog(slug);

  return {
    title: blog.title,
    description: blog.description,
  };
}

export default async function Page({ params }: Props) {
  const blogSlug = params.slug;
  const blog = await api.blog.getBlog(blogSlug);

  return (
    <>
      <div className="prose lg:prose-xl mx-auto">
        <div className="px-3 py-4">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${blog.image}`}
            alt={blog?.title}
            width={789}
            height={444}
          />
        </div>
        <div className="px-3 conatienr mx-auto">
          <div className="my-8 mx-auto">
            <ReactMarkdown>{`${blog?.content}`}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}
