"use client"

import PageBanner from '@/app/components/PageBanner'
import Footer from '@/app/Footer'
import Header from '@/app/Header'
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import PartnersScroll, { PartnerItem } from '@/app/components/PartnersScroll'
import KeyBenefitsAssureBI from '@/app/components/KeyBenefitsAssureBI'
import { motion } from 'framer-motion'
import { FaMobileAlt, FaBuilding, FaNetworkWired, FaPlus, FaExchangeAlt, FaFileInvoiceDollar, FaHeadset, FaShieldAlt, 
  FaMoneyBillWave, FaServer, FaChartLine, FaUserFriends, FaHandshake, FaCalculator } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import DownloadBrochureButton from '@/app/components/DownloadBrochureButton'
import ServiceInquiryModal from '@/app/components/ServiceInquiryModal'
import ScheduleDemo from '@/app/products/ScheduleDemo'


const revenue = () => {
  // Define telecom industry areas for the PartnersScroll component with icons
  const telecomAreas: PartnerItem[] = [
    {
      icon: FaMobileAlt,
      useIcon: true,
      caption: "Prepaid - Postpaid\nCustomers"
    },
   
    {
      icon: FaNetworkWired,
      useIcon: true,
      caption: "Network Management\nServices"
    },
    {
      icon: FaExchangeAlt,
      useIcon: true,
      caption: "Inter-operator\nSettlement"
    },
    {
      icon: FaPlus,
      useIcon: true,
      caption: "Value Added\nServices"
    },
   
   
    {
      icon: FaHeadset,
      useIcon: true,
      caption: "Customer Support Department"
    },
    {
      icon: FaShieldAlt,
      useIcon: true,
      caption: "Banking Payment Fraud"
    },
    {
      icon: FaBuilding,
      useIcon: true,
      caption: "Site Management"
    },
    {
      icon: FaFileInvoiceDollar,
      useIcon: true,
      caption: "Billing and Collections"
    },
   
   
  ];

  const [modal, setModal] = React.useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
    <main className="flex flex-col bg-white min-h-screen">
    <Header/>
    <PageBanner
          backgroundImage="/images/services/banners/revenue-assurance.png"
          title="Revenue Assurance"
          bannerKey='revenue-assurance'
        />
            <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto" data-aos="fade-up">
              <div className="mb-2">
                <div className="max-w-6xl mx-auto text-center mb-2">
                  <h2 className="text-xl md:text-2xl font-semibold text-[#366A00] mb-4 md:mb-6">Refining Capabilities in Digital and Converge Space</h2>
                  <p className="text-sm md:text-base text-gray-700 justify-center text-justify leading-relaxed mb-4 md:mb-6">
                  Revenue Assurance (RA) was conceived as a risk mitigation solution about 20 years ago in response to the constantly increasing complexity of the telecom value chain and growing revenue leakages.
                  </p>
                </div>
                <DownloadBrochureButton pdfPath="/pdfs/assureBI_Telecom_DataSheet.pdf" />

                </div>
            </section>
            <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-4"></div>
    
            {/* Protect, Monitor & Control All Possible Revenue Leakages*/}
            <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto mb-4" data-aos="fade-up">
            <div className="text-center mb-4 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-[#366A00] mb-4 md:mb-6">Protect, Monitor & Control All Possible Revenue Leakages</h2>
              </div>
              
              <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-8">

              {/* Image */}
              <div className="w-full md:w-1/2" data-aos="fade-right">
                <div className="relative aspect-[4/3]">
                  <Image 
                    src="/images/services/revenue1.jpg" 
                    alt="Data Analytics Charts" 
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
                
                {/* Text content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center h-full" data-aos="fade-left">
                <p className="text-sm md:text-base text-gray-700 text-justify leading-relaxed">
                Today, Revenue Assurance is being looked upon seriously by Banking, Insurance, Manufacturing and Retail Sectors also. The priority of the CFO (Chief Financial Officers) of an organization is to protect, monitor and control all possible revenue leakages, be it through Frauds, Manipulations or Adjustments. With the declining margins and new opportunities on the horizon, corporates success cannot rely solely on state-of-the-art networks, as technology alone cannot bet upon securing benefits for companies. The recent industry shift toward convergence within the telecom, media and technology (TMT) industry and the emergence of other entrants such as Over-The-Top (OTT) players, make revenue assurance more mandatory than ever before for the providers to ensure their strategies and systems are robust. Timely Inter-Operator settlement also poses major concerns for the CFO to maintain the flow of funds within the organisation ensuring smooth operations and growth.
                  </p>
                </div>
                </div>
              </div>
            </section>

            <section className="max-w-6xl mx-auto mb-4 px-4 md:px-8" data-aos="fade-up">
            <p className="text-sm md:text-base text-gray-700 text-justify leading-relaxed">
                  Revenue Assurance is the methodology of increasing an organization's income by identifying areas where revenue gets lost and minimizing these losses by addressing the source of the leaked revenue. There are various business activities that can contribute to revenue leakage within the companies. Various analytics are being used to monitor and control the revenue leakages.
                  </p>
                  </section>

            <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto mb-4" data-aos="fade-up">
              <div className="text-center mb-4 md:mb-8">
                <h2 className="text-xl md:text-2xl font-semibold text-[#366A00] mb-4 md:mb-6">In telecom industry, the following areas are a part of our solutions;</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-full max-w-[95%] mx-auto pt-4">
                {telecomAreas.map((area, idx) => (
                  <div
                    key={area.caption}
                    className="bg-[#1B3D69] p-4 md:p-8 rounded-md shadow-md flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#366A00] group"
                    data-aos="zoom-in"
                    data-aos-delay={idx * 100}
                    onClick={() => setModal(area.caption.replace(/\n.*/, ''))}
                  >
                    <div className="mb-4 md:mb-6">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                        {area.useIcon && area.icon ? (
                          React.createElement(area.icon, { className: 'text-[#1B3D69] text-2xl md:text-3xl transition-colors duration-300 group-hover:text-[#366A00]' })
                        ) : null}
                      </div>
                    </div>
                    <h3 className="text-base md:text-lg font-medium text-white mb-2 text-center whitespace-pre-line group-hover:text-white transition-colors duration-300">{area.caption}</h3>
                  </div>
                ))}
              </div>
            </section>
            <ServiceInquiryModal open={!!modal} onClose={() => setModal(null)} title={modal || ''} />

            <section className="py-4 px-4 md:px-8 max-w-6xl mx-auto mb-4" data-aos="fade-up">
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-[#366A00]">SSPL has been working in providing revenue assurance solutions and services for various Banks, Insurance, Retail and Telecom Companies.</h2>
              </div>
            </section>
            
            <KeyBenefitsAssureBI />
            
            {/* Revenue Assurance Services Grid */}
            <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {/* Card 1: Revenue Assurance */}
                <motion.div 
                  className="bg-white p-4 md:p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#3a6b1b] flex items-center justify-center">
                      <FaMoneyBillWave className="text-white text-lg md:text-2xl" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-[#366A00] mb-4 text-center">Revenue Assurance</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Postpaid</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Prepaid</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Value Added Services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Inter Usage Connectivity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Roaming Analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Intra Connect Reconciliations (ICR)</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Card 2: Network Management Services */}
                <motion.div 
                  className="bg-white p-4 md:p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#3a6b1b] flex items-center justify-center">
                      <FaServer className="text-white text-lg md:text-2xl" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-[#366A00] mb-4 text-center">Network Management Services</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Capacity Planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Interactive Voice Recorder Analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Cradle to Grave Analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Menu Path Analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Service Level Agreement analysis</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Card 3: Revenue Risk Management */}
                <motion.div 
                  className="bg-white p-4 md:p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#3a6b1b] flex items-center justify-center">
                      <FaChartLine className="text-white text-lg md:text-2xl" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-[#366A00] mb-4 text-center">Revenue Risk Management</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Bad Debts Calculation & Analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Exposure and Credit Limit Monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Barring and Suspension Analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Reconnection Reports</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Card 4: Customer Service Delivery */}
                <motion.div 
                  className="bg-white p-4 md:p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#3a6b1b] flex items-center justify-center">
                      <FaUserFriends className="text-white text-lg md:text-2xl" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-[#366A00] mb-4 text-center">Customer Service Delivery</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Business Control Department</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Collection Department</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Credit and Risk Department</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Customer Account Department</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Card 5: Settlement & Wholesale Billing */}
                <motion.div 
                  className="bg-white p-4 md:p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#3a6b1b] flex items-center justify-center">
                      <FaHandshake className="text-white text-lg md:text-2xl" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-[#366A00] mb-4 text-center">Settlement & Wholesale Billing</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Interconnect</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Roaming</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">ICR</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">VAS Short Code Operator</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Card 6: BTS Cell ID Configuration */}
                <motion.div 
                  className="bg-white p-4 md:p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#3a6b1b] flex items-center justify-center">
                      <FaCalculator className="text-white text-lg md:text-2xl" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-[#366A00] mb-4 text-center">BTS Cell ID Configuration</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Monitoring and Tracking the Retailers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black text-sm md:text-base">Calculation of BTS ID wise Usage</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </section>
            <ScheduleDemo/>
            
     <Footer/>   
     </main>
    </>
  )
}

export default revenue