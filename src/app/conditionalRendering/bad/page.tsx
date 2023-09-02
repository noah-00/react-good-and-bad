"use client";

import React, { useEffect, useState } from "react";

interface GoodProps {
  id: number;
}

// Not allowing useEffect or useState before return.
export default function Good({ id }: GoodProps) {
  if (!id) {
    return "No id provided";
  }

  const [something, setSomething] = useState("fdfdsjdfoi");

  useEffect(() => {}, [setSomething]);

  return <div>Good</div>;
}
