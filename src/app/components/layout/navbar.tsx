import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => (
  <nav className="text-[24px]">
    <ul className="flex justify-center gap-10">
      <li>
        <Link href="/">Homepage</Link>
      </li>
      <li>
        <Link href="/maze">Maze</Link>
      </li>
      <li>
        <Link href="/sort">Sort</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
