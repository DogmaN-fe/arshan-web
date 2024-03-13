import Link from "next/link";
import { ReactElement } from "react";
import styles from '@/app/ui/navigation/navigation.module.css'

export default function Navigation(): ReactElement {
  return (
    <nav className={styles.navigation}>
      <Link className={styles.navigation_link} href="#">концепция</Link>
      <Link className={styles.navigation_link} href="#">номера</Link>
      <Link className={styles.navigation_link} href="#">преимущества</Link>
      <Link className={styles.navigation_link} href="#">чем знаняться</Link>
      <Link className={styles.navigation_link} href="#">акции</Link>
      <Link className={styles.navigation_link} href="#">партнеры</Link>
      <Link className={styles.navigation_link} href="#">контакты</Link>
    </nav>
  );
}
