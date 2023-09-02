"use client";

import React, { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  // The result of this function is not 4 times larger
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

    // Because it would mean the same thing as below.
    // setCount(0 + 1);
    // setCount(0 + 1);
    // setCount(0 + 1);
    // setCount(0 + 1);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div>
        <button onClick={handleClick} className="p-2 bg-blue-600 rounded-md">
          countUp
        </button>
        <div className="p-2">count: {count}</div>
      </div>
    </div>
  );
}
