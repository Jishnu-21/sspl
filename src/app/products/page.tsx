import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ScheduleDemo from './ScheduleDemo'
import ProductShowcase from './ProductShowcase'
import PageBanner from '../components/PageBanner'

const Products = () => {
  return (
    <>
      <main className="flex flex-col bg-white min-h-screen">
      <Header/>
      <PageBanner
        backgroundImage="/images/products/product-banner.png"
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