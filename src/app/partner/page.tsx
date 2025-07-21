'use client'
import React, { useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ShortPageBanner from '../components/ShortPageBanner'
import PartnerForm from './PartnerForm'
// import RecognitionSection from '../RecognitionSection'
import PartnerMarquee from './PartnerMarquee'
import AOS from 'aos'
import 'aos/dist/aos.css'

const partner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
    <main className="flex flex-col bg-white min-h-screen">
      <Header/>
      <ShortPageBanner
        title="Become a Partner"
        backgroundImage="/images/partner.png"
        subtitle='SSPL is represented by a worldwide network of partners.'
        bannerKey='partner'
      />

      <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto" data-aos="fade-up">
        <div className="mb-8">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-semibold text-[#366A00] mb-4">Who shares our commitment to a high level of service & support to our clientele?</h2>
            <p className="text-gray-700 text-justify leading-relaxed text-lg">
              SSPL provides the most technically advanced Data Analytics and Big Data Analytics solutions. Take pride in being awarded as Best Big Data Analytics Solution Company by WQPC. We offer a gala of opportunities to participate in learning the proven growth of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Full width divider line */}
      <div className="w-full border-t border-gray-300" data-aos="fade-in"></div>
      
      <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto" data-aos="fade-up">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center min-h-[500px]">
          <div className="w-full md:w-2/3 lg:w-2/3 flex flex-col justify-center h-full">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-semibold text-[#366A00] mb-3">Better Results with Better Technology:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Opens up new and more meaningful analytics and result oriented solutions for the Professionals and Industry.</li>
                <li>Makes deployment and use of solutions much easier than the alternatives.</li>
                <li>Offers countless competitive advantages, but is compatible with alternative Big Data Analytics solutions.</li>
              </ul>
              
              <p className="mt-4 text-justify text-gray-700">
                Organizations that provide sales network and solutions in the economic sectors such as Manufacturing, Retail, Telecom, Banking, Insurance, Media, Transportation and Government shall find a very strong, supportive partner in SSPL. SSPL as an Organisation that will open up new business opportunities for significant revenue in software sales, support, training, and consulting for its Partners and Associates.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 lg:w-1/3">
            <PartnerForm />
          </div>
        </div>
      </section>

      <div className="w-full mb-20" data-aos="fade-up">
         <PartnerMarquee/>
      </div>
      <Footer/>
    </main>
    </>
  )
}

export default partner