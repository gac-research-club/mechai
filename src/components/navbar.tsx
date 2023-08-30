"use client"

import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/mech-ai" className="btn btn-ghost normal-case text-xl"><Image src='/android-chrome-192x192.png' alt='Mech-AI' width={32} height={32}/>Mech-AI</Link>
      </div>
    </div>
  )
}