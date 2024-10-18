import { DUMMY_NEWS } from "@/dummy-news";
import { ArticleData } from "@/types/newsArticle";
import Image from "next/image";
import { notFound } from "next/navigation";
export default function ViewImage({ params }: { params: { slug: string } }) {
  const newsDetails = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === params.slug
  ) as ArticleData | undefined;
  if (!newsDetails) {
    return notFound();
  }
  return (
    <div className="fullscreen-image">
      <Image
        src={`/images/news/${newsDetails.image}`}
        alt={newsDetails.title}
        width={1000}
        height={1000}
      />
    </div>
  );
}
