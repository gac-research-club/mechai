"use client"

import Image from 'next/image'

interface IProps {
  background: string
}

export default function BackgroundString({background}: IProps) {
  return (
    <Image
      alt='Background'
      src={background}
      placeholder='blur'
      quality={100}
      priority
      fill
      sizes='100vw'
      style={{
        objectFit: 'cover',
      }}
    />
  )
}