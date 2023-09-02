"use client";

import React, { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  // This one will quadruple.
  const handleClick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
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
