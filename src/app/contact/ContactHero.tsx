'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ShortPageBanner from '../components/ShortPageBanner';


const ContactHero = () => {
  return (
    <ShortPageBanner
    backgroundImage="/images/contact/banner.jpg"
    title="Contact us"
    subtitle="Get in touch with us"
    bannerKey='contact'
    />
  );
};

export default ContactHero;
