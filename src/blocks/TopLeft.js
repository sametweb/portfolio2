import React, { useRef } from "react";
import useResizeObserver from "../utils/useResizeObserver";
import styles from "./BlockStyles.module.css";

export default function TopLeft(props) {
  const ref = useRef(null);
  const { width, height } = useResizeObserver(ref);

  return (
    <div ref={ref} className={styles.topLeft}>
      <h1 className={styles.title}>Hello! 👋🏻</h1>
      <h2 className={styles.subtitle}>This is Samet.</h2>
      <p className={styles.description}>I love building for web!</p>
    </div>
  );
}
