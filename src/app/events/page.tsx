import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import PageBanner from '../components/PageBanner'
import EventsGrid from './EventsGrid'

const events = () => {
  return (
    <>
    <main className="flex flex-col bg-white min-h-screen">
    <Header />
    <PageBanner
    backgroundImage="/images/events.webp"
    title="Events"
    subtitle="Get information about current & upcoming events"
    />
    <EventsGrid />
    <Footer />
    </main>
    </>
  )
}   

export default events