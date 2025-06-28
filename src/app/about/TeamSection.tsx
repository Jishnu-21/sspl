'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

interface TeamMember {
  name: string;
  designation: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

interface TeamSectionProps {
  members: TeamMember[];
  title?: string;
}

const TeamSection = ({ members, title = "Meet Our Leaders" }: TeamSectionProps) => {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black text-center mb-8 sm:mb-10 md:mb-14 text-comfortaa">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-5 md:gap-2 lg:gap-6 justify-items-center">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative h-[400px] sm:h-[450px] md:h-[40px] lg:h-[420px] xl:h-[520px] overflow-hidden transition-all duration-500 
                hover:h-[440px] sm:hover:h-[490px] md:hover:h-[520px] lg:hover:h-[460px] xl:hover:h-[560px] 
                hover:-translate-y-5 hover:z-10 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] bg-gray-100 rounded-lg
                w-full max-w-[300px] md:max-w-none"
            >
              <div className="relative h-full w-full">
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover w-full h-full rounded-lg"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                    priority
                  />
                </div>

                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80
                  opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-20 flex flex-col items-center text-white
                    transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <p className="font-medium text-base sm:text-lg text-center">{member.name}</p>
                    {/* Social Icons */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
