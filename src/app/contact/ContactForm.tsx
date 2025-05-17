import React from 'react';
import Head from 'next/head';
import './contact-form.css'; // Import custom CSS for placeholder styling

const ContactForm = () => {
  return (
    <div className="bg-white pt-8 md:pt-16">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col md:flex-row font-comfortaa">
        {/* Left sidebar - hidden on mobile, visible on md and up */}
        <div className="hidden md:block w-[80px] relative">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200 ml-[480px]"></div>
          <div className="absolute left-0 top-8 w-[3px] h-6 bg-gray-800 ml-8"></div>
          <div className="pl-12 pt-8">
            <button className="text-gray-700 text-sm hover:text-blue-600 transition-colors whitespace-nowrap">
              Discuss the project
            </button>
          </div>
        </div>
        
        {/* Mobile title - visible only on mobile */}
        <div className="block md:hidden px-6 py-4">
          <h2 className="text-gray-700 text-lg font-medium">Discuss the project</h2>
          <div className="w-12 h-[2px] bg-gray-800 mt-2"></div>
        </div>
        
        {/* Main content */}
        <div className="flex-1 px-6 md:px-0 md:pl-[600px] md:pr-16 py-6 md:py-12">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-bold mb-3">GET IN TOUCH WITH US</h1>
            <p className="text-gray-500 text-sm md:text-base mb-8 md:mb-12">
              Get in touch with us by filling the form given below. We will get back to you at the earliest.
            </p>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-gray-300 shadow-sm placeholder-black text-black"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-gray-300 shadow-sm placeholder-black text-black"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-gray-300 shadow-sm placeholder-black text-black"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-gray-300 shadow-sm placeholder-black text-black"
                />
              </div>
              <input
                type="text"
                placeholder="Organisation"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-gray-300 shadow-sm placeholder-black text-black"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-gray-300 shadow-sm resize-none placeholder-black text-black"
              />
              <button
                type="submit"
                className="bg-transparent text-[#366A00] text-xs font-medium py-2 px-5 rounded border border-[#366A00] hover:bg-[#366A00] hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;