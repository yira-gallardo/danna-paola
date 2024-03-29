import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Tour.module.css";
import { Show } from "@/components/Show/Show";
import { Nav } from "@/components/Nav/Nav";
import { Footer } from "@/components/Footer/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Tour() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://tmbc-api.vercel.app/api/danna/tour")
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Danna Paola - Tour</title>
        <meta name="description" content="Danna Paola" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav tipo="claro" />
      <Footer tipo="claro" />
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
                      src="/img/danna-paola-tour-3.png"
                      alt="Danna Paola"
                      className={styles.imageImg}
                      width={1920}
                      height={1080}
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
                      {shows.length > 0 &&
                        shows.map((show, idx) => (
                          <Show
                            key={show.id}
                            date={show.date}
                            venue={show.venue}
                            city={show.city}
                            tickets={show.tickets}
                            vip={show.tickets_vip}
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
