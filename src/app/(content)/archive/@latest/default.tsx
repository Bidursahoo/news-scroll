import NewsList from "@/components/News/News";
import { getLatestNews } from "@/lib/news";

export default function LatestPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest Page</h2>
      <NewsList news={latestNews} />
    </>
  );
}
