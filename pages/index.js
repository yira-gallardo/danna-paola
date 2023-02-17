import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Danna Paola</title>
        <meta name="description" content="Danna Paola" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.menu}>
        <div className={styles.link}>TOUR</div>
        <div className={styles.link}>MÚSICA</div>
        <div className={styles.link}>
          <h1>DANNA PAOLA</h1>
        </div>
        <div className={styles.link}>TIENDA</div>
        <div className={styles.link}>CONTACTO</div>
      </nav>
      <div className={styles.flex}>
        <div className={styles.left}>ipsum</div>
        <div className={styles.right}>lorem</div>
      </div>
      <main>
        <section
          className={styles.image}
          style={{ backgroundImage: "url(/img/danna-01.jpeg)" }}
        />
        <section
          className={styles.image}
          style={{ backgroundImage: "url(/img/danna-02.jpeg)" }}
        />
        <section
          className={styles.image}
          style={{ backgroundImage: "url(/img/danna-03.jpeg)" }}
        />
        <section
          className={styles.image}
          style={{ backgroundImage: "url(/img/danna-04.jpeg)" }}
        />
      </main>
      <footer className={styles.footer}>
        Danna Paola 2023® Todos los derechos reservados
      </footer>
    </>
  );
}
