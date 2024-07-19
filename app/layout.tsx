import type { Metadata } from "next";
import "./globals.css";
import NavigationLogo from "./ui/navigationLogo/navigationLogo";
import Navigation from "./ui/navigation/navigation";
import { roboto } from "./lib/fonts";
import styles from "@/app/layout.module.css";
import MainLogoAndText from "./ui/mainLogoAndText/mainLogoAndText";
import Link from "next/link";
import ContacsSection from "./ui/contacsSection/contacsSection";

export const metadata: Metadata = {
  title: "Аршан Глэмпинг | наедине с природой",
  description: "Аршан-глэмпинг Глэмпинги Элиста Гостиницы Калмыкия...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <header id="header" className={styles.header}>
          <div className={styles.header_navigation}>
            <NavigationLogo />
            <Navigation />
            <Link
              className={styles.header_navigation_phone}
              href={"tel:+79150480808"}
            >
              +7 (915) 048-08-08
            </Link>
          </div>
          <MainLogoAndText />
        </header>
        {children}
        <footer className={styles.footer}>
          <ContacsSection />
          <div id="partners" className={styles.footer_partners}>
            <p className={styles.footer_partners_title}>Наши партнеры:</p>
            <a href="https://hotonglamping.ru" className={styles.footer_partners_partner}>
              Хотон-глемпинг
            </a>
          </div>
          <div className={styles.footer_copyright_and_yaer}>
            <p className={styles.footer_copyright}>© Аршан-глэмпинг</p>
            <p className={styles.footer_year}>2024, Официальный сайт</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
