'use client'

import Image from "next/image"
import { useState } from 'react';
import dynamic from 'next/dynamic'

export default function Page(){

  const ComponentVideo = dynamic(() => import("@/components/video"))

  const [show, setShow] = useState(false);

  return (
    <div className="relative" onClick={() => show && setShow(!show) }>
    {show && <ComponentVideo />}
    <div className="h-screen w-screen sm:flex sm:items-center sm:justify-center bg-slate-800 p-10 sm:p-0">
      <div className="flex flex-col items-center">
        <Image className="" src="/logo-white.png" alt="Mech-AI" width={512} height={512} sizes="(max-width: 768px) 100vw" priority quality={79}/>
        <div className="sm:flex sm:items-end pt-7">
          <h1 className="text-white text-5xl sm:text-7xl pe-5"><b>COMING SOON </b></h1>
          <button className="text-white pt-6 sm:pt-0" onClick={() => setShow(!show)}>
            {show || <Image src="/play.png" width={64} height={64} alt="Play" quality={50} className="transition duration-300 ease-in-out hover:scale-110"/>}
          </button>
        </div>
      </div>
    </div>
    </div>
    
  )
}