import React from "react";
import Image from "next/image";

interface HeroProps {
  image?: {
    src: string;
    alt: string;
  };
  title: string;
  text: string;
}

export default function Hero({ image, title, text }: HeroProps) {
  return (
    <div className="text-black relative w-full bg-white grid lg:grid-cols-2 full lg:min-h-[600px] h-auto">
      <div className="flex items-center justify-center flex-col order-2 lg:order-1">
        <h1 className="text-[64px]">{title}</h1>
        <p className="text-[32px]">{text}</p>
      </div>
      <Image
        src={"https://picsum.photos/900/600"}
        alt="photo"
        className="w-full h-full object-cover order-1 lg:order-2"
        width={900}
        height={600}
      />
    </div>
  );
}
