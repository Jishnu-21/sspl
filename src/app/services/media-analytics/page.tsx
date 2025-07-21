"use client";

import Footer from '@/app/Footer'
import Header from '@/app/Header'
import React, { useEffect } from 'react'
import PageBanner from '@/app/components/PageBanner'
import Image from 'next/image'
import { FaChartLine, FaThumbsUp, FaUsers, FaChartBar, FaChartArea, FaChartPie, FaShieldAlt, FaCogs, FaGlobe, FaClock } from 'react-icons/fa'
import PartnersScroll, { PartnerItem } from '@/app/components/PartnersScroll'
import AOS from 'aos'
import 'aos/dist/aos.css'
import DownloadBrochureButton from '@/app/components/DownloadBrochureButton';

const media = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Add carousel styles to document head
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      @keyframes feature-carousel {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .carousel-container {
        animation: feature-carousel 30s linear infinite;
      }

      .carousel-container:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(styleElement);

    // Cleanup function
    return () => {
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  const featureCards = [
    {
      icon: FaChartLine,
      title: "Media Analytics",
      description: "Media analytics dashboards are used to monitor audience engagement with content and to understand viewing patterns of the customer. The insights can be leveraged to build customer loyalty programs. The solution also provides recommendations for targeted ads insertion to optimize effectiveness of ads."
    },
    {
      icon: FaThumbsUp,
      title: "Recommendations",
      description: "It provides out-of-the-box recommendation for VOD and linear TV based on the customer preferences, their viewing history and compares it to the same parameters with similar users in a different domain."
    },
    {
      icon: FaUsers,
      title: "Audience Engagement",
      description: "Audience engagement dashboards to understand the audience better. It enables service providers to collect and correlate second-by-second subscriber activity across television, video-on-demand, mobile and broadband services taking into consideration the demographic and psychographic information."
    },
    {
      icon: FaChartBar,
      title: "Visualization",
      description: "The accelerator generates visually rich interactive dashboards, reports and charts using the analytical and visualization platform. These reports provide high level view on customer trends including traffic, behavior and sentiment from both Web and social media platforms."
    }
  ];

  type FeatureCardProps = {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    delay?: number;
  };

  const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => (
    <div className="bg-[#1B3D69] p-6 rounded-md min-w-[300px] md:min-w-[350px] group transition-all duration-300 shadow-md flex flex-col items-center hover:scale-105 hover:shadow-lg hover:bg-[#366A00] cursor-pointer" data-aos="zoom-in" data-aos-delay={delay}>
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
          <Icon className="text-[#1B3D69] group-hover:text-[#366A00] text-2xl transition-colors duration-300" />
        </div>
      </div>
      <h3 className="text-center text-lg font-medium text-white mb-3 group-hover:text-white transition-colors duration-300">{title}</h3>
      <p className="text-sm text-white text-center group-hover:text-white transition-colors duration-300">
        {description}
      </p>
    </div>
  );

  return (
    <>
      <main className="flex flex-col bg-white min-h-screen">
        <Header/>
        <PageBanner
          backgroundImage="/images/services/banners/media-analytics.png"
          title="Media Analytics"
          bannerKey='media-analytics'
        />

        <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto" data-aos="fade-up">
          <div className="mb-2">
            <div className="max-w-6xl mx-auto text-center mb-2">
              <p className="text-gray-700 leading-relaxed">
              An unprecedented amount of data is being generated from enormous video traffic that presents an array of opportunities and challenges for the Channel. Media Analytics proposes a solution to manage and take appropriate business decisions, at almost real-time basis. SSPL- with its given track record of over 20 years in the Industry of Data Analytics provides extremely fast, tested and trusted solution to various businesses that detail out Business Intelligent Reports and Trends based on the user defined parameters. The solution and services not only enables Channels to understand their viewers better, but also helps them optimize the airtime with best possible telecast.
              </p>
            </div>
            </div>
            <DownloadBrochureButton pdfPath="/pdfs/assureBI_Media_Analytics.pdf" />
        </section>
        <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-6"></div>

                {/* Handling Large Data Sets Section */}
                <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto" data-aos="fade-up">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold text-[#366A00] mb-6">Media Analytics Enabling Software Solution</h2>
                  </div>

                  <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-stretch gap-8">
                      {/* Image */}
                      <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0" data-aos="fade-right">
                        <div className="relative aspect-[5/3] w-full">
                          <Image 
                            src="/images/services/media1.jpg" 
                            alt="Data Analytics Charts" 
                            fill
                            className="rounded-md object-cover"
                          />
                        </div>
                      </div>
                      {/* Text content */}
                      <div className="w-full md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
                        <p className="text-gray-700 leading-relaxed mb-6">
                        SSPL's Media Analytics enabling software solution can be leveraged to build offerings to understand the user behavior. Our solution generates audience engagement measurements and is capable of supporting structured as well as non-structured data from all possible sources in the Industry. The framework enables a user to run descriptive, predictive and prescriptive analytics over the collected data. It helps in generating reports, charts and dashboards that provide insights into customer behavior. The solution also implements a recommendation engine to suggest movies and programs based on user's viewing history and preferences. It also provides a forecasting engine to estimate revenue generated through customer activity.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Features Section - Full Width with Carousel */}
        <section className="py-4 bg-gray-50 overflow-hidden relative" data-aos="fade-up">
          <div className="mx-auto">
                    <div className="text-center mb-10">
                      <h2 className="text-2xl font-semibold text-[#366A00] mb-6">Features</h2>
                      <p className="text-gray-700 max-w-4xl mx-auto mb-10">
                        The key features of our Media Analytics that allow you to get insights into customer behavior are:
                      </p>
                    </div>
                    {/* Features Carousel */}
                    <div className="overflow-hidden">
              <div className="flex gap-8 carousel-container" style={{ width: 'fit-content' }}>
                {/* First set of cards */}
                {featureCards.map((card, index) => (
                  <FeatureCard
                    key={`first-${index}`}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                    delay={index * 100}
                  />
                ))}
                {/* Duplicate set for seamless loop */}
                {featureCards.map((card, index) => (
                  <FeatureCard
                    key={`second-${index}`}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                    delay={0}
                  />
                ))}
                      </div>
                    </div>
                  </div>
                </section>

        {/* Business Benefits */}
        <PartnersScroll
          title="Business Benefits"
          backgroundColor="#ffffff"
          items={[
            {
              caption: "Gain Actionable Insights",
              useIcon: true,
              icon: FaChartArea
            },
            {
              caption: "Gain Competitive Advantage",
              useIcon: true,
              icon: FaChartPie
            },
            {
              caption: "Mitigate Risks Effectively",
              useIcon: true,
              icon: FaShieldAlt
            },
            {
              caption: "Extensive Product Engineering Experience",
              useIcon: true,
              icon: FaCogs
            },
            {
              caption: "Domain-Specific Solutions",
              useIcon: true,
              icon: FaGlobe
            },
            {
              caption: "Quicker Time-to-Market",
              useIcon: true,
              icon: FaClock
            }
          ]}
        />
        
        <Footer/>
      </main>
    </>
  )
}

export default media