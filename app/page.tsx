"use client";
import { useeffect, usestate } from "react";
import button from "./components/selecting";
import Fetching from "./components/types/backts";
export default function home() {
  const languages = ["git", "next", "react", "node", "tailwind"];
 const [selectedindex, setselectedindex] = usestate<string[]>(["tailwind","next"]);


 function select(position: string) {
  setselectedindex(prev =>
    prev.includes(position)
      ? prev.filter(i => i !== position)
      : [...prev, position]
  );


}

useeffect(() => {
 console.log(selectedindex);
},[selectedindex])

  return (
    <>
	<ul>
      	{languages.map((item,index) => (
         <li
          key={index}
          onclick={() => select(item)}
          style={{
            cursor: 'pointer',
            backgroundcolor: selectedindex.includes(item) ? 'lightblue' : 'white',
            padding: '8px'
          }}>
          {item}
        </li>
      ))}
    </ul>

 

      <Fetching techs={["tailwind","next"]} />
    </>
  );
}
