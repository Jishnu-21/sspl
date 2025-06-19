"use client"

import React from 'react'
import Header from '@/app/Header'
import PageBanner from '@/app/components/PageBanner'
import Footer from '@/app/Footer'
import Image from 'next/image'
import { FaChartLine, FaMoneyBillWave, FaSearchDollar, FaFileInvoiceDollar, FaChartPie, FaShieldAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const OperationsFinance = () => {
  return (
    <>
      <main className="flex flex-col bg-white min-h-screen">
        <Header/>
        <PageBanner
          backgroundImage="/images/services/banners/ofa.png"
          title="Operations & Finance Analytics"
          subtitle="Can CFOs really use big data for Finance Analytics?"
        />
        <motion.section
          className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-2">
            <div className="max-w-6xl mx-auto text-center mb-2">
              <h2 className="text-2xl font-semibold text-[#366A00] mb-6 whitespace-nowrap">Can CFOs really use Big Data for Finance Analytics?</h2>
              <p className="text-gray-700 leading-relaxed">
                With rare exceptions, until now the closest that Big Data has come to the CFO's office has been via the well-publicized examples involving the enormous consumer databases of credit card vendors, who use them to identify pertinent information, and then sell data on the buying patterns, credit worthiness of the customer pool, among other things. The typical finance department hardly encounters anything close to the size of those terabyte-scale databases when closing the books, preparing budgets and forecasting revenues.
              </p>
            </div>
          </div>
        </motion.section>
        
        <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-6"></div>

        <motion.section
          className="py-8 px-4 md:px-8 max-w-7xl mx-auto mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-[#366A00] mb-6">Create Insight, Impact & Innovation for Financial Services</h2>
            </div>

            {/* Image */}
            <div className="mb-8 flex justify-center">
              <Image 
                src="/images/services/op1.jpg"
                alt="Operations Analytics Charts" 
                width={600}
                height={350}
                className="rounded-md"
              />
            </div>
            
            {/* Text content */}
            <div className="text-center">
              <p className="text-gray-700 leading-relaxed mb-6">
                The promise of Big Data and analytics for CFOs is addressed in scrubbing financial transactions which are aligned to cleanly capture and benefit from more advanced analysis to finding oddities and patterns. For example, although individual payment transactions may each appear appropriate, advanced analytics can help identify areas that may represent fraud, which can then be investigated further. Similarly, credit risk can be better predicted by looking at large amounts of data and more efficient analysis tools that can help audit more transactions and even utilize unstructured data to identify potential outliers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Like many other advocates for financial analytics, experts say you don't have to bring analytics expertise in-house, with all its hiring and training pressures. That's where the outsourcing services segment steps in. An outside firm that also has a strong history as a system integrator can provide the integration and analytics, which ERP systems often lack, especially on the financial side.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                SSPL offers both. The solutions and services are well designed for the clients that cater into delivering the best optimized and customized proposals. Its services and solutions help and support the users to save much more, both in terms of timely reporting and financial savings. The processes are automated to reduce dependency on manpower and solutions work from Intranet to mobile computing. Users being placed anywhere on the globe can access the reports/dashboards via a dependable internet connection, and also get around making editions w.r.t their individual requirements.
              </p>
              
              {/* Finance Analytics Dashboard */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Item 1 */}
                <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
                  <div className="mb-4 w-20 h-20 rounded-full bg-[#a4ce4e] flex items-center justify-center">
                    <FaChartLine className="text-white text-3xl" />
                  </div>
                  <p className="text-center text-gray-700">
                    Real-time financial performance tracking and visualization
                  </p>
                </div>
                
                {/* Item 2 */}
                <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
                  <div className="mb-4 w-20 h-20 rounded-full bg-[#a4ce4e] flex items-center justify-center">
                    <FaMoneyBillWave className="text-white text-3xl" />
                  </div>
                  <p className="text-center text-gray-700">
                    Cash flow optimization and forecasting
                  </p>
                </div>
                
                {/* Item 3 */}
                <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
                  <div className="mb-4 w-20 h-20 rounded-full bg-[#a4ce4e] flex items-center justify-center">
                    <FaSearchDollar className="text-white text-3xl" />
                  </div>
                  <p className="text-center text-gray-700">
                    Anomaly detection for expense management and cost reduction
                  </p>
                </div>
                
                {/* Item 4 */}
                <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
                  <div className="mb-4 w-20 h-20 rounded-full bg-[#a4ce4e] flex items-center justify-center">
                    <FaFileInvoiceDollar className="text-white text-3xl" />
                  </div>
                  <p className="text-center text-gray-700">
                    Automated invoice processing and accounts payable optimization
                  </p>
                </div>
                
                {/* Item 5 */}
                <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
                  <div className="mb-4 w-20 h-20 rounded-full bg-[#a4ce4e] flex items-center justify-center">
                    <FaChartPie className="text-white text-3xl" />
                  </div>
                  <p className="text-center text-gray-700">
                    Predictive analytics for budget planning and resource allocation
                  </p>
                </div>
                
                {/* Item 6 */}
                <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
                  <div className="mb-4 w-20 h-20 rounded-full bg-[#a4ce4e] flex items-center justify-center">
                    <FaShieldAlt className="text-white text-3xl" />
                  </div>
                  <p className="text-center text-gray-700">
                    Risk assessment and compliance monitoring for financial operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        <Footer/>
      </main>
    </>
  )
}

export default OperationsFinance