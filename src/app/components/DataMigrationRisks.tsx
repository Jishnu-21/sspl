"use client"

import React from 'react'
import Image from 'next/image'

const DataMigrationRisks = () => {
  return (
    <section className="mb-8 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-[#366A00] mb-4">The Risks Of Overlooking Data Content</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left side - Image */}
          <div className="w-full md:w-2/3 mb-6 md:mb-0">
            <div className="bg-gray-100 rounded-md">
              <Image 
                src="/images/services/data-mig1.png" 
                alt="Data Migration Risks" 
                width={300} 
                height={300}
                className="w-full "
              />
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="w-full md:w-2/3">
            <p className="text-gray-700 text-justify mb-4">
              With respect to the rules, based on the examination of initial source data samples and totally relying on metadata descriptions, tends to be a major risk that indicates the following:
            </p>
            
            <ul className="space-y-3 text-gray-700 text-justify list-disc pl-5">
              <li>The end users' expectations will not be met or will fall short of actual needs.</li>
              <li>The target system will not perform effectively.</li>
              <li>Workarounds will need to be implemented and resourced.</li>
              <li>Additional cleansing work will need to be carried out.</li>
              <li>The costs of missing the deadline will include maintaining the legacy and incurring costs of legacy systems as well as downtime on the target application.</li>
              <li>The new system will be blamed, making it harder to gain user acceptance and business confidence will be questioned.</li>
              <li>To know more about our services and solutions, please feel free to write us at info@sspl.com</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataMigrationRisks
