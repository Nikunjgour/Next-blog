import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 py-2 px-8 flex items-center justify-between">
      <Link href="/">
        <h1>Next-blog</h1>
      </Link>
      <ul className="flex items-center justify-between space-x-5">
        <li>
          <Link href="/blogs">blogs</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/login">login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
