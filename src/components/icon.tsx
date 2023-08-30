"use client"

import { Media } from "@/interfaces/media"

export default function Icon({e}: {e: Media}) {
  return (
    <button className="rounded-lg bg-yellow-200 p-2" style={{display: "block"}}>{e.name}</button>
  )
}