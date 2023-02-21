import Head from "next/head";
import styles from "@/styles/Tienda.module.css";
import { Nav } from "@/components/Nav/Nav";
import { Footer } from "@/components/Footer/Footer";

export default function Tienda() {
  return (
    <>
      <Head>
        <title>Danna Paola - Tienda</title>
        <meta name="description" content="Danna Paola" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav tipo="claro" />
      <Footer tipo="claro" />
      <main>
        <div className={styles.tienda}>
          <div className={styles.text}>
            <p>Coming soon</p>
          </div>
        </div>
      </main>
    </>
  );
}
