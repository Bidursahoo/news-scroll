import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import Image from "next/image";
export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItems) => {
          return (
            <li key={newsItems.id}>
              <Link href={`/news/${newsItems.slug}`}>
                <Image
                  src={`/images/news/${newsItems.image}`}
                  alt={newsItems.title}
                  width={100}
                  height={100}
                />
                <span>{newsItems.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
