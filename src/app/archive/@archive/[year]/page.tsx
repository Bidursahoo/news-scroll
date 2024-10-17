import NewsList from "@/components/News/News";
import { getNewsForYear } from "@/lib/news";

export default function YearPage({ params }: { params: { year: string } }) {
  const yearValue = params.year;
  const newsFromYear = getNewsForYear(yearValue);
  return (
    <>
      <NewsList news={newsFromYear} />
    </>
  );
}
