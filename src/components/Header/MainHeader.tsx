import React from "react";
import NavLink from "../Nav-Links/NavLinks";

const MainHeader = () => {
  return (
    <header id="main-header">
      <div id="logo">
        <NavLink href="/">News Header</NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
