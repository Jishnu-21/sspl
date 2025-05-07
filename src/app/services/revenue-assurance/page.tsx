"use client"

import PageBanner from '@/app/components/PageBanner'
import Footer from '@/app/Footer'
import Header from '@/app/Header'
import Image from 'next/image'
import React, { useRef } from 'react'
import PartnersScroll, { PartnerItem } from '@/app/components/PartnersScroll'
import KeyBenefitsAssureBI from '@/app/components/KeyBenefitsAssureBI'
import DashboardGrid from '@/app/components/DashboardGrid'


const revenue = () => {
  // Define telecom industry areas for the PartnersScroll component
  const telecomAreas: PartnerItem[] = [
    {
      imageSrc: "/images/partners/baystate-health.png",
      imageAlt: "Baystate Health",
      caption: "Prepaid - Postpaid\nCustomers"
    },
    {
      imageSrc: "/images/partners/baystate-health.png",
      imageAlt: "Baystate Health",
      caption: "Site Management"
    },
    {
      imageSrc: "/images/partners/baystate-health.png",
      imageAlt: "Baystate Health",
      caption: "Network Management\nServices"
    },
    {
      imageSrc: "/images/partners/baystate-health.png",
      imageAlt: "Baystate Health",
      caption: "Value Added\nServices"
    },
    {
      imageSrc: "/images/partners/baystate-health.png",
      imageAlt: "Baystate Health",
      caption: "Inter-operator\nSettlement"
    }
  ];

  return (
    <>
    <main className="flex flex-col bg-white min-h-screen">
    <Header/>
    <PageBanner
          backgroundImage="/images/about/banner.png"
          title="Revenue Assurance"
          subtitle="Refining Capabilities in Digital and Converge Space"
        />
            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
              <div className="mb-2">
                <div className="max-w-4xl mx-auto text-center mb-2">
                  <h2 className="text-2xl font-semibold text-[#366A00] mb-6 whitespace-nowrap">Refining Capabilities in Digital and Converge Space</h2>
                  <p className="text-gray-700 leading-relaxed">
                  Revenue Assurance (RA) was conceived as a risk mitigation solution about 20 years ago in response to the constantly increasing complexity of the telecom value chain and growing revenue leakages.
                  </p>
                </div>
                </div>
            </section>
            <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-6"></div>
    
            {/* Protect, Monitor & Control All Possible Revenue Leakages*/}
            <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto mb-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-[#366A00] mb-6">Protect, Monitor & Control All Possible Revenue Leakages</h2>
              </div>
              
              <div className="max-w-4xl mx-auto">
                {/* Image */}
                <div className="mb-8 flex justify-center">
                  <Image 
                    src="/images/services/data-analytics-charts.jpg" 
                    alt="Data Analytics Charts" 
                    width={600} 
                    height={350}
                    className="rounded-md"
                  />
                </div>
                
                {/* Text content */}
                <div className="text-center">
                  <p className="text-gray-700 leading-relaxed mb-6">
                  Today, Revenue Assurance is being looked upon seriously by Banking, Insurance, Manufacturing and Retail Sectors also. The priority of the CFO (Chief Financial Officers) of an organization is to protect, monitor and control all possible revenue leakages, be it through Frauds, Manipulations or Adjustments. With the declining margins and new opportunities on the horizon, corporates success cannot rely solely on state-of-the-art networks, as technology alone cannot bet upon securing benefits for companies. The recent industry shift toward convergence within the telecom, media and technology (TMT) industry and the emergence of other entrants such as Over-The-Top (OTT) players, make revenue assurance more mandatory than ever before for the providers to ensure their strategies and systems are robust. Timely Inter-Operator settlement also poses major concerns for the CFO to maintain the flow of funds within the organisation ensuring smooth operations and growth.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                  Revenue Assurance is the methodology of increasing an organization's income by identifying areas where revenue gets lost and minimizing these losses by addressing the source of the leaked revenue. There are various business activities that can contribute to revenue leakage within the companies. Various analytics are being used to monitor and control the revenue leakages.
                  </p>
                </div>
              </div>
            </section>

            <PartnersScroll 
              title="In telecom industry, the following areas are a part of our solutions;"
              items={telecomAreas}
            />

            <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto mb-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-[#366A00] mb-6">SSPL has been working in providing revenue assurance solutions and services for various Banks, Insurance, Retail and Telecom Companies.</h2>
              </div>
            </section>
            
            <KeyBenefitsAssureBI />
            
            <DashboardGrid />
            
     <Footer/>   
     </main>
    </>
  )
}

export default revenue