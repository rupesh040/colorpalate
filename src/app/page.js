"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [color,setColor] = useState("#201f1f");

    const refresh =  async () => {
        const randomHex = Math.floor(Math.random()*0xffffff).toString(16);
          const  data = await `#${randomHex.padStart(6,0)}`
        setColor([data]);
        console.log(color)
    }
  return (
   <>
   <div className="flex justify-center gap-5 items-center p-10 w-[100vw] h-[100vh]">
   <div className=" card w-[300px] h-[250px] rounded-2xl bg-white overflow-hidden z-20 flex flex-col gap-3">
     <div className=" w-[95%] h-[70%] overflow-hidden m-auto rounded-xl mt-2 color flex justify-center items-center" style={{backgroundColor:color}}> <h1 className="text-white font-bold text-2xl ">Color Palette</h1></div>
     <p className="text-center">{color}</p>
     <button onClick={refresh} className=" p-2">Refresh</button>
    </div>
   </div>


    <h1 className="text-[15vw] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%]
  translate-y-[-50%] z-[1] opacity-40 text">Rupesh.</h1>
   </>
  );
}
