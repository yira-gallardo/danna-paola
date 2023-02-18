import styles from "@/styles/Nav.module.css";

export const Nav = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles.link}>TOUR</div>
      <div className={styles.link}>MÚSICA</div>
      <div className={styles.link}>
        <h1>DANNA PAOLA</h1>
      </div>
      <div className={styles.link}>TIENDA</div>
      <div className={styles.link}>CONTACTO</div>
    </nav>
  );
};
