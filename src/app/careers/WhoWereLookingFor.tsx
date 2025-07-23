"use client";

import React from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChartBar, FaDatabase, FaUserShield, FaCode, FaHeadset, FaBullhorn } from "react-icons/fa";

const roles = [
  {
    title: "Data Analysts & Scientists",
    icon: <FaDatabase className="text-white text-4xl" />,
  },
  {
    title: "Business Intelligence Developers",
    icon: <FaChartBar className="text-white text-4xl" />,
  },
  {
    title: "Audit & Risk Analytics Professionals",
    icon: <FaUserShield className="text-white text-4xl" />,
  },
  {
    title: "Software Developers with a passion for analytics",
    icon: <FaCode className="text-white text-4xl" />,
  },
  {
    title: "Client Support & Solution Implementation Specialists",
    icon: <FaHeadset className="text-white text-4xl" />,
  },
  {
    title: "Sales & Marketing Professionals",
    icon: <FaBullhorn className="text-white text-4xl" />,
  },
];

const WhoWereLookingFor = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#366A00] mb-2">Who We’re Looking For?</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              className="rounded-xl bg-[#1b3d69] hover:bg-[#366A00] transition-colors duration-300 border border-[#e5e7eb] shadow-sm hover:shadow-lg p-7 flex flex-col items-center text-center group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={i * 120}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(54,106,0,0.15)" }}
            >
              <div className="mb-4">{role.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">{role.title}</h3>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-gray-700 text-base text-left ">If you have a curious mind, a strong analytical approach, and a desire to make a difference through technology, SSPL is the place for you.</p>
      </div>
    </section>
  );
};

export default WhoWereLookingFor; 