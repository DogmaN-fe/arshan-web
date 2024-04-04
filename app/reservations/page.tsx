"use client";

import { ReactElement } from "react";
import styles from "./page.module.css";

export default function Page(): ReactElement {
  let address = `https://reservationsteps.ru/rooms/index/99c49abc-0cc5-475f-b870-63d0a34e92aa?colorSchemePreview=1&dfrom=27-03-2024&dto=28-03-2024`;

  return (
    <main className={styles.main}>
      <iframe className={styles.main_reservations} src={address} ></iframe>
    </main>
  );
}
