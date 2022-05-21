import { useState } from "react";
import Anchor from "./components/Anchor";
import Block from "./components/Block";
import BottomLeft from "./components/BottomLeft";
import BottomRight from "./components/BottomRight";
import TopLeft from "./components/TopLeft";
import TopRight from "./components/TopRight";
import styles from "./styles/App.module.css";

const lowest = 25;
const highest = 75;

function App() {
  const [anchor, setAnchor] = useState([50, 50]);
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
      setAnchor([left, top]);
    }
  };

  return (
    <div
      className={styles.wrapper}
      onMouseMove={handleMouseMove}
      onMouseUp={() => setIsDragging(false)}
    >
      <Block left={anchor[0]} top={anchor[1]} isDragging={isDragging}>
        <TopLeft />
      </Block>
      <Block left={100 - anchor[0]} top={anchor[1]} isDragging={isDragging}>
        <TopRight />
      </Block>
      <Block left={anchor[0]} top={100 - anchor[1]} isDragging={isDragging}>
        <BottomLeft />
      </Block>
      <Block left={100 - anchor[0]} top={100 - anchor[1]} isDragging={isDragging}>
        <BottomRight />
      </Block>
      <Anchor
        anchor={anchor}
        handleMouseMove={handleMouseMove}
        isDragging={isDragging}
        setIsDragging={setIsDragging}
      />
    </div>
  );
}

export default App;
