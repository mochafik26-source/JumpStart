"use client";
import { useEffect, useState } from "react";
import Test from "./Components/types/backts";
import Selecting from "./Components/Selecting";
export default function Home() {
  const Languages = ["git", "next", "react", "node", "taiwlind"];

  return (
    <>
      {Languages.map((tech) => (
        <Selecting key={tech} Techs={tech} />
      ))}
      ;
    </>
  );
}
