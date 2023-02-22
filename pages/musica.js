import Head from "next/head";
import styles from "@/styles/Musica.module.css";
import { Nav } from "@/components/Nav/Nav";
import { Footer } from "@/components/Footer/Footer";
import { motion } from "framer-motion";

export default function Musica() {
  return (
    <>
      <Head>
        <title>Danna Paola - Música</title>
        <meta name="description" content="Danna Paola" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav tipo="claro" />
      <Footer tipo="claro" />
      <main>
        <section className={styles.musica}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className={styles.musicaFlex}>
                <div className={styles.title}>MÚSICA</div>
                <div className={styles.spotify}>
                  <iframe
                    src="https://open.spotify.com/embed/artist/5xSx2FM8mQnrfgM1QsHniB?utm_source=generator&theme=0"
                    width="100%"
                    height="380"
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
