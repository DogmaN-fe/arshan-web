import { ReactElement } from "react";
import styles from "./priceButton.module.css";
import Link from "next/link";

export default function BookingButton( { roomType,
}: {
  roomType: string;
}): ReactElement {
  return (
    <Link href={`/reservations/?room-type=${roomType}`}>
      <button className={styles.booking_button}>Узнать цену</button>
    </Link>
  );
}