import styles from "@/styles/Footer.module.css";

export const Footer = ({ tipo }) => {
  return (
    <footer
      className={`${styles.footer} ${
        tipo === "claro" ? styles.footerClaro : styles.footerOscuro
      }`}
    >
      Danna Paola 2023® Todos los derechos reservados
    </footer>
  );
};
