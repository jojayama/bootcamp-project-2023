import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Home() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar}>
      <Link href="/"><h1> Jodi's Personal Website </h1></Link>
      <nav>
        {/* <Link href="/">Home</Link>
        <Link href="/about">About Me</Link>
        <Link href="/resume">Resume</Link> */}
        <table>
        <tr>
          <td><Link href="/">Home</Link></td>
          <td><Link href="/blog">Blog</Link></td>
          <td><Link href="/resume">Resume</Link></td>
          <td><Link href="/portfolio">Portfolio</Link></td>
          <td><Link href="/contact">Contact</Link></td>
        </tr>
      </table>
      </nav>
    </header>
  );
}
