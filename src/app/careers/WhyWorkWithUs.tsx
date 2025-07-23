"use client";

import React from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLightbulb, FaUserGraduate, FaUsers, FaChartLine } from "react-icons/fa";

const features = [
  {
    title: "Innovation-Driven Culture",
    desc: "Explore, experiment, and push boundaries. We foster a workplace where creativity and critical thinking are encouraged every day.",
    icon: <FaLightbulb className="text-white text-4xl" />,
  },
  {
    title: "Learning & Growth",
    desc: "Whether you're just starting out or a seasoned expert, you'll have opportunities to grow your skills through challenging projects, mentorship, and ongoing learning.",
    icon: <FaUserGraduate className="text-white text-4xl" />,
  },
  {
    title: "Collaborative Environment",
    desc: "Work with passionate professionals who value teamwork, integrity, and knowledge sharing.",
    icon: <FaUsers className="text-white text-4xl" />,
  },
  {
    title: "Real-World Impact",
    desc: "Help our clients make smarter decisions, reduce risks, and achieve measurable business outcomes through data.",
    icon: <FaChartLine className="text-white text-4xl" />,
  },
];

const WhyWorkWithUs = () => {
  React.useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#366A00] mb-2">Why Work With Us?</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="rounded-xl bg-[#1b3d69] hover:bg-[#366A00] transition-colors duration-300 border border-[#e5e7eb] shadow-sm hover:shadow-lg p-7 flex flex-col items-center text-center group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={i * 120}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(54,106,0,0.15)" }}
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">{f.title}</h3>
              <p className="text-white text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs; 