import Head from "next/head";
import styles from "@/styles/Foro.module.css";
import { Nav } from "@/components/Nav/Nav";
import { Footer } from "@/components/Footer/Footer";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Foro() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const authorRef = useRef();
  const commentRef = useRef();

  useEffect(() => {
    fetch("https://tmbc-api.vercel.app/api/danna/comments")
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const commentDate = new Date().toISOString().slice(0, 10);
    const comment = {
      author: authorRef.current.value,
      comment: commentRef.current.value,
      date: commentDate,
    };

    let formBody = [];
    for (const property in comment) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(comment[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch("https://tmbc-api.vercel.app/api/danna/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    }).then((response) => {
      if (response.ok === true) {
        setIsLoading(false);
        const newComments = comments;
        newComments.push(comment);
        setComments(newComments);
        authorRef.current.value = "";
        commentRef.current.value = "";
      } else {
        setIsLoading(false);
      }
    });
  };

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
                <form onSubmit={submitHandler}>
                  <input
                    ref={authorRef}
                    type="text"
                    name="name"
                    placeholder="Nombre"
                  />
                  <textarea
                    ref={commentRef}
                    name="message"
                    placeholder="Mensaje"
                  ></textarea>
                  {!isLoading ? <button>ENVIAR</button> : <p>Enviando...</p>}
                </form>
              </div>
              <div className={styles.messages}>
                {/* ALGORITMO DE SHOWS */}
                {comments.length > 0 &&
                  comments.map((comment) => (
                    <article className={styles.message} key={comment.id}>
                      <div className={styles.name}>{comment.author}</div>
                      <div className={styles.message}>
                        <p>{comment.comment}</p>
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
}
