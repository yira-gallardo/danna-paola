import Head from "next/head";
import styles from "@/styles/Tienda.module.css";
import { Nav } from "@/components/Nav/Nav";
import { Footer } from "@/components/Footer/Footer";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.text}>
              <p>Coming soon</p>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
