import React from "react";
import styles from "../styles/BookCard.module.css";

export const BookCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageDiv}>
        <img
          className={styles.coverImage}
          src={
            "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
          }
        ></img>
      </div>
      <div className={styles.data}>
        <div className={styles.title}>The Kings Of Drugs</div>
        <div className={styles.author}>Nora Barrett</div>
        <div className={styles.stars}>likes</div>
      </div>
      <div className={styles.data}>Save</div>
    </div>
  );
};
