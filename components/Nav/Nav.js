import Link from "next/link";
import styles from "@/styles/Nav.module.css";
import { useState } from "react";

export const Nav = ({ tipo }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <div>
      <nav
        className={`${styles.navDesktop} ${
          tipo === "claro" ? styles.menuClaro : styles.menuOscuro
        }`}
      >
        <Link href="/tour" className={styles.link}>
          TOUR
        </Link>
        <Link href="/musica" className={styles.link}>
          MÚSICA
        </Link>
        <Link href="/" className={styles.link}>
          <h1>DANNA PAOLA</h1>
        </Link>
        <Link href="/tienda" className={styles.link}>
          TIENDA
        </Link>
        <Link href="/contacto" className={styles.link}>
          CONTACTO
        </Link>
      </nav>
      <nav
        className={`${styles.navMobile} ${
          tipo === "claro" ? styles.menuClaro : styles.menuOscuro
        }`}
      >
        <div className={styles.burger} onClick={() => setIsMenuActive(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      </nav>
      {isMenuActive && (
        <div className={styles.menuMobile}>
          <Link
            href="/"
            className={styles.link}
            onClick={() => setIsMenuActive(false)}
          >
            <h1>DANNA PAOLA</h1>
          </Link>
          <Link
            href="/tour"
            className={styles.link}
            onClick={() => setIsMenuActive(false)}
          >
            TOUR
          </Link>
          <Link
            href="/musica"
            className={styles.link}
            onClick={() => setIsMenuActive(false)}
          >
            MÚSICA
          </Link>
          <Link
            href="/tienda"
            className={styles.link}
            onClick={() => setIsMenuActive(false)}
          >
            TIENDA
          </Link>
          <Link
            href="/contacto"
            className={styles.link}
            onClick={() => setIsMenuActive(false)}
          >
            CONTACTO
          </Link>
        </div>
      )}
    </div>
  );
};
