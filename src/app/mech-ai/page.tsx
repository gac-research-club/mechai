'use client'

import Image from "next/image"

export default function Page(){
  return (
    <div className="h-screen flex items-center justify-center bg-slate-800">
      <div>
        <Image className="" src="/logo-white.png" alt="Mech-AI" width={512} height={512} />
        <h1 className="text-white text-7xl pt-7"><b>COMING SOON</b></h1>
      </div>
    </div>
  )
}