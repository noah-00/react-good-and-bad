"use client";

import React, { useEffect, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log("Interval function running");
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return <div>Count is: {count}</div>;
}
