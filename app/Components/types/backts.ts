"use client";

import { useEffect, useState } from "react";
type Props = {
  techs: string[];
};
export default function Fetching({techs}: props) {
  const [guides, setGuides] = useState<any>([]);

  useEffect(() => {
    async function fetchGuides() {
      const results = await Promise.all(
        techs.map(async (tech) => {
          const res = await fetch(`http://localhost:5000/${tech}`);
          return res.json();
          
        }),
      );

      setGuides(results);
      console.log(results[1].id);
    }

    fetchGuides();
  }, []);

  return guides;
}
