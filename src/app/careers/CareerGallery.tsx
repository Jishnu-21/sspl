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
    <section className="py-4 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center min-h-[600px]">
          {/* Left Content */}
          <motion.div 
            className="max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">We've been here for more than 35 years</h2>
            <p className="text-gray-600 text-justify mb-8">
            At SSPL, we believe that people are the driving force behind every great innovation. For over 35 years, we've nurtured a collaborative and forward-thinking environment where talented professionals come together to solve some of the most complex data challenges faced by modern businesses.
            </p>
            <p className="text-gray-600 text-justify mb-8">
            As a pioneer in data analytics and automation, our team has been delivering cutting-edge solutions for nearly four decades. From streamlining audits to building custom analytics platforms, we empower organizations across industries to turn their data into real, actionable insights.
            </p>
          </motion.div>

          {/* Right: Testimonials Section */}
          <div className="flex flex-col items-center w-full h-full justify-center">
            <h3 className="text-[#366A00] uppercase font-medium mb-3 text-center text-lg tracking-widest relative">
              Testimonials
            </h3>
            <motion.div
              className="flex flex-col items-center gap-6 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.id}
                  className="bg-[#1b3d69] hover:bg-[#366A00] transition-colors duration-300 rounded-xl shadow-md p-5 flex flex-col items-center text-center border border-[#e5e7eb] w-full max-w-xl cursor-pointer transform transition-transform duration-300 hover:scale-105"
                  variants={fadeInUp}
                  data-aos="fade-up"
                  data-aos-delay={i * 120}
                >
                  <div className="w-16 h-16 mb-3 rounded-full overflow-hidden border-2 border-[#13bd69]">
                    <Image src={t.avatar} alt={t.name} width={64} height={64} className="object-cover w-full h-full" />
                  </div>
                  <p className="text-white text-sm mb-2 line-clamp-4">{t.text}</p>
                  <span className="font-semibold text-white mt-2">{t.name}</span>
                </motion.div>
              ))}
            </motion.div>
            <div className="w-full flex justify-center mt-6">
              <button
                className="px-6 py-2 rounded-md bg-white hover:bg-[#366A00] text-[#366A00] border border-[#366A00] hover:text-white cursor-pointer font-semibold shadow transition-colors duration-300"
                onClick={() => router.push('/testimonials')}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerGallery;