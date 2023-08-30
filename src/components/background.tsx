"use client"

import Image, { StaticImageData } from 'next/image'

interface IProps {
  background: StaticImageData
  priority: boolean
}

export default function Background({background, priority}: IProps) {
  return (
    <Image
      alt='Background'
      src={background}
      placeholder='blur'
      quality={89}
      priority={priority}
      fill
      sizes='100vw'
      style={{
        objectFit: 'cover',
      }}
    />
  )
}