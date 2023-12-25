import React, { useRef, useState } from "react";
import Cards from "./cards";


function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc: "This Is Nachiket Patel'S workspace",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true , tagTitle: "Submit" , tagColor : "blue"},
    },

    {
      desc: "This Is Nachiket Patel'S workspace",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true , tagTitle: "Downlaod Now" , tagColor : "green"},
    },

    {
      desc: "This Is Nachiket Patel'S workspace",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true , tagTitle: "Downlaod Now" , tagColor : "blue"},
    },

    {
      desc: "This Is Nachiket Patel'S workspace",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true , tagTitle: "Downlaod Now" , tagColor : "green"},
    },
  ];
  return (
    <>
      <div ref={ref} className="fixed top-[0] left-[0] z-[3] w-full h-full flex gap-10 flex-wrap p-3">
        {data.map((item,index)=>(
          <Cards data={item} reference={ref}/>
        ))}
      </div>
    </>
  );
}

export default Foreground;
