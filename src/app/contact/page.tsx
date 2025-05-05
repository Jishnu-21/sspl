import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ContactHero from './ContactHero'
import ContactForm from './ContactForm'
import OfficeLocations from './OfficeLocations'

const Contact = () => {
  return (
    <main className="flex flex-col bg-white min-h-screen">
      <Header/>
      <div className="flex-1 flex flex-col">
        <ContactHero />
        <ContactForm />
        <OfficeLocations />
      </div>
      <Footer />
    </main>
  )
}

export default Contact