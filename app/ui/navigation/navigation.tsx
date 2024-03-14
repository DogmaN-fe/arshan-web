import Link from "next/link";
import { ReactElement } from "react";
import styles from '@/app/ui/navigation/navigation.module.css'

export default function Navigation(): ReactElement {
  return (
    <nav className={styles.navigation}>
      <Link className={styles.navigation_link} href="#">Концепция</Link>
      <Link className={styles.navigation_link} href="#">Номера</Link>
      <Link className={styles.navigation_link} href="#">Преимущества</Link>
      <Link className={styles.navigation_link} href="#">Чем знаняться</Link>
      <Link className={styles.navigation_link} href="#">Акции</Link>
      <Link className={styles.navigation_link} href="#">Партнеры</Link>
      <Link className={styles.navigation_link} href="#">Контакты</Link>
    </nav>
  );
}
