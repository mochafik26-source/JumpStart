"use client";
import { useEffect, useState } from "react";
import Button from "./Components/Selecting";
import Fetching from "./Components/types/backts";
export default function Home() {
  const Languages = ["git", "next", "react", "node", "taiwlind"];
 const [selectedIndex, setSelectedIndex] = useState<string[]>([]);

function getGuide(){
    console.log(Fetching(selectedIndex));
}

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

    <Button onClick={getGuide}>
        Click Me
      </Button>
    </>
  );
}
