"use client";
import { useEffect, useState } from "react";
import Test from "./Components/types/backts";
export default function Home() {
  const [data, setData] = useState("");
  const [Choosen, setChoosen] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          console.log(e.target.value);
        }}
      >
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
