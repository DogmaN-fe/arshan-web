import PhotoSlider from "./ui/photoSlider/photoSlider";
import styles from "./page.module.css";
import ConceptSection from "./ui/concept/conceptSection";
import HouseSlider from "./ui/houseSlider/houseSlider";

export default function Page() {
  return (
    <main className={styles.main}>
      <p className={styles.section_title}>фото глэмпинг</p>
      <PhotoSlider />
      <ConceptSection />
      <p className={styles.section_title}>Номера глэмпинга</p>
      <HouseSlider />
    </main>
  );
}
