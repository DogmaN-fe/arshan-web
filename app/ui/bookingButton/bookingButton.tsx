import { ReactElement } from "react";
import styles from "./bookingButton.module.css";

export default function BookingButton(): ReactElement {
  return <button className={styles.booking_button}>забронировать</button>;
}
