'use client'

import React, { useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import EventsGrid from './EventsGrid'
import ShortPageBanner from '../components/ShortPageBanner'
import AOS from 'aos'
import 'aos/dist/aos.css'

const events = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
    <main className="flex flex-col bg-white min-h-screen">
    <Header />
    <ShortPageBanner
    backgroundImage="/images/events.webp"
    title="Events"
    subtitle="Get information about current & upcoming events"
    />
    <div data-aos="fade-up">
      <EventsGrid />
    </div>
    <Footer />
    </main>
    </>
  )
}   

export default events