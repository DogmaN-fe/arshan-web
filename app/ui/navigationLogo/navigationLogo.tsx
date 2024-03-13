import Image from "next/image";
import Link from "next/link";
import logo from "@/public/navigationLogo.svg";
import styles from "@/app/ui/navigationLogo/navigationLogo.module.css";
import { ReactElement } from "react";

export default function NavigationLogo(): ReactElement {
  return (
    <Link className={styles.logo} href={"#"}>
      <Image
        src={logo}
        width={120}
        height={120}
        priority={true}
        alt={"Логотип"}
      />
    </Link>
  );
}
