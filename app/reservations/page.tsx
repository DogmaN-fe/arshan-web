"use client";

import { ReactElement } from "react";
import styles from "./page.module.css";

export default function Page(): ReactElement {
  let address = `https://reservationsteps.ru/rooms/index/aea23486-a63a-4e1d-802c-0d24d26a0608`;

  return (
    <main className={styles.main}>
      <iframe className={styles.main_reservations} src={address}></iframe>
    </main>
  );
}
