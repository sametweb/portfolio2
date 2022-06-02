import classNames from "classnames";
import React from "react";
import styles from "./Block.module.css";

export default function Block(props) {
  const { left, top, isDragging, children } = props;
  const width = left + "%";
  const height = top + "%";

  const classnames = classNames(styles.block, {
    [styles.blockDragging]: isDragging,
  });

  return (
    <div
      className={classnames}
      style={{ width, height, opacity: isDragging ? 0.2 : 1 }}
    >
      {children}
    </div>
  );
}
