import Head from "next/head";
import styles from "@/styles/Foro.module.css";
import { Nav } from "@/components/Nav/Nav";
import { Footer } from "@/components/Footer/Footer";
import { motion } from "framer-motion";

export default function Foro() {
  return (
    <>
      <Head>
        <title>Danna Paola - Foro</title>
        <meta name="description" content="Danna Paola" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav tipo="oscuro" />
      <Footer tipo="oscuro" />
      <main>
        <motion.div>
          <div className={styles.foro}>
            <div className="container">
              <div className={styles.divider} />
              <div className={styles.title}>
                <h2>Foro</h2>
                <h4>Dejame un mensaje:</h4>
              </div>
              <div className={styles.form}>
                <form>
                  <input type="text" name="name" placeholder="Nombre" />
                  <textarea name="message" placeholder="Mensaje"></textarea>
                </form>
                <button>ENVIAR</button>
              </div>
              <div className={styles.messages}>
                <article className={styles.message}>
                  <div className={styles.name}>Juan</div>
                  <div className={styles.message}>
                    <p>
                      Tempor ad sunt commodo ea nulla aliqua. Do sit non do
                      eiusmod occaecat eu minim aliqua Lorem duis occaecat.
                      Eiusmod nulla irure excepteur qui.
                    </p>
                  </div>
                </article>
                <article className={styles.message}>
                  <div className={styles.name}>María</div>
                  <div className={styles.message}>
                    <p>
                      Tempor ad sunt commodo ea nulla aliqua. Do sit non do
                      eiusmod occaecat eu minim aliqua Lorem duis occaecat.
                      Eiusmod nulla irure excepteur qui.
                    </p>
                  </div>
                </article>
                <article className={styles.message}>
                  <div className={styles.name}>Jorge</div>
                  <div className={styles.message}>
                    <p>
                      Tempor ad sunt commodo ea nulla aliqua. Do sit non do
                      eiusmod occaecat eu minim aliqua Lorem duis occaecat.
                      Eiusmod nulla irure excepteur qui.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
}
