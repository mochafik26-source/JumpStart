"use client";

import { useEffect, useState } from "react";

export default function Test(techs: string[]) {
  const [guides, setGuides] = useState<any[]>([]);

  useEffect(() => {
    async function fetchGuides() {
      const results = await Promise.all(
        techs.map(async (tech) => {
          const res = await fetch(`http://localhost:5000/${tech}`);
          return res.json();
        }),
      );

      setGuides(results);
    }

    fetchGuides();
  }, []);

  return guides;
}
