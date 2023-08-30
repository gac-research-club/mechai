"use client"

import {useRef} from 'react';

export default function Video(){

  const windowWidth = useRef(window.innerWidth);

  const width = windowWidth.current * 0.8;
  const height = width * 0.5625;

  return (
    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <iframe
        src="https://www.youtube.com/embed/QlBX8i6HCTQ?si=p_SfcJJ0jr-fDxYe"
        width={width}
        height={height}
        title="Mech-AI"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
    </div>
  )
}