"use client";

import { useEffect, useState } from "react";
import Guide from "../Guide";
type Guide = {
  id: string;
  name: string;
  install: {
    arch?: string[];
    ubuntu?: string[];
    macos?: string[];
    windows?: string[];
  };
  verify: string[];
};

type Props = {
  techs: string[];
};

export default function Fetching({ techs }: Props) {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchGuides() {
      try {
        const results = await Promise.all(
          techs.map(async (tech) => {
            const res = await fetch(`http://127.0.0.1:5000/${tech}`);

            if (!res.ok) {
              throw new Error(`Failed to fetch ${tech} (${res.status})`);
            }

            return res.json();
          })
        );

        setGuides(results);
      } catch (err) {
        console.error(err);
        setError("Failed to load guides please refresh and try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchGuides();
  }, [techs]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <Guide guide={guides} />
  );
}
