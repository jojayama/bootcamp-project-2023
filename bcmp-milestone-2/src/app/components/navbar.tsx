import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Home() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar}>
      <Link href="/"><h1> Jodi's Personal Website </h1></Link>
      <nav className={style.nav_list}>
        <li><Link href = "/">Home</Link></li>
        <li><Link href = "/blog">Blog</Link></li>
        <li><Link href = "/portfolio">Portfolio</Link></li>
        <li><Link href = "/resume">Resume</Link></li>
        <li><Link href = "/contact">Contact</Link></li>
      </nav>
    </header>
  );
}
