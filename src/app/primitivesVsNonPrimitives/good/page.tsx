"use client";

import React, { useEffect, useState } from "react";

export default function Page() {
  console.log("Component rendering...");

  const [price, setPrice] = useState({
    number: 100,
    totalPrice: true,
  });

  const handleClick = () => {
    setPrice({
      number: 100,
      totalPrice: true,
    });
  };

  // this way is better
  useEffect(() => {}, [price.number]);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div>
        <button onClick={handleClick} className="p-2 bg-blue-600 rounded-md">
          countUp
        </button>
      </div>
    </div>
  );
}
