"use client";
import React, { useState, useEffect } from "react";

export default function SpeakerImage({ src, alt, className = "", ...props }: { src: string; alt: string; className?: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  useEffect(() => {
    setImgSrc(src);
  }, [src]);
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