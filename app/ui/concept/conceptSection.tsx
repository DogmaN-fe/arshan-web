import { ReactElement } from "react";
import styles from "./conceptSection.module.css";
import BookingButton from "../bookingButton/bookingButton";

export default function ConceptSection(): ReactElement{
    return (<section className={styles.concept}>
        <div className={styles.concept_title}>
            <h2 className={styles.concept_title_text}>Место силы и семейного отдыха</h2>
        </div>
        <div className={styles.concept_description_and_button}>
            <p className={styles.concept_description}>Глэмпинг премиум-класса в окружении бескрайний степей.  Прикоснись к дикой природе, проведи время в кругу семьи, а все заботы мы возьмем на себя.</p>
            <BookingButton />
        </div>
    </section>);
}