import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import CareerBanner from './CareerBanner'
import CareerGallery from './CareerGallery'

import CareerOpenings from './CareerOpenings'
import WhyWorkWithUs from './WhyWorkWithUs'
import WhoWereLookingFor from './WhoWereLookingFor'

const Careers = () => {
  return (
    <>
      <main className="flex flex-col bg-white min-h-screen">
        <Header/>
        <CareerBanner/>
        <CareerGallery/>
        <WhyWorkWithUs/>
        <WhoWereLookingFor/>
        <CareerOpenings/>
        <Footer/>
      </main>
    </>
  )
}

export default Careers