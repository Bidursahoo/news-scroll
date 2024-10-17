import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((newsItems) => {
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
  );
}
