"use client";

import Link from "next/link";
import { ReactElement } from "react";
import styles from "@/app/ui/navigation/navigation.module.css";

export default function Navigation(): ReactElement {
  const handleClick = (e: any) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <nav className={styles.navigation}>
      <Link
        className={styles.navigation_link}
        href="#concept"
        onClick={handleClick}
      >
        Концепция
      </Link>
      <Link
        className={styles.navigation_link}
        href="#house"
        onClick={handleClick}
      >
        Номера
      </Link>
      <Link
        className={styles.navigation_link}
        href="#advantage"
        onClick={handleClick}
      >
        Преимущества
      </Link>
      <Link className={styles.navigation_link} href="#whattodo"
        onClick={handleClick}>
        Чем знаняться
      </Link>
      <Link className={styles.navigation_link} href="#">
        Акции
      </Link>
      <Link className={styles.navigation_link} href="#">
        Партнеры
      </Link>
      <Link
        className={styles.navigation_link}
        href="#contacs"
        onClick={handleClick}
      >
        Контакты
      </Link>
    </nav>
  );
}
