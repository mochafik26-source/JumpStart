"use client";
import { useEffect, useState } from "react";
import Fetching from "./Components/types/backts";
import Technologies from "./Components/Technologies";
import {TechList} from "./Data/TechList";
import Navbar from "./Components/NavBar";
import { Analytics } from "@vercel/analytics/next"
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
    <div className="logo text-2xl font-bold tracking-[-1px] flex justify-center">
    <span className="text-[#F3F4F6]">Jump</span>
    <span className="text-[#6366F1]">Start</span>
    </div>
	<ul className="flex justify-center items-center gap-4 m-8 flex-wrap h-fit">
      	{TechList.map((item) => (
       <Technologies lang={item.name} icon={item.icon} key={item.name} onClick={() => select(item.name)} />
        ))}
    </ul>

 
    <div className="flex justify-center">
    <button 
    className="bg-[#6366F1] color-[#FFFFFF] hover:bg-[#818CF8] rounded-lg font-semibold h-[47px] cursor-pointer text-base py-[12px] px-[24px] duration-200 hover:translate-y-[-1px] text-white"
    onClick={() => {
      setShow(true);
      setSelectedTech(selectedindex);
         }}>
    Get Guide 
    </button>

    </div>
    {show && ( <Fetching techs={selectedTech}  /> )}
    

        <Analytics/>
        </>
  );
}
