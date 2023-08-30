"use client"

import Fill from '@/components/fill'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <>
    <Navbar />
    <main className='snap-mandatory snap-y h-screen w-screen overflow-y-scroll no-scrollbar relative'>
      <Fill/>
      {/* <SocialMedia /> */}
    </main>
    </>
  )
}
