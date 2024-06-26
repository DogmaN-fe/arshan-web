"use client";

import { IToDoCard } from "@/app/lib/types";
import { ReactElement, useState } from "react";
import Image from "next/image";
import styles from "./whatToDoSection.module.css";

import image_1 from "@/public/whatToDo/2023-10-22 21.02.51.png";
import image_2 from "@/public/whatToDo/DSC03262.png";
import image_3 from "@/public/whatToDo/dc25783a-e717-4a72-86e2-2772ce5480a9.png";
import image_4 from "@/public/whatToDo/eba88878-db4b-441e-be57-46b5e7e7bb47.png";
import image_5 from "@/public/whatToDo/f3f37c8b-7850-48e9-b4db-73b2642f3c71.png";
import image_6 from "@/public/whatToDo/DSCF5880.png";

export default function WhatToDoSection(): ReactElement {
  const ToDoCards: IToDoCard[] = [
    {
      image: image_1.src,
      description: "Посмотреть на звезды, сидя у костра",
    },
    {
      image: image_2.src,
      description: "Прогуляться по степи верхом на верблюдах или лошадях",
    },
    {
      image: image_3.src,
      description: "Испытать настоящий экстрим в турах на эндуро",
    },
    {
      image: image_4.src,
      description: "Отправиться в джип-тур",
    },
    {
      image: image_5.src,
      description: "Увидеть сайгаков на водопое или понаблюдать за пеликанами",
    },
    {
      image: image_6.src,
      description: "Насладиться блюдами калмыцкой кухни",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="whattodo" className={styles.section_what_to_do}>
      <div className={styles.what_to_do_position}>
        {ToDoCards.map((element, index) => {
          return (
            <div
              key={index}
              className={styles.what_to_do_card}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                className={styles.what_to_do_image}
                src={element.image}
                alt="картинка чем заняться"
                fill={true}
              />
              {
                <p className={styles.overlay_text}>{element.description}</p>
              }
            </div>
          );
        })}
      </div>
    </section>
  );
}
