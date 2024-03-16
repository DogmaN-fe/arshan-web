"use client";

import { ReactElement, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./photoSlider.module.css";
import { useSwipeable } from "react-swipeable";

import slide_1 from "@/public/photoSlider/DSC02705.jpg";
import slide_2 from "@/public/photoSlider/DSC02716.jpg";
import slide_3 from "@/public/photoSlider/DSC02756.jpg";
import slide_4 from "@/public/photoSlider/DSC02786.jpg";
import slide_5 from "@/public/photoSlider/DSC02864.jpg";
import slide_6 from "@/public/photoSlider/DSC02879.jpg";
import slide_7 from "@/public/photoSlider/DSC03179.jpg";
import slide_8 from "@/public/photoSlider/DSC03182.jpg";
import slide_9 from "@/public/photoSlider/DSC03197.jpg";
import slide_10 from "@/public/photoSlider/DSC03199.jpg";
import slide_11 from "@/public/photoSlider/DSC03209.jpg";

export default function PhotoSlider(): ReactElement {
  const images = [
    slide_1.src,
    slide_2.src,
    slide_3.src,
    slide_4.src,
    slide_5.src,
    slide_6.src,
    slide_7.src,
    slide_8.src,
    slide_9.src,
    slide_10.src,
    slide_11.src,
  ];

  const [position, setPosition] = useState(45.45);

  const nextPhoto = () => {
    setPosition((prevPosition) => {
      if (prevPosition === -45.45) {
        return 45.45;
      } else {
        return prevPosition - 9.09;
      }
    });
  };

  const prevPhoto = () => {
    setPosition((prevPosition) => {
      if (prevPosition === 45.45) {
        return -45.45;
      } else {
        return prevPosition + 9.09;
      }
    });
  };

  const [startX, setStartX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSwipeMove = (deltaX: number) => {
    const sliderWidth = sliderRef.current?.offsetWidth || 0;
    const maxPosition = -(images.length - 1) * sliderWidth;

    let newPosition = position + deltaX;
    if (newPosition > 0) {
      newPosition = 0;
    } else if (newPosition < maxPosition) {
      newPosition = maxPosition;
    }

    setPosition(newPosition);
  };

  const handlers = useSwipeable({
    onSwiping: ({ deltaX }) => handleSwipeMove(deltaX),
    onSwiped: () => setStartX(position),
  });



  useEffect(() => {
    const interval = setInterval(() => {
      nextPhoto();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.slider} {...handlers}>
      <button
        className={`${styles.slider_button} ${styles.slider_button_left}`}
        onClick={prevPhoto}
      >
        {"❰"}
      </button>
      <button
        className={`${styles.slider_button} ${styles.slider_button_right}`}
        onClick={nextPhoto}
      >
        {"❱"}
      </button>
      <div
      ref={sliderRef}
        className={styles.slider_photos}
        style={{ transform: `translateX(${position}%)` }}
      >
        {images.map((image) => {
          return (
            <Image
              key={image}
              className={styles.slider_photo}
              src={image}
              alt={`фото-${image}`}
              width={1200}
              height={800}
            />
          );
        })}
      </div>
    </section>
  );
}
