"use client";

import React, { useEffect, useState } from "react";

const PRICE_PER_ITEM = 5;

export default function Page() {
  const [quantity, setQuantity] = useState(1);
  // it is correct.
  let totalPrice = quantity * PRICE_PER_ITEM;

  const handleClick = () => {
    setQuantity(quantity + 1);
  };

  // baaaaaaaaaaaaaaaaaaaaaaaaad
  // useEffect(() => {
  //   totalPrice = quantity * PRICE_PER_ITEM;
  // }, [quantity]);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div>
        <button className="bg-blue-600 p-2 mb-3" onClick={handleClick}>
          add 1 item
        </button>
        <div>total price: {totalPrice}</div>
      </div>
    </div>
  );
}
