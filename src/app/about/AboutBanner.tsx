'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ShortPageBanner from '../components/ShortPageBanner';
import { FaEye, FaLock, FaLightbulb } from 'react-icons/fa';

const STOCK_IMAGE = "/images/about/about.webp";
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
    <>
      <ShortPageBanner
        backgroundImage={bgImage}
        title=""
      />

      {/* Blue Section with Vision & Values */}
      <section className="w-full bg-[#1B3D69] py-10 sm:py-14 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">Our Vision & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="flex flex-col items-center text-center">
              <span className="w-14 h-14 flex items-center justify-center rounded-full  mb-4 shadow-lg">
                <FaEye size={28} className="text-white" />
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">Vision</h3>
              <p className="text-white/90 text-sm">Formed with a vision to be “the leading data analytics and data intelligence organisation”, we at SSPL are committed to continuous customer service and advance analytics solution Development Company. Helping our clients to steer towards their corporate vision and attain their goals with best possible optimized analytics solutions and services.</p>
            </div>
            {/* Protect & respect confidentiality */}
            <div className="flex flex-col items-center text-center">
              <span className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1B3D69] mb-4 shadow-lg">
                <FaLock size={28} className="text-white" />
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">Protect & respect confidentiality</h3>
              <p className="text-white/90 text-sm">We often work in sensitive environments where the slightest breach of confidentiality - or the appearance of a breach - could have severe consequences and hinder our ability to serve our clients well. We strictly maintain our clients’ confidentiality and do everything we can to encourage others involved in the process including the service providers etc to share our approach.</p>
            </div>
            {/* Lead with insight */}
            <div className="flex flex-col items-center text-center">
              <span className="w-14 h-14 flex items-center justify-center rounded-full mb-4 shadow-lg">
                <FaLightbulb size={28} className="text-white" />
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">Lead with insight</h3>
              <p className="text-white/90 text-sm">Our consultants carry a wealth of expertise that most companies are always looking forward to tap into managing analytics for their various internal functions such as Operations, Risk and Revenue Assurance but struggle to achieve. SSPL is a strategic thought leader in the discipline of Data and Big Data Analytics for efficient Enterprise Management. .</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBanner;