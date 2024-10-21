// import NewsList from "@/components/News/News";
// import { DUMMY_NEWS } from "@/dummy-news";

// export default function NewsPage() {
//   return (
//     <>
//       <h1>News Page</h1>
//       <NewsList news={DUMMY_NEWS} />
//     </>
//   );
// }






// client side updation

// "use client";
// import NewsList from "@/components/News/News";
// // import { DUMMY_NEWS } from "@/dummy-news";
// import { useEffect, useState } from "react";

// export default function NewsPage() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorState, setErrorState] = useState(undefined);
//   const [news, setNews] = useState([]);
//   useEffect(() => {
//     async function fetchNews() {
//       setIsLoading(true);
//       const newsResponse = await fetch("http://localhost:8080/news");
//       if (!newsResponse.ok) {
//         setErrorState("Error Fetching Data");
//         setIsLoading(false);
//       }
//       setIsLoading(false);
//       const news = await newsResponse.json();
//       setNews(news);
//     }
//     fetchNews();
//   }, []);
//   if (isLoading) {
//     return <p>Loading...</p>;
//   }
//   if (errorState) {
//     return <p>{errorState}</p>;
//   }
//   let newsContent;
//   if (news) {
//     newsContent = <NewsList news={news} />;
//   }
//   return (
//     <>
//       <h1>News Page</h1>
//       {newsContent}
//     </>
//   );
// }




// server side validation



import NewsList from "@/components/News/News";

export default async function NewsPage() {
  const newsResponse = await fetch("http://localhost:8080/news");
  if (!newsResponse.ok) {
    throw new Error("Error while fetching");
  }
  const news = await newsResponse.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
