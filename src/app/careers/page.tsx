import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import CareerBanner from './CareerBanner'
import CareerGallery from './CareerGallery'
import CareerPerks from './CareerPerks'
import CareerClients from './CareerClients'
import CareerOpenings from './CareerOpenings'

const Careers = () => {
  return (
    <>
      <main className="flex flex-col bg-white min-h-screen">
        <Header/>
        <CareerBanner/>
        <CareerGallery/>
        <CareerOpenings/>
        <Footer/>
      </main>
    </>
  )
}

export default Careers