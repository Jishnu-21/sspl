"use client";
import React, { useState } from "react";

export default function SpeakerImage({ src, alt, className = "", ...props }: { src: string; alt: string; className?: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc("/images/placeholder.jpg")}
      {...props}
    />
  );
} 