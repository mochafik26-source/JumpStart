import Image from "next/image";
import "./globals.css";
import Button from './Components/Button.tsx';
import Input from "./Components/Input.tsx";
import {Choices} from "./types/choices.ts";
export default function Home() {
  return (
   <>
      <div className='w-full h-full'>
        <Input/>
      </div>
       
    </>
  );
}
