"use client";
import { useEffect } from "react";

export default function Test(tech: string) {
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/${tech}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return null;
}
