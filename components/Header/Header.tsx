"use client";

import AuthNavigation from "../AuthNavigation/AuthNavigation";
import Link from "next/link";
import css from "./Header.module.css";
import TagsMenu from "../../components/TagsMenu/TagsMenu";

export default function Header() {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <TagsMenu />
          </li>
          <AuthNavigation />
        </ul>
      </nav>
    </header>
  );
}
