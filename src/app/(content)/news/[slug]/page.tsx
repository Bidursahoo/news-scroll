import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArticleData } from "@/types/newsArticle";
import Link from "next/link";

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
        <Link href={`/news/${newsDetails.slug}/image`}>
          <Image
            src={`/images/news/${newsDetails.image}`}
            alt={newsDetails.title}
            width={100}
            height={100}
          />
        </Link>
        <h1>{newsDetails.title}</h1>
        <time dateTime={newsDetails.date}>{newsDetails.date}</time>
      </header>
      <p>{newsDetails.content}</p>
    </article>
  );
}
