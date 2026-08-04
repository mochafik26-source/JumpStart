"use client";
import { useEffect, useState } from "react";
import Fetching from "./Components/types/backts";
import Technologies from "./Components/Technologies";
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
	<ul className="flex justify-center items-center gap-4 m-8">
      	{languages.map((item,index) => (
       <Technologies lang={item} key={item} onClick={() => select(item)} />
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
