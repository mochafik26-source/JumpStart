"use client";
import { useEffect, useState } from "react";
import Fetching from "./Components/types/backts";
export default function home() {
  const languages = ["git", "next", "react", "node", "tailwind"];
 const [selectedindex, setselectedindex] = useState<string[]>([]);
  const [show, setShow] = useState(false);

 function select(position: string) {
  setselectedindex(prev =>
    prev.includes(position)
      ? prev.filter(i => i !== position)
      : [...prev, position]
  );


}

useEffect(() => {
 console.log(selectedindex);
},[selectedindex])

  return (
    <>
	<ul>
      	{languages.map((item,index) => (
         <li
          key={index}
          onClick={() => select(item)}
          style={{
            cursor: 'pointer',
            backgroundcolor: selectedindex.includes(item) ? 'lightblue' : 'white',
            padding: '8px'
          }}>
          {item}
        </li>
      ))}
    </ul>

 

    <button onClick={() => setShow(true)}>
    Click
    </button>

    {show && <Fetching techs={selectedindex} />
}
        </>
  );
}
