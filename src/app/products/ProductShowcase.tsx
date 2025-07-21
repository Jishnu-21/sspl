'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import AssureBIComponent from './AssureBIComponent';
import ArbutusComponent from './ArbutusComponent';
import GenericProductComponent from './GenericProductComponent';
import EnInvoiceComponent from './EnInvoiceComponent';
import BarnOwlComponent from './BarnOwlComponent';
import TruOIComponent from './TruOIComponent';

// Define the type for the product content
interface ProductContent {
  description: string;
  features: string[];
  testimonial?: {
    quote: string;
    author: string;
    company: string;
  };
  image?: string;
}

// Define the type for a product
interface Product {
  id: string;
  logo: string;
  title: string;
  subtitle?: string;
  content: ProductContent;
}

interface ProductShowcaseProps {
  onProductChange?: (productId: string) => void;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onProductChange }) => {
  // Products data with logos and content
  const products = [
    {
      id: 'assureBI',
      logo: '/images/products/assureBI.png',
      title: 'assureBI',
      content: {
        description: `is a management control and monitoring platform that is designed to help your company be more responsive and efficient. assureBI gives your company powerful tools that can help you to quickly identify and control the exceptions, before they could create losses to your business and boost your profitability. It helps the users to analyze data directly from the source or from the extracted form with business intelligence precision.`,
        features: [
          'Blazing fast Business Intelligence service and application to analyze Large Databases, create awesome reports and share real-time dashboards.',
          'assureBI runs on the cloud as well as on your enterprise servers.'
        ]
      }
    },
    {
      id: 'arbutus',
      logo: '/images/products/arbutus.png',
      title: 'ARBUTUS',
      subtitle: 'Drive Your Analytics',
      content: {
        description: 'provides the best in audit software and data analysis technology. Since 2003, we have been innovating and delivering specialized data analysis technology to our users. Today, Arbutus offers auditors and business professionals the very best in data analysis technology. Arbutus Analyzer is the tool of choice for auditing, risk analysis, and compliance professionals. Arbutus Audit Analytics represents the very best in audit software and data analysis technology. Based on 25 years of software innovation and development, Analytics has been designed to meet the exacting standards that auditors demand.',
        features: [
          'Advanced data mining and visualization capabilities',
          'Seamless integration with existing data sources',
          'Custom reporting and dashboard solutions'
        ],
        testimonial: {
          quote: "We use your product and it works great. We'll be adding more to this automation process on the table, and I'd love to get training from your end.",
          author: "Mr. Mohandes Liem, Group IT Manager (Information Technology)",
          company: "A.A. Abunayyan Trading Company of Bahrain"
        },
        image: '/images/products/arbutus-analytics.jpg'
      }
    },
    {
      id: 'truOI',
      logo: '/images/products/truOI.png',
      title: 'truOI',
      subtitle: 'True Business Intelligence',
      content: {
        description: 'truOI delivers true business intelligence by transforming complex data into actionable insights.',
        features: [
          'Real-time data processing and analysis',
          'Intuitive visualization tools for better decision making',
          'Customizable alerts and notifications for critical metrics'
        ]
      }
    },
    {
      id: 'enInvoice',
      logo: '/images/products/enInvoice.png',
      title: 'enInvoice',
      content: {
        description: 'enInvoice is a comprehensive invoicing solution designed to streamline your billing processes.',
        features: [
          'Automated invoice generation and delivery',
          'Seamless integration with accounting systems',
          'Detailed reporting and analytics for financial oversight'
        ]
      }
    },
    {
      id: 'barnowl',
      logo: '/images/products/barnowl.png',
      title: 'BARNOWL',
      content: {
        description: 'BARNOWL is an advanced monitoring solution that keeps watch over your systems and processes.',
        features: [
          'Comprehensive system monitoring and alerting',
          'Predictive analytics to identify potential issues',
          'Detailed reporting and historical data analysis'
        ]
      }
    }
  ];

  // State to track the selected product
  const [selectedProduct, setSelectedProduct] = useState(products[0].id);
  
  // State to track if component is mounted
  const [isMounted, setIsMounted] = useState(false);

  // Refs to store references to title/logo elements
  const titleRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Get the currently selected product data
  const currentProduct = products.find(product => product.id === selectedProduct) || products[0];

  // Notify parent component when selected product changes
  useEffect(() => {
    if (onProductChange) {
      onProductChange(selectedProduct);
    }
  }, [selectedProduct, onProductChange]);

  // Set mounted state after initial render
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Ensure the indicator is positioned correctly on mount
  useEffect(() => {
    const selectedIndex = products.findIndex(product => product.id === selectedProduct);
    const titleElement = titleRefs.current[selectedIndex];
    if (titleElement) {
      titleElement.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-8xl">
        {/* Product logos with full width spread */}
        <div className="pl-1 md:pl-4 lg:pl-6 mb-2 overflow-x-auto">
          <div className="w-full relative min-w-[768px] md:min-w-0">
            {/* Horizontal line with selection indicator */}
            <div className="relative mb-10">
              <div className="flex justify-between items-end w-full px-0">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className={`cursor-pointer relative px-2 ${selectedProduct === product.id ? 'opacity-100' : 'opacity-100'}`}
                    onClick={() => setSelectedProduct(product.id)}
                    transition={{ duration: 0.3 }}
                    ref={el => {
                      // Properly type the ref callback to avoid TypeScript errors
                      titleRefs.current[index] = el;
                    }}
                  >
                    {/* Product logo */}
                    <div className="h-12 sm:h-14 md:h-16 flex items-center mb-3">
                      {product.id === 'assureBI' && (
                        <div className="flex items-center">
                          <Image src="/images/products/logos/logo1.png" alt="AssureBI Logo" width={150} height={150} />
                        </div>
                      )}
                      {product.id === 'arbutus' && (
                        <div className="flex items-center">
                          <Image src="/images/products/logos/logo2.webp" alt="Arbutus Logo" width={150} height={150} />
                        </div>
                      )}
                      {product.id === 'truOI' && (
                        <div className="flex items-center">
                          <Image src="/images/products/logos/logo3.png" alt="TruOI Logo" width={150} height={150} />
                        </div>
                      )}
                      {product.id === 'enInvoice' && (
                        <div className="flex items-center">
                          <Image src="/images/products/logos/logo4.png" alt="EnInvoice Logo" width={150} height={150} />
                        </div>
                      )}
                      {product.id === 'barnowl' && (
                        <div className="flex items-center">
                          <Image src="/images/products/logos/logo5.png" alt="Barnowl Logo" width={150} height={150} />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Horizontal line with selection indicator */}
              <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 relative">
                {/* Selection indicator on the horizontal line */}
                {products.map((product, index) => {
                  const titleElement = titleRefs.current[index];
                  if (!titleElement) return null;

                  // Get the width and position of the title element
                  const { offsetWidth, offsetLeft } = titleElement;

                  // Position style based on the title element's dimensions
                  const positionStyle = {
                    width: `${offsetWidth * 0.9}px`, // 90% of the title width
                    left: `${offsetLeft + offsetWidth * 0.05}px`, // Center the indicator
                  };

                  return (selectedProduct === product.id || (!isMounted && index === 0)) && (
                    <motion.div
                      key={`indicator-${product.id}`}
                      className="absolute h-[4px] bg-[#3A6B1B] top-[-2px]"
                      style={positionStyle}
                      layoutId="lineIndicator"
                      initial={{ opacity: 1, scaleX: 1 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Product content */}
        <div className="pl-1 md:pl-4 lg:pl-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProduct}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {currentProduct.id === 'assureBI' && <AssureBIComponent />}
              {currentProduct.id === 'arbutus' && <ArbutusComponent />}
              {currentProduct.id === 'enInvoice' && <EnInvoiceComponent />}
              {currentProduct.id === 'truOI' && <TruOIComponent />}
              {currentProduct.id === 'barnowl' && <BarnOwlComponent />}
              {currentProduct.id !== 'assureBI' &&
                currentProduct.id !== 'arbutus' &&
                currentProduct.id !== 'enInvoice' &&
                currentProduct.id !== 'barnowl' &&
                currentProduct.id !== 'truOI' && (
                  <GenericProductComponent
                    title={currentProduct.title}
                    description={currentProduct.content.description}
                    features={currentProduct.content.features}
                  />
                )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;