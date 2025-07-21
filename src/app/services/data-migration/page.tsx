"use client"

import PageBanner from '@/app/components/PageBanner'
import Footer from '@/app/Footer'
import Header from '@/app/Header'
import Image from 'next/image'
import React from 'react'
import DataMigrationRisks from '@/app/components/DataMigrationRisks'
import { motion } from 'framer-motion'
import DownloadBrochureButton from '@/app/components/DownloadBrochureButton'

const DataMigration = () => {
  return (
    <>
      <main className="flex flex-col bg-white min-h-screen">
        <Header/>
        <PageBanner
          backgroundImage="/images/services/banners/datamigration.png"
          title="Data Migration Testing"
          bannerKey='data-migration'
        />
        
        <motion.section
          className="py-4 px-4 md:px-8 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-2">
            <div className="max-w-6xl mx-auto text-center mb-2">
              <p className="text-gray-700 leading-relaxed mb-6">
                Data migration is the process of transferring data between storage systems, data formats, or computer systems. It is a key consideration for any system implementation, upgrade, or consolidation. Data migrations are critical projects that require careful planning, execution, and validation to ensure business continuity and data integrity.
              </p>
            </div>
            <DownloadBrochureButton pdfPath="/pdfs/assureBI_DataMigration_Testing.pdf" />
          </div>
        </motion.section>
        
        <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-6"></div>
        
        {/* Why Migrate Your Data */}
        <motion.section
          className="py-4 px-4 md:px-8 max-w-7xl mx-auto mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-[#366A00] mb-6">Why Migrate Your Data?</h2>
          </div>

          {/* Image */}
          <div className="mb-8 flex justify-center">
            <Image 
              src="/images/services/data-mig2.jpg" 
              alt="Data Migration Risks" 
              width={600} 
              height={350}
              className="rounded-md"
            />
          </div>

          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed mb-6">
              Data migrations generally result from the introduction of a new system. This may involve an application migration or consolidation in which one or more legacy systems are replaced or the deployment of an additional system that will sit alongside the existing applications. Whatever the specific nature of any data migration, the ultimate aim is to improve corporate performance and deliver competitive advantage. Accurate data is the raw material that maximizes the value of enterprise applications. However, when existing data is migrated to a new target application, it can become apparent that it may contain inaccuracies, unknowns, redundant and duplication. Although the data in the source system may be perfectly adequate for its current use, yet, it may be wholly inadequate in terms of content and structure to achieve the objectives of the target system. Without a reasonable understanding of both source and target, transferring data into a more sophisticated application will only lead to amplify the negative impact of any incorrect or irrelevant data, perpetuate any hidden legacy problems, and increase exposure to risk.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              It is quite often heard that an application is moved to a different server, the technology is changed, it is updated to the next version or moved to different database server etc. The entire database is migrated to a new version or totally to a new platform. In both the cases, when the data is pushed to the new environment, it is important to be assured that the records are being correctly migrated and their essential values are correct, as earlier. SSPL, with its team of experts in this field, helps the clients' to test the migration with 100% records being analyzed on its tool, and tested with user required parameters.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              It helps to identify the shortcomings and data related issues w.r.t the earlier version versus to the new version. Assures on the critical GoLive day, everything is perfect and as per the expectations.    
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The technology with its critical technical advancements, helps the client to gain better insights of the migrated data tables, fields and records. Few of the technological benefits are listed below:     
            </p>
            <p className="text-gray-700 leading-relaxed">
              <ul className="list-disc list-inside inline-block text-left">
                <li>100% data testing, with no sampling or test records.</li>
                <li>Once data is captured, the records cannot be modified. User gets most reliable report.</li>
                <li>There is no limit on the number of records and fields to manage the testing.</li>
                <li>Fast processing of the tables.</li>
                <li>Fully customisable logics and conditions can be incorporated in shortest possible time.</li>
                <li>It can be automated to be performing Auto-Mode testing analytics, and reports could be received over emails.</li>
                <li>Output reports can be customised as per the needs and requirements.</li>
                <li>Besides testing, SSPL also support for Data Migration activity.</li>
                <li>If new application is being migrated, SSPL also perform application testing.</li>
              </ul>
            </p>
          </div>
        </motion.section>
        <DataMigrationRisks />
        <Footer/>   
      </main>
    </>
  )
}

export default DataMigration