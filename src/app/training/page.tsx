"use client";

import React from "react";
import Header from "../Header";
import PageBanner from "../components/PageBanner";
import Footer from "../Footer";
import Image from "next/image";
import { motion } from "framer-motion";

// Sample video IDs for training rankings
const trainingVideos = [
  { id: 1, videoId: "Wd5mTDaRe0Y", title: "Participant Feedback 1" },
  { id: 2, videoId: "aoanfoqAXaw", title: "Participant Feedback 2" },
  { id: 3, videoId: "pk1JJbMAG7g", title: "Participant Feedback 3" }
];

const Training = () => {
  return (
    <main className="flex flex-col bg-white min-h-screen">
      <Header />
      <PageBanner
        backgroundImage="/images/about/banner.png"
        title="Training on Big Data Analytics"
        subtitle="How to use the best out of Big Data Analytics Tools and Technology, to achieve More in Less Time, with Robotic Analytics."
      />

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#366A00] mb-3 sm:mb-4 md:mb-6 px-2 sm:px-0 sm:whitespace-nowrap">
            Using Various Tools & Technologies
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed px-1 sm:px-2 md:px-0">
            Big Data Analytics is fast gaining grounds in the professional services
            related to Operations, Internal Audit, Risk Advisory, Fraud Management,
            and MIS Reporting. Industries are now relying more on the reports and
            dashboards generated from Big Data Analytics. Big Data Analytics can be
            performed using various tools and technologies. The idea behind making
            the best utilization of the tools is to learn the analytics techniques
            and approach in a lucid way.
          </p>
        </div>
      </motion.section>

      <div className="h-[1px] w-full border-t border-gray-300 mb-6"></div>

      {/* Benefits Section with full-width background */}
      <div className="w-full bg-[#f8f8f8] py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="w-full md:w-2/3">
              <div className="prose max-w-none">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#366A00] mb-3">
                  Benefits of Big Data Analytics:
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
                  <li>
                    Identify trends, pinpoint exceptions, and highlight potential
                    areas of concern and revenue management.
                  </li>
                  <li>
                    Automation of Processes - the aim is to perform More in Less
                    Time.
                  </li>
                  <li>
                    Upgrade the team with the latest tools and technologies for
                    more efficient working and delivery.
                  </li>
                  <li>Know the Unknown in system weaknesses.</li>
                  <li>
                    Use technology's unique capabilities to perform a wide variety
                    of Intelligent and Analytical operations.
                  </li>
                  <li>
                    Integrate multi-source data to perform efficient Big Data
                    Analytics.
                  </li>
                  <li>
                    Analyze data interactively with Real-Time results and Positive
                    Predictive alerts.
                  </li>
                  <li>
                    Perform more frequent analytics using International Best
                    Practices.
                  </li>
                  <li>
                    Execute in auto-mode & process reports as per the requirement.
                  </li>
                  <li>
                    Perform Transaction Analytics with Business Intelligence.
                  </li>
                  <li>Perform Continuous Control Monitoring (CCM).</li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-1/3 mt-6 md:mt-0">
              <Image
                src="/images/training/training1.jpg"
                alt="Big Data Analytics Training Illustration"
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-md object-cover h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="w-full bg-[#f8f8f8] border-t border-gray-300 mt-6 md:mt-8">
        <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
          {/* Logo/Image Section */}
          <div className="w-full md:w-1/5 flex items-center justify-center md:justify-start mb-4 md:mb-0 md:pr-6">
            <Image
              src="/images/training/toyota.jpg"
              alt="HSBC Logo"
              width={100}
              height={50}
              className="object-contain w-24 sm:w-28 md:w-32"
            />
          </div>

          {/* Testimonial Text */}
          <div className="w-full md:w-4/5">
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              "SSPL Middle East - conducted a hands-on-training program on data analytics for Toyota Motors U.K. and other subsidiaries. It comprised of practical sessions on how to deploy analytics using excel and Power BI. The learners were thrilled to be a part of this course, as it allowed them to grasp a vast array of technical know-how embedded via a simplistic approach. The course received phenomenal positive responses from the learners, who clearly stated their insights on how "Data" was better read and understood, after attending the training sessions. In fact, the participants in the training sessions who did not seem to have any particular use of analytics in their day-2-day job profile, found this course to be immensely helpful and informative as well. The sessions were well-tailored & subsequently addressed the real case studies at the end of each training module. The proficiency that was acquired via the training sessions, promised the participants to adapt and implement the objectives with respect to data analytics. PowerBI sessions successfully equipped the learners with the essential skills to create a dashboard themselves using different themes, maps and data transformations. On the whole, participants thoroughly enjoyed the course and learned many new concepts related to data analytics and data in general. The mean score based on the feedback received by the participants was a high value notched at 4.5 out of 5."
            </p>
          </div>
        </div>
      </div>

      {/* Training Rankings Section */}
      <div className="w-full bg-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#366A00] text-center mb-6 sm:mb-8 md:mb-10">
            How Participants Rank Our Trainings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {trainingVideos.map((video) => (
              <div key={video.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-video cursor-pointer group">
                  <Image 
                    src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7 sm:w-8 sm:h-8">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full border-t border-gray-300"></div>

      <Footer />
    </main>
  );
};

export default Training;