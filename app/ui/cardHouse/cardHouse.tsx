import { ReactElement } from "react";
import Image from "next/image";
import PriceButton from "../priceButton/priceButton";
import styles from "./cardHouse.module.css";

export default function CardHouse({
  photo,
  title,
  description,
  roomType,
}: {
  photo: string;
  title: string;
  description: string;
  roomType: string;
}): ReactElement {
  return (
    <article
      className={styles.card}
      style={{ background: `url(${photo})`, backgroundSize: `cover` }}
    >
      <div className={styles.darkness}>
        <div className={styles.card_info}>
          <h3 className={styles.card_info_title}>{title}</h3>
          <p className={styles.card_info_description}>{description}</p>
          <PriceButton roomType={roomType} />
        </div>
        <div className={styles.card_photo}>
          <Image
            src={photo}
            alt={`фото дома - ${photo}`}
            fill={true}
          />
        </div>
      </div>
    </article>
  );
}
