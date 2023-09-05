"use client";

import React, { useState } from "react";

export default function Page() {
  console.log("Component rendering...");

  // the object is same. however it is gonna be renderd
  // because { ...same value } === { ...same value } = false
  // const [price, setPrice] = useState({
  //   number: 100,
  //   totalPrice: true,
  // });

  // const handleClick = () => {
  //   setPrice({
  //     number: 100,
  //     totalPrice: true,
  //   });
  // };

  // it isn't goona be renderd
  const [price, setPrice] = useState("test");

  const handleClick = () => {
    setPrice("test");
  };

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
