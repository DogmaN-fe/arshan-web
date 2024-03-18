import type { Metadata } from "next";
import "./globals.css";
import NavigationLogo from "./ui/navigationLogo/navigationLogo";
import Navigation from "./ui/navigation/navigation";
import { roboto } from "./lib/fonts";
import styles from "@/app/layout.module.css";
import MainLogoAndText from "./ui/mainLogoAndText/mainLogoAndText";
import Link from "next/link";

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
              href={"tel:+79629648888"}
            >
              +7 (962) 964-88-88
            </Link>
          </div>
          <MainLogoAndText />
        </header>
        {children}
        <footer>
          
        </footer>
      </body>
    </html>
  );
}
