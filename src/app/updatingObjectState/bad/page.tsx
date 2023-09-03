"use client";

import React, { useState, ChangeEvent } from "react";

export default function Page() {
  const [user, setUser] = useState({ name: "", city: "", age: 50 });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // bad
    setUser((user.name = e.target.value));
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
