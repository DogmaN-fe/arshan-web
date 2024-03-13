"use client";

import { ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./photoSlider.module.css";

import slide_1 from "@/public/Slider/DSC02705.jpg";
import slide_2 from "@/public/Slider/DSC02716.jpg";
import slide_3 from "@/public/Slider/DSC02756.jpg";
import slide_4 from "@/public/Slider/DSC02786.jpg";
import slide_5 from "@/public/Slider/DSC02864.jpg";
import slide_6 from "@/public/Slider/DSC02879.jpg";
import slide_7 from "@/public/Slider/DSC03179.jpg";
import slide_8 from "@/public/Slider/DSC03182.jpg";
import slide_9 from "@/public/Slider/DSC03197.jpg";
import slide_10 from "@/public/Slider/DSC03199.jpg";
import slide_11 from "@/public/Slider/DSC03209.jpg";

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

  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage(currentImage >= images.length - 1 ? 0 : currentImage + 1);
  };

  const prevSlide = () => {
    setCurrentImage(currentImage <= 0 ? images.length - 1 : currentImage - 1);
  };

  return (
    <section className={styles.slider}>
      <button
        className={`${styles.slider_button} ${styles.slider_button_left}`}
        onClick={prevSlide}
      >
        {"←"}
      </button>
      <button
        className={`${styles.slider_button} ${styles.slider_button_right}`}
        onClick={nextSlide}
      >
        {"→"}
      </button>
      <Image
        className={styles.slider_photo}
        src={images[currentImage]}
        alt={`image-${currentImage}`}
        width={800}
        height={600}
      />
    </section>
  );
}
