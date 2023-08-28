"use client"

import Image, { StaticImageData } from 'next/image'

interface IProps {
  background: StaticImageData
}

export default function Background({background}: IProps) {
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