import { ReactElement } from "react";
import styles from "./advantagesSection.module.css";
import { IAdvantageCard } from "@/app/lib/types";
import Image from "next/image";

import icon_1 from "@/public/advantages/barbecue_glv7tyjfr66v.svg";
import icon_2 from "@/public/advantages/breakfast_7e7vm8onfdrh.svg";
import icon_3 from "@/public/advantages/jeep_m6wp9yijkgvk.svg";
import icon_4 from "@/public/advantages/lodge_i1yrt3eisklf.svg";
import icon_5 from "@/public/advantages/pet_d3vvkgj6ryfx.svg";
import icon_6 from "@/public/advantages/shuttle_s1j7enw1hfn5.svg";
import icon_7 from "@/public/advantages/swing_uric1bki2f4z.svg";
import icon_8 from "@/public/advantages/travel_wqt760oyyanv.svg";

export default function AdvantagesSection(): ReactElement {
  const icons: IAdvantageCard[] = [
    { icon: icon_4.src, description: "Видовые домики" },
    { icon: icon_1.src, description: "Костровая площадка и мангальная зона" },
    { icon: icon_2.src, description: "Завтраки и кейтеринг" },
    { icon: icon_3.src, description: "Авторские экскурсии и джип-туры" },
    { icon: icon_5.src, description: "Pet-friendly" },
    { icon: icon_6.src, description: "Авторские экскурсии и джип-туры" },
    { icon: icon_7.src, description: "Детская площадка" },
    { icon: icon_8.src, description: "Трансфер" },
  ];

  return (
    <section id="advantage" className={styles.advantages_section}>
      <div className={styles.advantages_text}>
      <p className={styles.advantages_title}>ПРЕИМУЩЕСТВА</p>
      </div>
      <div className={styles.advantages_icons_and_description}>
        {icons.map((element, index) => {
          return <article key={index} className={styles.advantage}>
            <div className={styles.advantage_circle}>
              <Image className={styles.advantage_icon} src={element.icon} alt={element.description} width={56} height={56}/>
            </div>
            <p className={styles.advantage_description}>{element.description}</p>
          </article>;
        })}
      </div>
    </section>
  );
}
