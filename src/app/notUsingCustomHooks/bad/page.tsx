"use client";

import React, { useEffect, useState } from "react";

// baaaaaaaaaaad

export function ExamleComponent1() {
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

  return <div>component 1</div>;
}

export function ExamleComponent2() {
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

  return <div>component 2</div>;
}
