"use client";
import { useEffect, useState } from "react";
import Test from "./Components/types/backts";
export default function Home() {
  const [selectedTech, setSelectedTech] = useState([]);

  async function handleSubmit(formData: FormData) {
    const inputValue = formData.get("username");

    setSelectedTech([...selectedTech, inputValue]);
    console.log(selectedTech);
  }
  return (
    <div>
      <form action={handleSubmit} className="flex flex-col gap-4 p-6">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          className="border p-2 rounded"
        />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
