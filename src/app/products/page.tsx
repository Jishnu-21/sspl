import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import PageBanner from '../components/PageBanner'
import ScheduleDemo from './ScheduleDemo'
import ProductShowcase from './ProductShowcase'

const Products = () => {
  return (
    <>
      <main className="flex flex-col bg-white min-h-screen">
      <Header/>
      <PageBanner
        backgroundImage="/images/about/banner.png"
        title="Products"
      />
      <ProductShowcase />
      <ScheduleDemo />
      <Footer/>
      </main>
    </>
  )
}

export default Products