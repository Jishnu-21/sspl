"use client"

import Footer from '@/app/Footer'
import Header from '@/app/Header'
import PageBanner from '@/app/components/PageBanner'
import React from 'react'
import Image from 'next/image'

const algorithmAuditing = () => {
  return (
    <>
    <main className="flex flex-col bg-white min-h-screen">
    <Header/>
    <PageBanner 
      backgroundImage="/images/services/banners/algorithm-auditing.jpg"
      title="Algorithm Auditing"
      subtitle="Test and verify the working of application"
    />
     
     <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="mb-2">
            <div className="max-w-4xl mx-auto text-center mb-2">
              <p className="text-gray-700 leading-relaxed">
              Algorithm Auditing is to test and verify the working of application as per the Industry Rules and Norms. There could be genuine technical issues in the application, which might result benefitting certain class of user/ transaction types. There are also examples of algorithmic models that are so complex that their developers are not sure why a model is making particular decision. These algorithmic challenges, along with data privacy issues, have created the need for the role of algorithm audit. We as professional auditors have requisite knowledge about the domain under audit and its processes.
              </p>
            </div>
          </div>
        </section> 

     <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-6"></div>
            
            {/* Key Fraud Management Capabilities */}
            <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto mb-12">
              
              <div className="max-w-4xl mx-auto">
                {/* Image */}
                <div className="mb-8 flex justify-center">
                  <Image 
                    src="/images/services/algo-audit1.jpg" 
                    alt="Fraud Analytics Dashboard" 
                    width={600} 
                    height={350}
                    className="rounded-md"
                  />
                </div>
                
                {/* Text content */}
                <div className="text-center">
                  <p className="text-gray-700 leading-relaxed mb-4">
                  Based on the Audit Scope, appropriate tools and analytics should be used for the Audits. Reasonable size of the data set should be created based on the Auditee Business and Transaction volume and process complications. Functional capabilities of the Application under Audit should be well understood.                 </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                  We cover all possible type of transactions that could happen in the system of the Auditee within their business model. We usually work with data science teams and advanced tools, methodologies to review algorithms, ensuring transparency, being fair and detailed output/report.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="mb-2">
            <div className="max-w-4xl mx-auto text-center mb-2">
              <h2 className="text-2xl font-semibold text-[#366A00] mb-6 whitespace-nowrap">Professional Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-center">
              • Analysing the system for potential algorithmic risk that could hold a bias or benefit specific users.<br />
              • Use of Advance Analytics Techniques on data sets to determine if certain groups/ members/ clients are likely to be favored due to any inherent bias(es) in the Price Discovery Process Algorithm as well as reviewing for any violations of the regulatory norms.<br />
              • Assessing the performance of algorithms on real data, to test for hidden biases resulting from complex correlations.<br />
              • Providing a trusted and objective third party review, validating regulatory compliance of algorithms, and ensuring they are being used appropriately.<br />
              • Delivering reasonable assurance to certify the algorithm as “Trustworthy” and making sure all the defects/ issues are being timely resolved.
              </p>

            </div>
          </div>
        </section>


    <Footer/>
    </main>
    </>
  )
}

export default algorithmAuditing