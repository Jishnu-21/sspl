'use client'

import React, { useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ShortPageBanner from '../components/ShortPageBanner'
import WebinarForm from './WebinarForm'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Webinar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
    <main className="flex flex-col bg-white min-h-screen">
    <Header />
    <ShortPageBanner
        backgroundImage="/images/webinar.png"
        title="Webinar"
        subtitle="Series of Webinars from the Industry Experts"
        bannerKey='webinar'
      />

<section className="py-4 px-4 md:px-8 max-w-7xl mx-auto" data-aos="fade-up">
              <div className="mb-2">
                <div className="max-w-6xl mx-auto text-center mb-2">
                  <p className="text-gray-700 leading-relaxed text-justify mb-6">
                  If you are not using data analysis technology for your business management you are still hibernating in the dark ages and may be missing out on great opportunities!
                  </p>
                  <p className="text-gray-700 text-justify leading-relaxed">
                   SSPL has started the series of Webinars in the interest of the Professionals and Industry. This is to bring the best available information about the technology in Big Data Analytics and its usability. Webinars are <strong>FREE OF COST</strong> and you may enroll by filling the registration form.
                </p>

                </div>
                </div>
      </section>

      <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-6" data-aos="fade-in"></div>

      <div data-aos="fade-up">
        <WebinarForm />
      </div>

    <Footer/>
    </main>
    </>
  )
}

export default Webinar