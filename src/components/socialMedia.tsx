"use client"

import { Media } from "@/interfaces/media"
import Icon from "./icon"

import { useEffect } from "react";

export default function SocialMedia() {

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    console.log(scrollPosition);
  };

  const socialMedia: Media[] = [
    {
      name: "Instagram",
      icon: "",
      src: "https://instagram.com",
    },
    {
      name: "Twitter",
      icon: "",
      src: "https://twitter.com",
    },
    {
      name: "Youtube",
      icon: "",
      src: "https://twitter.com",
    },
  ]

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 justify-center items-center absolute top-0">
      { socialMedia.map((e, i) => (
        <Icon e={e} key={i}/>
      )) }
    </div>
  )
}