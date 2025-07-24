"use client";

import React, { useEffect ,useState} from "react";
import Header from "../Header";
import ShortPageBanner from "../components/ShortPageBanner";
import Footer from "../Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';



// Sample video IDs for training rankings
const trainingVideos = [
  { id: 1, youtubeId: "VGFveugva24", title: "Participant Feedback 1" },
  { id: 2, image: "/images/training/train-news.jpg", title: "" },
  { id: 3, youtubeId: "3xsmAWG_Evg", title: "Participant Feedback 3" }
];

// Add benefit images array
const benefitImages = [
  "/images/training/training1.jpg",
  "/images/training/training2.jpg",
  "/images/training/training3.jpg",
  "/images/training/training4.jpg",
];



const Training = () => {

  const extractYoutubeId = (url: string) => {
    if (!url) return '';
    
    // Handle different YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11) ? match[2] : '';
  };

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  // Carousel state for benefit images
  const [currentBenefitIdx, setCurrentBenefitIdx] = useState(0);


  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const interval = setInterval(() => {
      setCurrentBenefitIdx((prev) => (prev + 1) % benefitImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className="flex flex-col bg-white min-h-screen">
      <Header />
      <ShortPageBanner
        backgroundImage="/images/training/banner.png"
        title="Training on Big Data Analytics"
        subtitle="How to use the best out of Big Data Analytics Tools and Technology, to achieve More in Less Time, with Robotic Analytics."
        bannerKey="training"
      />

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-4 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto text-center">
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

      <div className="h-[1px] w-full border-t border-gray-300 mb-6" data-aos="fade-in"></div>

      {/* Benefits Section with full-width background */}
      <div className="w-full py-4" data-aos="fade-up">
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
            <div className="w-full md:w-2/3 mt-6 md:mt-0 relative">
              <div className="rounded-md overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full relative">
                {benefitImages.map((img, idx) => (
                  <Image
                    key={img}
                    src={img}
                    alt={`Big Data Analytics Training Illustration ${idx + 1}`}
                    width={500}
                    height={500}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`object-cover absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${currentBenefitIdx === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    style={{ transition: 'opacity 0.7s' }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Heading */}
      <div className="w-full bg-[#1b3d69] border-t border-gray-300 mt-6 md:mt-8" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-8 pb-2">
          <h2 className="text-3xl font-bold text-[#366A00] mb-6 text-center">Testimonials</h2>
        </div>
        {/* Testimonials as horizontal cards, full width */}
        <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-6">
          {/* Aviva Testimonial Card (replaces Toyota) */}
          <div className="bg-[#22406a] rounded-lg shadow-lg flex flex-col items-center md:items-start p-6 w-full md:w-1/2">
            <div className="flex items-center justify-center mb-4 w-full">
              <Image
                src="/images/testimonials/aviva.gif"
                alt="Aviva Logo"
                width={100}
                height={50}
                className="object-contain w-24 sm:w-28 md:w-32"
                data-aos="fade-up"
              />
            </div>
            <p className="text-xs text-white sm:text-sm text-gray-100 leading-relaxed mb-4">
              Aviva Life Insurance Company India Limited has been dealing with SSPL for quite some time. SSPL has provided us licenses, conducted training programme and provided support relating to assureBI software. The services of SSPL have been found to be excellent and the quality of services in delivering support and training is experienced to be as per our requirement and standards. All the people with whom we have been interacting have handled the matters in very professional manner and to our satisfaction. We are pleased to state that Aviva Life Insurance Company India Limited continues its relationship with SSPL in future also.
            </p>
            <div className="mt-auto w-full text-right text-sm font-semibold text-[#b6e27b]">- Mr. Rajeev Arora, Director, Aviva Life Insurance Company India Limited</div>
          </div>
          {/* HSBC Testimonial Card */}
          <div className="bg-[#22406a] rounded-lg shadow-lg flex flex-col items-center md:items-start p-6 w-full md:w-1/2">
            <div className="flex items-center justify-center mb-4 w-full">
              <Image
                src="/images/testimonials/hsbc.gif"
                alt="HSBC Logo"
                width={100}
                height={50}
                className="object-contain w-24 sm:w-28 md:w-32"
                data-aos="fade-up"
              />
            </div>
            <p className="text-xs text-white sm:text-sm text-gray-100 leading-relaxed mb-4">
              "We have utilised the services of SSPL in assureBI training and project implementation. We have taken the assureBI training courses from SSPL and found the same to be very interactive, informative and useful. The Trainers have in depth knowledge not just about assureBI but also have extremely good domain knowledge which makes SSPL unique in assureBI Training. One of the HSBC units made use of SSPL support services and found the same to be very proactive and user-friendly. Another unit within HSBC had availed SSPL’s support, when they decided to use assureBI software for converting the system generated exception reports (notepad reports) into Excel. With the installation of the software, they have been able to save lot of time and manual intervention involved in the accurate conversion of these reports in an Excel format. Feedback from this unit is that SSPL team has been a great support in this project. Overall, it has always been a pleasure interacting and working with SSPL."
            </p>
            <div className="mt-auto w-full text-right text-sm font-semibold text-[#b6e27b]">- Ms. Devyani Ghosh, Asia Pacific Risk VP, ORC</div>
          </div>
        </div>
        {/* Read More Button */}
        <div className="flex justify-center pb-8">
          <a href="/testimonials" className="inline-block bg-[#366A00] hover:bg-[#285200] text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-colors duration-200">
            Read More
          </a>
        </div>
      </div>

 


      <section className="py-6 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#366A00] mb-10 text-center">How Participants Rank Our Trainings
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            {trainingVideos.map((item) => {
              if (item.image) {
                // Render image card
                return (
                  <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-2xl mx-auto flex flex-col items-center justify-center aspect-video min-h-[260px]">
                    <Image 
                      src={item.image}
                      alt={item.title}
                      width={480}
                      height={270}
                      className="object-cover w-full h-full"
                    />
                    <div className="p-4 w-full text-center">
                      <span className="text-base font-medium text-gray-700">{item.title}</span>
                    </div>
                  </div>
                );
              } else {
                // Render video card
                const videoId = item.youtubeId;
                return (
                  <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-2xl mx-auto">
                    <div className="relative aspect-video cursor-pointer group min-h-[260px]" onClick={() => {
                      if (videoId) setSelectedVideo(videoId);
                    }}>
                      <Image 
                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={(e) => {
                          // Fallback to medium quality thumbnail if high quality is not available
                          const target = e.target as HTMLImageElement;
                          target.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
                        }}
                      />
                      {/* YouTube play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
                        <div className="w-20 h-16 bg-red-600 rounded-lg flex items-center justify-center">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 7.5V16.5L16.5 12L9.5 7.5Z" fill="white"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </section>
        
        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed  inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
            <div className="relative w-full max-w-4xl aspect-video">
              <button 
                className="absolute -top-10 cursor-pointer right-0 text-white text-xl font-bold p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedVideo(null);
                }}
              >
                Close ×
              </button>
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}


      <Footer />
    </main>
  );
};

export default Training;