import { ReactElement } from "react";
import styles from "./contacsSection.module.css";
import Link from "next/link";
import Image from "next/image";

import address from "@/public/map_locator_vjwun2hnpw3r.svg";
import phone from "@/public/telephone_4f8o74njmimn.svg";
import mail from "@/public/mail_qbewr5yvdo6s.svg";

export default function ContacsSection(): ReactElement {
  return (
    <section id="contacs" className={styles.contacs_section}>
      
      <div className={styles.contacs}>
        <h4 className={styles.contacs_title}>Наш адрес:</h4>
        <span className={styles.position}>
          <Image src={address} alt="иконка локатора" width={16} height={16} />
          <p className={styles.contacs_address}>
            поселок Аршан, ул. Утренние зори, д. 11
          </p>
        </span>
        <span className={styles.position}>
          <Image src={mail} alt="иконка локатора" width={16} height={16} />
          <Link
            className={styles.contacs_mail}
            href="mailto:mail@arshanglamping.ru"
          >
            mail@arshanglamping.ru
          </Link>
        </span>
        <span className={styles.position}>
          <Image src={phone} alt="иконка локатора" width={16} height={16} />
          <Link className={styles.contacs_phone} href={"tel:+79629648888"}>
            +7 (962) 964-88-88
          </Link>
        </span>
      </div>
      <div className="map">
        <div style={{ position: "relative", overflow: "hidden" }}>
          <a
            href="https://yandex.ru/maps/org/arshan_glemping/210839481246/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "0",
            }}
          >
            Аршан-глэмпинг
          </a>
          <a
            href="https://yandex.ru/maps/11015/republic-of-kalmykia/category/glamping/112956978208/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "14px",
            }}
          >
            Глэмпинг в Республике Калмыкия
          </a>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=44.239754%2C46.269158&mode=search&oid=210839481246&ol=biz&sctx=ZAAAAAgCEAAaKAoSCcECmDJwIkZAEWDq501FIkdAEhIJDTKvHCGisD8RIq629DL%2Fpj8iBgABAgMEBSgKOABA0LIHSAFqAnJ1nQHNzEw9oAEAqAEAvQG%2BsaguwgEMnteMuJEG0JHr7qIFggIb0LDRgNGI0LDQvSDQs9C70Y3QvNC%2F0LjQvdCzigIMMTEyOTU2OTc4MjA4kgIGMjE2MDg5mgIMZGVza3RvcC1tYXBz&sll=44.239754%2C46.269158&source=serp_navig&sspn=0.090858%2C0.048525&text=%D0%B0%D1%80%D1%88%D0%B0%D0%BD%20%D0%B3%D0%BB%D1%8D%D0%BC%D0%BF%D0%B8%D0%BD%D0%B3&z=13.98"
            width="560"
            height="400"
            allowFullScreen={true}
            style={{ position: "relative" }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
