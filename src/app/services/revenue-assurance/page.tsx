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

       
            <ServiceInquiryModal open={!!modal} onClose={() => setModal(null)} title={modal || ''} />

            <section className="py-4 px-4 md:px-8 max-w-6xl mx-auto mb-4" data-aos="fade-up">
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-[#366A00]">SSPL has been working in providing revenue assurance solutions and services for various Banks, Insurance, Retail and Telecom Companies.</h2>
              </div>
            </section>
            
            <KeyBenefitsAssureBI />
            
            {/* Revenue Assurance Services Grid */}
           
            <ScheduleDemo/>
            
     <Footer/>   
     </main>
    </>
  )
}

export default revenue