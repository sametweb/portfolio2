import { useState } from "react";
import { TopLeft, TopRight, BottomLeft, BottomRight } from "./blocks";
import { Anchor, Block } from "./components";
import styles from "./styles/App.module.css";

const lowest = 25;
const highest = 75;

function App() {
  const [offsetX, setOffsetX] = useState(50);
  const [offsetY, setOffsetY] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = ({
    clientX,
    clientY,
    view: { innerWidth, innerHeight },
  }) => {
    if (isDragging) {
      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;
      const left = x < lowest ? lowest : x > highest ? highest : x;
      const top = y < lowest ? lowest : y > highest ? highest : y;
      setOffsetX(left);
      setOffsetY(top);
    }
  };
  console.log({ offsetX, offsetY });
  return (
    <div
      className={styles.wrapper}
      onMouseMove={handleMouseMove}
      onMouseUp={() => setIsDragging(false)}
    >
      <Block left={offsetX} top={offsetY} isDragging={isDragging}>
        <TopLeft />
      </Block>
      <Block left={100 - offsetX} top={offsetY} isDragging={isDragging}>
        <TopRight />
      </Block>
      <Block left={offsetX} top={100 - offsetY} isDragging={isDragging}>
        <BottomLeft />
      </Block>
      <Block left={100 - offsetX} top={100 - offsetY} isDragging={isDragging}>
        <BottomRight />
      </Block>
      <Anchor
        offsetX={offsetX}
        offsetY={offsetY}
        handleMouseMove={handleMouseMove}
        isDragging={isDragging}
        setIsDragging={setIsDragging}
      />
    </div>
  );
}

export default App;
