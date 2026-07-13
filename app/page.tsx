"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div></div>;
}
