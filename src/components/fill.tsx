import Background from "./background"

import bg from '../../public/1.jpg'
import bg2 from '../../public/baoyu.jpg'
import bg3 from '../../public/bg.png'

`use client`

export default function Fill() {
  return (
    <div className="">
      <div className="snap-always snap-start h-screen w-screen" style={{position: "relative"}}>
        <Background background={bg}/>
      </div>
      <div className="snap-always snap-start bg-blue-200 h-screen w-screen" style={{position: "relative"}}>
        <Background background={bg2}/>
      </div>
      <div className="snap-always snap-start bg-green-200 h-screen w-screen" style={{position: "relative"}}>
        <Background background={bg3}/>
      </div>
      <div className="snap-always snap-end bg-red-200 h-48 w-screen"></div>
    </div>
  )
}