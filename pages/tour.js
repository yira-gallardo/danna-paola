import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Tour.module.css";
import LISTA_DE_SHOWS from "@/constants/shows.json";
import { Show } from "@/components/Show/Show";
import { Nav } from "@/components/Nav/Nav";
import { Footer } from "@/components/Footer/Footer";
import { motion } from "framer-motion";

export default function Tour() {
  return (
    <>
      <Head>
        <title>Danna Paola - Tour</title>
        <meta name="description" content="Danna Paola" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav tipo="oscuro" />
      <Footer />
      <main>
        <section className={styles.tour}>
          <div className="container">
            <div className={styles.tourFlex}>
              <div className={styles.left}>
                <div className={styles.image}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/img/logodanna.jpeg"
                      alt="Danna Paola"
                      className={styles.imageImg}
                      width={2000}
                      height={1336}
                    />
                  </motion.div>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.shows}>
                  <div className={styles.showBox}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    >
                      {/* ALGORITMO DE SHOWS */}
                      {LISTA_DE_SHOWS.map((show) => (
                        <Show
                          key={show.id}
                          date={show.date}
                          venue={show.venue}
                          city={show.city}
                          tickets={show.tickets}
                          vip={show.vip}
                        />
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
