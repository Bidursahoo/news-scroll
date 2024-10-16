import Link from "next/link";

export default function NewsPage() {
  return (
    <div>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/firstPage">first news page </Link>
        </li>
        <li>
          <Link href="/news/secondPage">second news page </Link>
        </li>
        <li>
          <Link href="/news/thirdPage">third news page </Link>
        </li>
      </ul>
    </div>
  );
}
