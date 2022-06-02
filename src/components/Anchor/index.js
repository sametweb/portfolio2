import React, { useMemo } from "react";
import classNames from "classnames";
import styles from "./Anchor.module.css";

export default function Anchor(props) {
  const { offsetX, offsetY, isDragging, setIsDragging } = props;

  const positions = useMemo(() => {
    return {
      left: `${offsetX}%`,
      top: `${offsetY}%`,
    };
  }, [offsetX, offsetY]);

  const handleDrag = (event) => {
    if (event.type === "mousedown") {
      event.preventDefault();
      setIsDragging(true);
    } else if (event.type === "mouseup") {
      setIsDragging(false);
    }
  };

  const classnames = classNames(styles.anchor, {
    [styles.anchorDragging]: isDragging,
  });

  return (
    <div
      className={classnames}
      style={{ ...positions }}
      onMouseDown={handleDrag}
      onMouseUp={handleDrag}
    ></div>
  );
}
