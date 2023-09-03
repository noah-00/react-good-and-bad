"use client";

import React, { useState, ChangeEvent } from "react";

export default function Page() {
  const [user, setUser] = useState({ name: "", city: "", age: 50 });
  console.log(user);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // this is corect
    setUser({
      ...user,
      name: e.target.value,
    });

    // or
    setUser((prev) => {
      return {
        ...prev,
        name: e.target.value,
      };
    });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Your name"
        onChange={handleChange}
        className="text-black"
      />
    </form>
  );
}
