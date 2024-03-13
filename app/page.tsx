import PhotoSlider from "./ui/photoSlider/photoSlider";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <p>фото</p>
      <PhotoSlider />
    </main>
  );
}
