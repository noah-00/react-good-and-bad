"use client";

import React, { useEffect, useState } from "react";

interface GoodProps {
  id: number;
}

// this one is good
export default function Good({ id }: GoodProps) {
  const [something, setSomething] = useState("fdfdsjdfoi");

  useEffect(() => {}, [setSomething]);

  // if (!id) {
  //   return "No id provided";
  // }

  // return <div>Good</div>;

  // One retrun is easier to see.
  return <section>{!id ? "No id provided" : `id is ${id}`}</section>;
}
