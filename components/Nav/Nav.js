import Link from "next/link";
import styles from "@/styles/Nav.module.css";

export const Nav = ({ tipo }) => {
  return (
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
  );
};
