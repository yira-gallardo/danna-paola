import Head from "next/head";
import styles from "@/styles/Tienda.module.css";
import { Nav } from "@/components/Nav/Nav";
import { Footer } from "@/components/Footer/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

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
            <Link href="https://umusicstore.com.mx/collections/danna-paola">
              <div className={styles.text}>
                <p>Ir a tienda</p>
              </div>
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
}
