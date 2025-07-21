'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const STOCK_IMAGE = "/images/about/about.png";
const BANNER_KEY = "about";

const AboutBanner = () => {
  const [dynamicImage, setDynamicImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/banners/${BANNER_KEY}`)
      .then(async (res) => {
        if (!res.ok) throw new Error('No banner found');
        const data = await res.json();
        if (data && data.mediaUrl) {
          setDynamicImage(data.mediaUrl);
        } else {
          setDynamicImage(null);
        }
      })
      .catch(() => setDynamicImage(null))
      .finally(() => setLoading(false));
  }, []);

  const bgImage = dynamicImage || STOCK_IMAGE;

  if (loading) {
    return (
      <section className="relative pt-20 md:pt-0 mt-[110px] min-h-[40vh] md:min-h-[calc(100vh-110px)] flex items-center justify-center overflow-hidden bg-white">
      </section>
    );
  }

  return (
    <section
      className="relative pt-20 md:pt-0 mt-[110px] min-h-[40vh] md:min-h-[calc(100vh-110px)] flex items-center overflow-hidden bg-center bg-cover bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/50 bg-black"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[16px] md:text-[20px] xl:text-[26px] font-medium text-white leading-[1.4] mb-8">
          SSPL is a Software and IT Consulting organization that has been rendering services via its expert team of professionals towards the field of Big Data Analytics, Data Visualization, Robotics Process Analytics, Business Intelligence, Digital Transformation, Data Migration and Predictive Analytics
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBanner;