"use client"

import PageBanner from '@/app/components/PageBanner'
import Footer from '@/app/Footer'
import Header from '@/app/Header'
import Image from 'next/image'
import React, { useEffect } from 'react'
import PartnersScroll, { PartnerItem } from '@/app/components/PartnersScroll'
import { FaCreditCard, FaMoneyBillWave, FaSearchDollar, FaChartLine, FaBoxes, FaUserTie, FaGavel } from 'react-icons/fa'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import DownloadBrochureButton from '@/app/components/DownloadBrochureButton'


// Define risk management areas for the PartnersScroll component with icons
const riskAreas: PartnerItem[] = [
  {
    icon: FaCreditCard,
    useIcon: true,
    caption: "Purchase to Payment\n(Accounts Payable)"
  },
  {
    icon: FaMoneyBillWave,
    useIcon: true,
    caption: "Order to Cash\n(Accounts Receivables)"
  },
  {
    icon: FaSearchDollar,
    useIcon: true,
    caption: "Fraud Detection\nand Management"
  },
  {
    icon: FaChartLine,
    useIcon: true,
    caption: "Cost Management"
  },
  {
    icon: FaBoxes,
    useIcon: true,
    caption: "Inventory Management"
  },
  {
    icon: FaUserTie,
    useIcon: true,
    caption: "HR Analysis"
  },
  {
    icon: FaGavel,
    useIcon: true,
    caption: "Regulatory Compliances"
  }
];

const risk = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
        <main className="flex flex-col bg-white min-h-screen">
    <Header/>
    <PageBanner
          backgroundImage="/images/services/banners/risk-manangement.png"
          title="Risk Management Audit Analytics"
          bannerKey='risk-management'
        />
      
      <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto" data-aos="fade-up">
              <div className="mb-2">
                <div className="max-w-6xl mx-auto text-center mb-2">
                  <h2 className="text-2xl font-semibold text-[#366A00] mb-6">Using analytics tools for years to manage, monitor and control various Risk Parameters </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                  For virtually anyone working in the area of Risk Management-Audit Analytics isn't new. Risk managers have been using analytical tools for years to manage, monitor and control various Risk Parameters, depending upon the type of the Industry they are working with. There is a renaissance in analytics technology underway today, and its essence only surpasses just as the issue of risk takes on an even higher profile for leaders across industries. It can be challenging to separate the hype from the reality when it comes to analytics and risk management. Enterprise risk management can encompass so much more than merely making sure your business has purchased the right type and amount of insurance. With the tools now available, businesses can quantify and model the risks they face, to enable smarter mitigation strategies and better strategic decisions.  
                  </p>
                </div>
                <DownloadBrochureButton pdfPath="/pdfs/assureBI_IA_DataSheet.pdf" />

                </div>
      </section>
      <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-6"></div>


      <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto mb-4" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch gap-8">
            {/* Left: Image and Insights */}
            <div className="w-full md:w-1/2 flex flex-col items-center mb-8 md:mb-0" data-aos="fade-right">
              <div className="relative aspect-[5/3] w-full mb-6">
                <Image 
                  src="/images/services/risk1.jpg" 
                  alt="Data Analytics Charts" 
                  fill
                  className="rounded-md object-cover"
                />
              </div>
           
            </div>
            {/* Right: Main content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
              <p className="text-gray-700 leading-relaxed mb-6">
                First, the amount of data being produced everywhere has exploded and continues to accelerate. The typical executive today is swamped by data pouring from all directions. One job of analytics is to sort the important from the unimportant, analyze and synthesize the data in new ways that create actionable information. Fortunately, the tools and techniques to manage large volumes of data have been progressing over the past several years. The field of Big Data Analytics has evolved and developed from a specific platform to manage large volumes of data into an entire ecosystem of related technologies. SSPL, with its vast experience and team of experts in ERM, helps to select, implement, train and maintain the right solution for the right environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        className="py-4 px-4 md:px-8 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mb-2">
          <div className="max-w-6xl mx-auto text-center mb-2">
            <h2 className="text-2xl font-semibold text-[#366A00] mb-6">Insights in your data</h2>
            <p className="text-gray-700 leading-relaxed">
            IAA is a catalyst for improving an organization's effectiveness and efficiency that provides insights and recommendations. These insights are based on rigorous analysis and assessments of data and business processes. With well-defined commitment to integrity and accountability, the internal audit provides value to governing bodies and senior management undertaking the role of independent advice. SSPL in its endeavor to provide automated solution to manage, analyse and audit the complicated ERP systems such as SAP, Oracle, PeopleSoft, JDEdwards, BaaN etc. Our Internal Audit Analytics Solutions answers most of the audit challenges with advance dashboards embedded into best possible data visualization and presentations. Analytics comprises of the following areas of audit concern wherein the proposed solution is fully expandable, customisable to the user requirements and needs.
            </p>
          </div>
        </div>
      </motion.section>
            <PartnersScroll 
              items={riskAreas}
            />


    <Footer/>
    </main>
    </>
  )
}

export default risk;