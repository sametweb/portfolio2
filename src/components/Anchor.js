import React, { useMemo, useState } from "react";

export default function Anchor(props) {
  const { anchor, isDragging, setIsDragging } = props;

  const styles = useMemo(() => {
    const [x, y] = anchor;
    return {
      left: `${x}%`,
      top: `${y}%`,
    };
  }, [anchor]);

  const handleDrag = (event) => {
    if (event.type === "mousedown") {
      event.preventDefault();
      setIsDragging(true);
    } else if (event.type === "mouseup") {
      setIsDragging(false);
    }
  };

  console.log(isDragging);
  return (
    <div
      className={`w-6 h-6 -translate-x-3 -translate-y-3 absolute rounded-full bg-white cursor-move bg-gradient-to-br from-slate-600 to-slate-800 ${isDragging ? 'from-indigo-600 to-indigo-800' : ''}`}
      style={{ ...styles }}
      onMouseDown={handleDrag}
      onMouseUp={handleDrag}
    ></div>
  );
}
