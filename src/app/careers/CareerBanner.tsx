'use client';

import React from 'react';
import PageBanner from '../components/PageBanner';

const CareerBanner = () => {
  return (
    <PageBanner
      backgroundImage="/images/about/banner.png"
      title="Career"
      subtitle="Get in touch with us"
      buttonText="View Open Positions"
      buttonLink="/careers#open-positions"
    />
  );
};

export default CareerBanner;
