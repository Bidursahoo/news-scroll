import Link from "next/link";
import React from "react";

const MainHeader = () => {
  return (
    <>
      <h1>News Header</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </>
  );
};

export default MainHeader;
