import { ReactElement } from "react";
import styles from "./bookingButton.module.css";

export default function BookingButton({
  className = "",
}: {
  className: string;
}): ReactElement {
  return (
    <button className={`${styles.booking_button}  ${className}`}>
      забронировать
    </button>
  );
}
