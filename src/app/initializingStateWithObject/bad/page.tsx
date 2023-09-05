"use client";

import React, { useEffect, useState } from "react";

type PostType = null | { title: string; body: string };

export default function Page() {
  const [post, setPost] = useState<PostType>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
