"use client"

import React from 'react'
import Image from 'next/image'

const DashboardGrid = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dashboard 1 */}
          <div className="bg-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="aspect-square flex items-center justify-center bg-gray-50 rounded mb-3">
              <Image 
                src="/images/services/dashboard-placeholder.jpg" 
                alt="Revenue Dashboard" 
                width={300} 
                height={300}
                className="rounded"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p className="text-center text-gray-700 font-medium">Dashboards</p>
          </div>
          
          {/* Dashboard 2 */}
          <div className="bg-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="aspect-square flex items-center justify-center bg-gray-50 rounded mb-3">
              <Image 
                src="/images/services/dashboard-placeholder.jpg" 
                alt="Revenue Dashboard" 
                width={300} 
                height={300}
                className="rounded"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p className="text-center text-gray-700 font-medium">Dashboards</p>
          </div>
          
          {/* Dashboard 3 */}
          <div className="bg-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="aspect-square flex items-center justify-center bg-gray-50 rounded mb-3">
              <Image 
                src="/images/services/dashboard-placeholder.jpg" 
                alt="Revenue Dashboard" 
                width={300} 
                height={300}
                className="rounded"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p className="text-center text-gray-700 font-medium">Dashboards</p>
          </div>
          
          {/* Dashboard 4 */}
          <div className="bg-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="aspect-square flex items-center justify-center bg-gray-50 rounded mb-3">
              <Image 
                src="/images/services/dashboard-placeholder.jpg" 
                alt="Revenue Dashboard" 
                width={300} 
                height={300}
                className="rounded"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p className="text-center text-gray-700 font-medium">Dashboards</p>
          </div>
          
          {/* Dashboard 5 */}
          <div className="bg-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="aspect-square flex items-center justify-center bg-gray-50 rounded mb-3">
              <Image 
                src="/images/services/dashboard-placeholder.jpg" 
                alt="Revenue Dashboard" 
                width={300} 
                height={300}
                className="rounded"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p className="text-center text-gray-700 font-medium">Dashboards</p>
          </div>
          
          {/* Dashboard 6 */}
          <div className="bg-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="aspect-square flex items-center justify-center bg-gray-50 rounded mb-3">
              <Image 
                src="/images/services/dashboard-placeholder.jpg" 
                alt="Revenue Dashboard" 
                width={300} 
                height={300}
                className="rounded"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p className="text-center text-gray-700 font-medium">Dashboards</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardGrid
