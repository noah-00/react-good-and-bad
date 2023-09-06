"use client";

import React, { useEffect, useState } from "react";

// gooooooooood

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(1920);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return windowSize;
};

export function ExamleComponent1() {
  const windowSize = useWindowSize();

  return <div>component 1</div>;
}

export function ExamleComponent2() {
  const windowSize = useWindowSize();

  return <div>component 2</div>;
}
