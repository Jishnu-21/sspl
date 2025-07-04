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

const TeamSection: React.FC<TeamSectionProps> = ({ members, title = "Meet Our Leaders" }) => {
  const renderSocialIcon = (platform: keyof TeamMember['socials'], url: string) => {
    const iconProps = {
      size: 20,
      className: "hover:scale-110 transition-transform duration-200"
    };
    
    switch (platform) {
      case 'linkedin':
        return <FaLinkedin {...iconProps} />;
      case 'twitter':
        return <FaTwitter {...iconProps} />;
      case 'instagram':
        return <FaInstagram {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black text-center mb-6 sm:mb-8 md:mb-10 lg:mb-14 text-comfortaa">
          {title}
        </h2>

        {/* Mobile Layout: Single Column */}
        <div className="block sm:hidden">
          <div className="flex flex-col items-center gap-4">
            {members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative h-[350px] w-[280px] overflow-hidden transition-all duration-500 hover:h-[390px] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(8,_112,_184,_0.25)] bg-gray-100 rounded-lg"
              >
                <div className="relative h-full w-full">
                  <div className="absolute inset-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover w-full h-full rounded-lg"
                      sizes="280px"
                      priority={index < 2}
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center text-white transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                      <p className="font-semibold text-lg text-center mb-1">{member.name}</p>
                      
                  
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Small Tablet Layout: 2 Columns */}
        <div className="hidden sm:block md:hidden">
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            {members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative h-[380px] w-[300px] overflow-hidden transition-all duration-500 hover:h-[420px] hover:-translate-y-3 hover:shadow-[0_18px_45px_rgba(8,_112,_184,_0.25)] bg-gray-100 rounded-lg"
              >
                <div className="relative h-full w-full">
                  <div className="absolute inset-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover w-full h-full rounded-lg"
                      sizes="300px"
                      priority={index < 2}
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center text-white transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                      <p className="font-semibold text-lg text-center mb-1">{member.name}</p>
                      
                 
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* iPad & iPad Pro Layout: Custom 3-2 arrangement */}
        <div className="hidden md:block xl:hidden">
          <div className="flex flex-col items-center gap-6">
            {/* First Row: 3 images */}
            <div className="flex justify-center gap-4 lg:gap-6">
              {members.slice(0, 3).map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group relative h-[420px] lg:h-[450px] w-[240px] lg:w-[280px] overflow-hidden transition-all duration-500 hover:h-[460px] lg:hover:h-[490px] hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] bg-gray-100 rounded-lg hover:z-10"
                >
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover w-full h-full rounded-lg"
                        sizes="(max-width: 1024px) 240px, 280px"
                        priority={index < 3}
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/75 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center text-white transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                        <p className="font-semibold text-lg text-center mb-1">{member.name}</p>
                        
                   
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second Row: 2 images centered */}
            {members.length > 3 && (
              <div className="flex justify-center gap-4 lg:gap-6">
                {members.slice(3, 5).map((member, index) => (
                  <motion.div
                    key={index + 3}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="group relative h-[420px] lg:h-[450px] w-[240px] lg:w-[280px] overflow-hidden transition-all duration-500 hover:h-[460px] lg:hover:h-[490px] hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] bg-gray-100 rounded-lg hover:z-10"
                  >
                    <div className="relative h-full w-full">
                      <div className="absolute inset-0">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover w-full h-full rounded-lg"
                          sizes="(max-width: 1024px) 240px, 280px"
                          priority={false}
                        />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/75 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center text-white transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                          <p className="font-semibold text-lg text-center mb-1">{member.name}</p>
                          
                     
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop & Large Desktop Layout: 5 columns */}
        <div className="hidden xl:block">
          <div className="grid grid-cols-5 gap-4 xl:gap-6 justify-items-center">
            {members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative h-[420px] xl:h-[480px] w-full max-w-[280px] overflow-hidden transition-all duration-500 hover:h-[460px] xl:hover:h-[520px] hover:-translate-y-5 hover:z-10 hover:shadow-[0_25px_60px_rgba(8,_112,_184,_0.3)] bg-gray-100 rounded-lg"
              >
                <div className="relative h-full w-full">
                  <div className="absolute inset-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover w-full h-full rounded-lg"
                      sizes="(max-width: 1280px) 20vw, 280px"
                      priority={index < 5}
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/25 to-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center text-white transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                      <p className="font-semibold text-lg xl:text-xl text-center mb-2">{member.name}</p>
                      
                  
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;