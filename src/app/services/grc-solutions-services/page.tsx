"use client"

import PageBanner from '@/app/components/PageBanner'
import Footer from '@/app/Footer'
import Header from '@/app/Header'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import DownloadBrochureButton from '@/app/components/DownloadBrochureButton'

const Grc = () => {
  return (
    <>
    <main className="flex flex-col bg-white min-h-screen">
      <Header/>
      <PageBanner
        backgroundImage="/images/services/banners/grc.jpg"
        title="GRC Solution & Services"
      />

      <section className="py-4 sm:py-8 md:py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="">
          <div className="max-w-6xl mx-auto text-center ">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6">
              We strengthen your core values, align your organization structure and infuse a culture that supports and sustains well in every season.
            </p>
          </div>
          <DownloadBrochureButton pdfPath="/pdfs/SSPL_GRC_Solution.pdf" />
        </div>
      </section>
      
      <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-3 sm:mb-6"></div>

      <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#366A00] text-center mb-6">Governance Framework</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-4">
            {/* Left side - Image */}
            <motion.div 
              className="w-full md:w-1/2 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-full min-h-[200px] md:min-h-[300px]">
                <Image 
                  src="/images/services/grc3.png" 
                  alt="Governance Framework" 
                  fill
                  className="object-cover rounded-md"
                  priority
                />
              </div>
            </motion.div>
            
            {/* Right side - Content */}
            <motion.div 
              className="w-full md:w-1/2 flex flex-col justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 w-full">
                {/* Row 1 */}
                <div className="flex items-start gap-2 md:gap-3">
                  <span className="text-[#366A00] mt-0.5 text-sm flex-shrink-0">▶</span>
                  <span className="text-gray-700 text-xs md:text-sm">Reassess Core Values, Vision and Mission</span>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <span className="text-[#366A00] mt-0.5 text-sm flex-shrink-0">▶</span>
                  <span className="text-gray-700 text-xs md:text-sm">Review Organizational Structure</span>
                </div>
                
                {/* Row 2 */}
                <div className="flex items-start gap-2 md:gap-3">
                  <span className="text-[#366A00] mt-0.5 text-sm flex-shrink-0">▶</span>
                  <span className="text-gray-700 text-xs md:text-sm">Redesign Charters, Policies and Procedures</span>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <span className="text-[#366A00] mt-0.5 text-sm flex-shrink-0">▶</span>
                  <span className="text-gray-700 text-xs md:text-sm">Culture Consulting</span>
                </div>
                
                {/* Row 3 */}
                <div className="flex items-start gap-2 md:gap-3">
                  <span className="text-[#366A00] mt-0.5 text-sm flex-shrink-0">▶</span>
                  <span className="text-gray-700 text-xs md:text-sm">Training sessions held on Governance, Culture, Core Values & Ethics</span>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <span className="text-[#366A00] mt-0.5 text-sm flex-shrink-0">▶</span>
                  <span className="text-gray-700 text-xs md:text-sm">Training imparted to Operations Staff on Policies and Procedures</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 my-3 sm:my-6"></div>

      {/* Risk Management Section */}
      <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#366A00] text-center mb-4">Risk Management</h2>
        
        <div className="mb-3 sm:mb-6 md:mb-8">
          <p className="text-gray-700 text-center max-w-6xl mx-auto text-sm md:text-base">
            We help in managing organizational uncertainties by designing Risk Management Framework, providing Risk Assurance and implementing Risk Management Solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch gap-2 md:gap-2">
            {/* Left side - Content */}
            <motion.div 
              className="w-full md:w-1/2 flex flex-col justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full flex flex-col justify-center">
                {/* Risk Management Framework */}
                <div className="mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Risk Management Framework</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Identify Key Risks of the organization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Assist in preparing Risk Register / RCSA / ORSA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Redesign the process and controls to mitigate the risk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Trainings across the hierarchy on Risk culture and Controls</span>
                    </li>
                  </ul>
                </div>

                {/* Risk Assurance */}
                <div className="mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Risk Assurance</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Operational Risk Assurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Information Security Risk / Cyber Risk Assurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Fraud Risk Assurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Quality Assurance including SOX Audits</span>
                    </li>
                  </ul>
                </div>

                {/* Risk Management Solutions */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Risk Management Solutions - Outsourcing</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">External Management of Operational Risk through an outsource agreement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Implement the newly designed Risk Management Framework</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Coordinate Self Assessments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">ERM / ORM Software Implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Implement Business Continuity Planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Stress Testing, ICAAP, ILAAP</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            {/* Right side - Image */}
            <motion.div 
              className="w-full md:w-1/2 flex items-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-full min-h-[200px] md:min-h-[600px]">
                <Image 
                  src="/images/services/grc2.png" 
                  alt="Risk Management" 
                  fill
                  className="object-cover rounded-md"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 my-3 sm:my-6"></div>

      {/* Compliance Section */}
      <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto mb-8" >
        <h2 className="text-2xl md:text-4xl font-semibold text-[#366A00] text-center mb-4">Compliance</h2>
        
        <div className="mb-3 sm:mb-6 md:mb-8">
          <p className="text-gray-700 text-center max-w-6xl mx-auto text-sm md:text-base">
            We help you in actualizing Regulatory Compliance at Financial Institutions through our Regulatory Risk Management solutions and Risk Assurance
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch gap-y-6 md:gap-x-8">
            {/* Left side - Image */}
            <motion.div 
              className="w-full md:w-1/2 "
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-full min-h-[200px] md:min-h-[450px] mb-4 md:mb-0 w-full mx-0">
                <Image 
                  src="/images/services/compliance.png" 
                  alt="Compliance" 
                  fill
                  className="object-cover rounded-md"
                  priority
                />
              </div>
            </motion.div>
            
            {/* Right side - Content */}
            <motion.div 
              className="w-full md:w-1/2 flex flex-col justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-full flex flex-col justify-center">
                {/* Regulatory Risk Management */}
                <div className="mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Regulatory Risk Management</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Preparation of Compliance & AML Policies and Procedures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Software Implementation for Compliance, AML and Sanctions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Implementation of Data Privacy laws (GDPR / PDPL)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Compliance and AML training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Implementation of New Regulations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Regulatory Compliance Reporting</span>
                    </li>
                  </ul>
                </div>

                {/* Regulatory Risk Assurance */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Regulatory Risk Assurance</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Regulatory Risk Assurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">AML, KYC and Sanctions Risk Assurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Data Privacy Risk Assurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Vendor Risk Assurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">ORM Framework External Assessment as required by CBB</span>
                    </li>
                    <li className="flex items-start gap-2  ">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">LRM External Assessment as required by CBB</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 my-3 sm:my-6"></div>

      {/* IT & IS Solutions Section */}
      <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto mb-8" >
        <h2 className="text-2xl md:text-4xl font-semibold text-[#366A00] text-center mb-4">IT & IS Solutions</h2>
        
        <div className="mb-3 sm:mb-6 md:mb-8">
          <p className="text-gray-700 text-center max-w-6xl mx-auto text-sm md:text-base">
            We bring reliable and economical solutions to meet your needs in the related field of Information Technology Solutions and Information Security.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch gap-2 md:gap-2">
            {/* Left side - Content */}
            <motion.div 
              className="w-full md:w-1/2 flex flex-col"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full">
                {/* Information Technology Solutions */}
                <div className="mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Information Technology Solutions</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Governance Risk and Controls (GRC) Software</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Operational Risk Management (ORM) Software</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">IFRS 9 Software</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Regulatory Risk Management & AML Software</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Accounting Software</span>
                    </li>
                  </ul>
                </div>

                {/* Information Security Solutions */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Information Security Solutions</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Information Security Risk Assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Information Security Policies and Procedures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Information Security Outsourcing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Cyber Risk Assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Vulnerability Assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#366A00] mt-1 text-sm">▶</span>
                      <span className="text-gray-700 text-xs md:text-sm">Information Security Software Selection Advisory</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            {/* Right side - Image */}
            <motion.div 
              className="w-full md:w-1/2 flex items-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-full min-h-[200px] md:min-h-[400px]">
                <Image 
                  src="/images/services/grc6.png" 
                  alt="IT & IS Solutions" 
                  fill
                  className="object-cover rounded-md"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer/>
    </main>
    </>
  )
}

export default Grc