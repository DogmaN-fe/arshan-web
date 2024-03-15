import Image from "next/image";
import mainLogo from "@/public/navigationLogo.svg";
import styles from "./mainLogoAndText.module.css";
import { ReactElement } from "react";
import BookingButton from "../bookingButton/bookingButton";

export default function MainLogoAndText(): ReactElement {
  return (
    <section className={styles.main_logo_section}>
      <div className={styles.main_logo_section_position}>
      <Image
        className={styles.main_logo_img}
        src={mainLogo}
        width={300}
        height={300}
        alt={"Логотип"}
      />

      <h1 className={styles.main_logo_title}>
        Аршан Глэмпинг – отдых на лоне дикой природы при высоком уровне сервиса
      </h1>

      <BookingButton className={styles.main_logo_button}/>
      </div>
    </section>
  );
}
