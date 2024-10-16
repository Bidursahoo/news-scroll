import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArticleData } from "@/types/newsArticle";

export default function Page({ params }: { params: { slug: string } }) {
  const newsDetails = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === params.slug
  ) as ArticleData | undefined;
  if (!newsDetails) {
    return notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Image
          src={`/images/news/${newsDetails.image}`}
          alt={newsDetails.title}
          width={100}
          height={100}
        />
        <h1>{newsDetails.title}</h1>
        <time dateTime={newsDetails.date}>{newsDetails.date}</time>
      </header>
      <p>{newsDetails.content}</p>
    </article>
  );
}
