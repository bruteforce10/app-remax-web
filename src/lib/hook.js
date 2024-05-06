"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { MyContext } from "./AppContext";

function useSectionView(section, threshold = 0.5) {
  const { ref, inView } = useInView({ threshold: threshold });
  const { setAnchor } = MyContext();

  useEffect(() => {
    if (inView) {
      setAnchor(section);
    }
  }, [inView, ref, setAnchor, section]);

  return {
    ref,
  };
}

export default useSectionView;
