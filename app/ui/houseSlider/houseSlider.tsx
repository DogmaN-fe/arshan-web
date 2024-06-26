"use client";

import { ReactElement, useEffect, useState } from "react";
import styles from "./houseSlider.module.css";

import slide_1 from "@/public/houseSlider/DSC02786.png";
import slide_2 from "@/public/houseSlider/DSC03182.png";
import CardHouse from "../cardHouse/cardHouse";
import { IHouseCard } from "@/app/lib/types";

export default function HouseSlider(): ReactElement {
  const houseCards: IHouseCard[] = [
    {
      photo: slide_1.src,
      title: "Барнхаус для двоих",
      description:
        "Стильные видовые дома с панорамными окнами и верандами. Оснащены всем необходимым для комфортного проживания: кухня, ванная комната, спальня-гостиная с кроватью king-size, с телевизором и кондиционером.  Идеально подходит для пар, желающих провести время вместе, наслаждаясь природой и друг другом.",
      roomType: "433998",
    },
    {
      photo: slide_2.src,
      title: "А-фрейм",
      description:
        "Двухэтажные видовые дома вместимостью до 6 человек с панорамными окнами и просторными верандами. Оснащены всем необходимым для комфортного проживания: кухня, ванная комната, гостиная, спальня на мансардном этаже с кроватью king-size и потрясающим видом, спальня с 2 кроватями.  Идеально подходит для семейного отдыха или дружеских посиделок.",
      roomType: "433998",
    },
  ];

  const [position, setPosition] = useState(25);

  const [touchStartX, setTouchStartX] = useState(25);
  const [touchEndX, setTouchEndX] = useState(25);

  const nextHouse = () => {
    setPosition((prevPosition) => {
      if (prevPosition === -25) {
        return -25;
      } else {
        return prevPosition - 50;
      }
    });
  };

  const prevHouse = () => {
    setPosition((prevPosition) => {
      if (prevPosition === 25) {
        return 25;
      } else {
        return prevPosition + 50;
      }
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      nextHouse();
    } else if (diff < -50) {
      prevHouse();
    }
  };

  return (
    <section id="house" className={styles.slider}>
      <div
        className={styles.slider_house_cards}
        style={{ transform: `translateX(${position}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {houseCards.map((houseCard) => {
          return (
            <CardHouse
              key={houseCard.title}
              photo={houseCard.photo}
              title={houseCard.title}
              description={houseCard.description}
              roomType={houseCard.roomType}
            />
          );
        })}
      </div>
      <div className={styles.buttons}>
        <button className={`${styles.slider_button}`} onClick={prevHouse}>
          {"←"}
        </button>
        <button className={`${styles.slider_button}`} onClick={nextHouse}>
          {"→"}
        </button>
      </div>
    </section>
  );
}
