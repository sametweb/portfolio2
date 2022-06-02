import { useEffect, useState } from "react";
import useDebouncedState from "./useDebouncedState";

const useResizeObserver = (ref) => {
  const [realWidth, setRealWidth] = useState(0);
  const [realHeight, setRealHeight] = useState(0);
  const width = useDebouncedState(realWidth, 100);
  const height = useDebouncedState(realHeight, 100);

  useEffect(() => {
    const element = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const cr = entry.contentRect;
        setRealWidth(cr.width);
        setRealHeight(cr.height);
      }
    });

    if (element) {
      resizeObserver.observe(element);
    }
    return () => {
      resizeObserver.unobserve(element);
    };
  }, [ref]);

  return { width, height };
};

export default useResizeObserver;
