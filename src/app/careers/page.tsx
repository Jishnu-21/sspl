import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import CareerBanner from './CareerBanner'
import CareerGallery from './CareerGallery'
import CareerPerks from './CareerPerks'
import CareerClients from './CareerClients'
import CareerOpenings from './CareerOpenings'
import ShortPageBanner from '../components/ShortPageBanner'

const Careers = () => {
  return (
    <>
      <main className="flex flex-col bg-white min-h-screen">
        <Header/>
        <ShortPageBanner
        title="Career"
        backgroundImage="/images/partner.png"
        subtitle='Learn more about job & career opportunities at SSPL.'
      />
        
        <CareerGallery/>
        <CareerPerks/>
        <CareerClients/>
        <CareerOpenings/>
        <Footer/>
      </main>
    </>
  )
}

export default Careers