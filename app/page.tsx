"use client";
import { useEffect, useState } from "react";
import Test from "./Components/types/backts";
import Button from "./Components/Selecting";
export default function Home() {
  const Languages = ["git", "next", "react", "node", "taiwlind"];
 const [selectedIndex, setSelectedIndex] = useState<string[]>([]);

function Select(position: string) {
  setSelectedIndex(prev =>
    prev.includes(position)
      ? prev.filter(i => i !== position)
      : [...prev, position]
  );


}
useEffect(() => {
 console.log(selectedIndex);
},[selectedIndex])
  return (
    <>
	<ul>
      	{Languages.map((item,index) => (
         <li
          key={index}
          onClick={() => Select(item)}
          style={{
            cursor: 'pointer',
            backgroundColor: selectedIndex.includes(item) ? 'lightblue' : 'white',
            padding: '8px'
          }}>
          {item}
        </li>
      ))}
    </ul>

    <Button/>
    </>
  );
}
