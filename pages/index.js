import Head from "next/head";
import styles from "@/styles/Home.module.css";
import GALLERY from "@/constants/gallery.json";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

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
