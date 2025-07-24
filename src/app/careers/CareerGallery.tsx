'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation';

const testimonials = [
  {
    id: 1,
    avatar: '/images/testimonials/trainees/joan-jose.jpg',
    text: 'I would like to express my sincere gratitude to Mr. Nishith Seth, Director of SSPL, for giving me the opportunity to take up this internship and become a part of SSPL. I owe much to my mentor, Mr. Siddhant Kumar, Executive Data Scientist at SSPL, whose unwavering guidance, support, and encouragement have been invaluable throughout this internship. Your expertise and insights have enriched my learning experience.Throughout this Data Science Internship, I worked with Microsoft Power BI, a powerful business intelligence tool. From cleaning and transforming data to creating visually compelling reports and dashboards, it helped me to hone my analytical and problem-solving skills. The skills and insights gained during this internship will be invaluable assets for my future endeavors.',
    name: 'Ms. Joan Jose',
    course: ''
  },
  {
    id: 9,
    avatar: '/images/testimonials/trainees/loveytyagi.jpg',
    text: 'I thoroughly enjoyed my sales and marketing internship this summer and now have very valuable experience under my belt. I know this will help when looking for jobs and needing references. We all know that practical experience is the best, and internships give students that hands-on experience they need. I feel that quality internships are essential to develop key skills that you cant get in a classroom. Skills such as multitasking, communicating, learning to deal with diversity, and dealing with deadlines are different when you are working for someone else, not yourself like you do in college. I learned that customer dealing is tough. I have learned that stressing over little things will not get me anywhere. I have learned to work well as a team. I have learned to ask lots of probing questions. Thank you so much Sonal mam.',
    name: 'Ms. Lovey Tyagi',
  },
  {
    id: 10,
    avatar: '/images/testimonials/trainees/siddhant-kumar.jpg',
    text: 'I have worked with SSPL for 6 months as an intern. I was part of the Data Analytics team and worked under the guidance of Mr. Nishith Seth. He helped me in understanding the real world problems so that i can learn how to work in the professional world. SSPL gave me a chance to work on the real time project rather than a dummy one, from which i was able to grasp the concepts of Data Analysis and implemented them in a practical way. Each day brought different challenges and I had the opportunity to make decisions on my own and learn from both my successes and failures. The internship was a worthwhile experience and I feel that it has prepared me well for my professional career.I thank SSPL and Mr. Nishith Seth for this wonderful opportunity that has helped me learn and grow both personally and professionally',
    name: 'Mr. Siddhant Kumar',
  },
];

const CareerGallery = () => {
  React.useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);
  const router = useRouter();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16">
        {/* Main Grid: Left Content + Right Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {/* Left Content */}
          <motion.div 
            className="flex flex-col justify-between h-full bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#366A00] mb-6 leading-tight">We've been here for more than 35 years</h2>
              <p className="text-gray-700 text-justify mb-6 text-base leading-relaxed font-medium">
                At SSPL, we believe that people are the driving force behind every great innovation. For over 35 years, we've nurtured a collaborative and forward-thinking environment where talented professionals come together to solve some of the most complex data challenges faced by modern businesses.
              </p>
              <p className="text-gray-700 text-justify mb-6 text-base leading-relaxed font-medium">
                As a pioneer in data analytics and automation, our team has been delivering cutting-edge solutions for nearly four decades. From streamlining audits to building custom analytics platforms, we empower organizations across industries to turn their data into real, actionable insights.
              </p>
          
            </div>
          </motion.div>

          {/* Right Side: All Three Testimonials */}
          <motion.div
            className="flex flex-col gap-3 h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* First Two Testimonials Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
              {testimonials.slice(0, 2).map((t, i) => (
                <motion.div
                  key={t.id}
                  className="bg-[#1b3d69] hover:bg-[#366A00] transition-colors duration-300 rounded-lg shadow-md p-3 flex flex-col items-center text-center border border-[#e5e7eb] cursor-pointer transform transition-transform duration-300 hover:scale-105 h-full"
                  variants={fadeInUp}
                  data-aos="fade-up"
                  data-aos-delay={i * 120}
                >
                  <div className="w-10 h-10 mb-2 rounded-full overflow-hidden border-2 border-[#13bd69] flex-shrink-0">
                    <Image src={t.avatar} alt={t.name} width={40} height={40} className="object-cover w-full h-full" />
                  </div>
                  <p className="text-white text-xs mb-2 line-clamp-6 flex-1">{t.text}</p>
                  <span className="font-semibold text-white text-xs mt-auto">{t.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Third Testimonial Below */}
            <motion.div
              className="w-full"
              variants={fadeInUp}
              data-aos="fade-up"
              data-aos-delay={240}
            >
              <div className="bg-[#1b3d69] hover:bg-[#366A00] transition-colors duration-300 rounded-lg shadow-md p-3 flex flex-col sm:flex-row items-start sm:items-center text-left border border-[#e5e7eb] cursor-pointer transform transition-transform duration-300 hover:scale-105 w-full">
                <div className="w-10 h-10 mb-2 sm:mb-0 sm:mr-3 rounded-full overflow-hidden border-2 border-[#13bd69] flex-shrink-0">
                  <Image src={testimonials[2].avatar} alt={testimonials[2].name} width={40} height={40} className="object-cover w-full h-full" />
                </div>
                <div className="flex-1 w-full">
                  <p className="text-white text-xs mb-1 leading-relaxed line-clamp-4">{testimonials[2].text}</p>
                  <span className="font-semibold text-white text-xs">{testimonials[2].name}</span>
                </div>
              </div>
            </motion.div>

            {/* Read More Button Below Testimonials */}
            <div className="w-full flex justify-center mt-3">
              <button
                className="px-6 py-2 rounded-md bg-white hover:bg-[#366A00] text-[#366A00] border border-[#366A00] hover:text-white cursor-pointer font-semibold shadow transition-colors duration-300"
                onClick={() => router.push('/testimonials')}
              >
                Read More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerGallery;