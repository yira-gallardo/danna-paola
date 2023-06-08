import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import GALLERY from "@/constants/gallery.json";
import InfiniteScroll from "react-infinite-scroll-component";
import { Nav } from "@/components/Nav/Nav";
import { motion } from "framer-motion";

export default function Home() {
  const [items, setItems] = useState(GALLERY);

  const addItems = () => {
    setItems(items.concat(GALLERY));
  };
  return (
    <>
      <Head>
        <title>Danna Paola</title>
        <meta name="description" content="Danna Paola" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav tipo="claro" />
      <div className={styles.flex}>
        <div className={styles.left}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://open.spotify.com/artist/5xSx2FM8mQnrfgM1QsHniB?si=munR7UUSRLiSHjd3ZcVZ7Q"
            >
              XTAS1S
            </a>
          </motion.div>
        </div>
        <div className={styles.right}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link href="/tour" className={styles.link}>
              TOUR
            </Link>
          </motion.div>
        </div>
      </div>
      <main>
        <section className={styles.image}>
          <div className={styles.video}>
            <video width="400" autoPlay loop muted>
              <source src="header.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
        <InfiniteScroll
          dataLength={items.length}
          next={addItems}
          hasMore={true}
        >
          {items.map((image) => (
            <section
              key={image.id}
              className={styles.image}
              style={{ backgroundImage: `url(/img/${image.url})` }}
            />
          ))}
        </InfiniteScroll>
      </main>
      <footer className={styles.footer}>
        Danna Paola 2023® Todos los derechos reservados
      </footer>
    </>
  );
}
