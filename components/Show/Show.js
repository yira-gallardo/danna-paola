import styles from "@/styles/Show.module.css";

export const Show = ({ date, venue, city, tickets, vip }) => {
  return (
    <div className={styles.showItem}>
      <div className={styles.left}>{date.substring(0, 10)}</div>
      <div className={styles.center}>
        <div className={styles.venue}>
          <div>{venue}</div>
          <div>{city}</div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.button}>
          <a href={tickets} target="_blank" rel="noreferrer">
            Boletos
          </a>
        </div>
        {vip && (
          <div className={styles.button}>
            <a href={tickets} target="_blank" rel="noreferrer">
              VIP
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
