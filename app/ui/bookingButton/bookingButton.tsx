import { ReactElement } from "react";
import styles from "./bookingButton.module.css";
import Link from "next/link";

export default function BookingButton({
  className = "",
}: {
  className: string;
}): ReactElement {
  return (
    <Link href="/reservations">
      <button className={`${styles.booking_button}  ${className}`}>
        забронировать
      </button>
    </Link>
  );
}