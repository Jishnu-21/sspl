"use client"

import PageBanner from '@/app/components/PageBanner'
import Footer from '@/app/Footer'
import Header from '@/app/Header'
import Image from 'next/image'
import React, { useRef } from 'react'
import PartnersScroll, { PartnerItem } from '@/app/components/PartnersScroll'
import KeyBenefitsAssureBI from '@/app/components/KeyBenefitsAssureBI'
import { motion } from 'framer-motion'
import { FaMobileAlt, FaBuilding, FaNetworkWired, FaPlus, FaExchangeAlt, FaFileInvoiceDollar, FaHeadset, FaShieldAlt, 
  FaMoneyBillWave, FaServer, FaChartLine, FaUserFriends, FaHandshake, FaCalculator } from 'react-icons/fa'


const revenue = () => {
  // Define telecom industry areas for the PartnersScroll component with icons
  const telecomAreas: PartnerItem[] = [
    {
      icon: FaMobileAlt,
      useIcon: true,
      caption: "Prepaid - Postpaid\nCustomers"
    },
    {
      icon: FaBuilding,
      useIcon: true,
      caption: "Site Management"
    },
    {
      icon: FaNetworkWired,
      useIcon: true,
      caption: "Network Management\nServices"
    },
    {
      icon: FaPlus,
      useIcon: true,
      caption: "Value Added\nServices"
    },
    {
      icon: FaExchangeAlt,
      useIcon: true,
      caption: "Inter-operator\nSettlement"
    },
    {
      icon: FaFileInvoiceDollar,
      useIcon: true,
      caption: "Billing and Collections"
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
    }
  ];

  return (
    <>
    <main className="flex flex-col bg-white min-h-screen">
    <Header/>
    <PageBanner
          backgroundImage="/images/services/banners/revenue-assurance.png"
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
                    src="/images/services/revenue1.jpg" 
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
            
            {/* Revenue Assurance Services Grid */}
            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1: Revenue Assurance */}
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#a4ce4e] flex items-center justify-center">
                      <FaMoneyBillWave className="text-white text-2xl" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#366A00] mb-4 text-center">Revenue Assurance</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Postpaid</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Prepaid</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Value Added Services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Inter Usage Connectivity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Roaming Analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Intra Connect Reconciliations (ICR)</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Card 2: Network Management Services */}
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#a4ce4e] flex items-center justify-center">
                      <FaServer className="text-white text-2xl" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#366A00] mb-4 text-center">Network Management Services</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Capacity Planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Interactive Voice Recorder Analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Cradle to Grave Analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Menu Path Analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Service Level Agreement analysis</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Card 3: Revenue Risk Management */}
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#a4ce4e] flex items-center justify-center">
                      <FaChartLine className="text-white text-2xl" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#366A00] mb-4 text-center">Revenue Risk Management</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Bad Debts Calculation & Analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Exposure and Credit Limit Monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Barring and Suspension Analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Reconnection Reports</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Card 4: Customer Service Delivery */}
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#a4ce4e] flex items-center justify-center">
                      <FaUserFriends className="text-white text-2xl" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#366A00] mb-4 text-center">Customer Service Delivery</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Business Control Department</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Collection Department</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Credit and Risk Department</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Customer Account Department</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Card 5: Settlement & Wholesale Billing */}
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#a4ce4e] flex items-center justify-center">
                      <FaHandshake className="text-white text-2xl" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#366A00] mb-4 text-center">Settlement & Wholesale Billing</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Interconnect</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Roaming</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">ICR</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">VAS Short Code Operator</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Card 6: BTS Cell ID Configuration */}
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#a4ce4e] flex items-center justify-center">
                      <FaCalculator className="text-white text-2xl" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#366A00] mb-4 text-center">BTS Cell ID Configuration</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Monitoring and Tracking the Retailers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a4ce4e] mt-1">›</span>
                      <span className="text-black">Calculation of BTS ID wise Usage</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </section>
            
     <Footer/>   
     </main>
    </>
  )
}

export default revenue