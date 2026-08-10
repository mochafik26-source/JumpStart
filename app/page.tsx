"use client";
import { useEffect, useState } from "react";
import Fetching from "./Components/types/backts";
import Technologies from "./Components/Technologies";
import {TechList} from "./Data/TechList.ts";
export default function home() {
    const [selectedindex, setselectedindex] = useState<string[]>([]);
    const [selectedTech, setSelectedTech] = useState<string[]>([]);
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
	<ul className="flex justify-center items-center gap-4 m-8 flex-wrap h-fit">
      	{TechList.map((item) => (
       <Technologies lang={item.name} icon={item.icon} key={item.name} onClick={() => select(item.name)} />
        ))}
    </ul>

 

    <button onClick={() => {
      setShow(true);
      setSelectedTech(selectedindex);
         }}>
    Click
    </button>

    {show && ( <Fetching techs={selectedTech}  /> )}

        </>
  );
}
