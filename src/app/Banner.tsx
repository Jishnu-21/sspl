'use client'

import React, { useEffect, useState, useRef } from 'react';

const DEFAULT_VIDEO = "/videos/home-banner.mp4";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string>(DEFAULT_VIDEO);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if device is mobile or iPad (md and below)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Treat md and below as 'mobile' for video
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Fetch banner video from backend (using key 'home')
    setLoading(true);
    fetch('/api/banners/home')
      .then(async (res) => {
        if (!res.ok) throw new Error('No banner found');
        const data = await res.json();
        if (data && data.mediaUrl) {
          setVideoUrl(data.mediaUrl);
        } else {
          setVideoUrl(DEFAULT_VIDEO);
        }
      })
      .catch(() => setVideoUrl(DEFAULT_VIDEO))
      .finally(() => setLoading(false));
  }, []);

  // Handler for when the video is loaded
  const handleVideoLoaded = () => {
    setLoading(false);
  };

  return (
    <>
      {/* Banner Section with Video Background */}
      <section className={`relative mt-[110px] ${isMobile ? 'min-h-[56.25vw]' : 'min-h-[calc(100vh-110px)]'} flex items-center overflow-hidden`}>
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
            <div className="w-full h-full relative" style={{ aspectRatio: '16/9' }}>
              {/* Loading Overlay */}
              {loading && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white/100 z-20">
                </div>
              )}
              <video 
                ref={videoRef}
                src={videoUrl}
                autoPlay 
                loop 
                muted 
                playsInline
                poster="/images/banner-poster.jpg"
                preload="auto"
                className="absolute top-0 left-0 w-full h-full"
                style={{ objectFit: isMobile ? 'cover' : 'fill' }}
                onLoadedData={handleVideoLoaded}
              />
              {/*
                To optimize your video for web streaming, use this ffmpeg command:
                ffmpeg -i input.mp4 -c:v libx264 -preset fast -crf 23 -movflags +faststart -c:a aac -b:a 128k output.mp4
                For webm:
                ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 2M -c:a libopus output.webm
              */}
            </div>
            {/* Overlay */}
            <div className="absolute inset-0"></div>
        </div>     
      </section>
    </>
  );
};

export default Banner;
