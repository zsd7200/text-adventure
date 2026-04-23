'use client';

import { useState } from "react";
import Modern from "@/components/Modern";
import Legacy from "@/components/Legacy";

export default function Home() {
  const [useModern, setUseModern] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(0);

  const updateIndex = (idx: number) => {
    setIndex(idx);
  };
  
  return (
    <>
      <label className="absolute top-1 right-2 inline-flex items-center cursor-pointer">
        <span className="select-none text-sm font-medium text-heading">legacy</span>
        <input type="checkbox" checked={useModern} onChange={() => setUseModern(!useModern)} className="sr-only peer" autoComplete="off" />
        <div className="
          relative mx-3 w-9 h-5 bg-[#969696] 
          peer-focus:outline-none peer-focus:ring-2 
          peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft 
          rounded-full peer peer-checked:after:translate-x-full 
          peer-checked:after:border-buffer after:content-[''] 
          after:absolute after:top-0.5 after:inset-s-0.5 after:bg-white 
          after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#64b45c]"></div>
        <span className="select-none text-sm font-medium text-heading">modern</span>
      </label>

      {useModern && <Modern idx={index} updateCallback={updateIndex} />}
      {!useModern && <Legacy idx={index} updateCallback={updateIndex} />}
    </>
  );
}
