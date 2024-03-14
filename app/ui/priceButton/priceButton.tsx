import { ReactElement } from "react";
import styles from "./priceButton.module.css";

export default function BookingButton(): ReactElement {
  return <button className={styles.booking_button}>Узнать цену</button>;
}