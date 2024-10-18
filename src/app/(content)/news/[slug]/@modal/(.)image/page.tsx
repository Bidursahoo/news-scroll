"use client";
import { DUMMY_NEWS } from "@/dummy-news";
import { ArticleData } from "@/types/newsArticle";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
export default function InterceptedViewImage({
  params,
}: {
  params: { slug: string };
}) {
  const newsDetails = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === params.slug
  ) as ArticleData | undefined;
  const router = useRouter();
  if (!newsDetails) {
    return notFound();
  }
  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Image
            src={`/images/news/${newsDetails.image}`}
            alt={newsDetails.title}
            width={500}
            height={500}
          />
        </div>
      </dialog>
    </>
  );
}
