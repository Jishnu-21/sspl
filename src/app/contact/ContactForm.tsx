import React from 'react';
import Head from 'next/head';

const ContactForm = () => {
  return (
    <div className="bg-white pt-16">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex font-comfortaa">
        <div className="w-[80px] relative">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200 ml-[480px]"></div>
          <div className="absolute left-0 top-8 w-[3px] h-6 bg-gray-800 ml-8"></div>
          <div className="pl-12 pt-8">
            <button className="text-gray-700 text-sm hover:text-blue-600 transition-colors whitespace-nowrap">
              Discuss the project
            </button>
          </div>
        </div>
        <div className="flex-1 pl-[600px] pr-16 py-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl text-gray-900 font-bold mb-3">GET IN TOUCH WITH US</h1>
            <p className="text-gray-500 text-base mb-12">
              Get in touch with us by filling the form given below. We will get back to you at the earliest.
            </p>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-gray-300 shadow-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-gray-300 shadow-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-gray-300 shadow-sm"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-gray-300 shadow-sm"
                />
              </div>
              <input
                type="text"
                placeholder="Organisation"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-gray-300 shadow-sm"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-gray-300 shadow-sm resize-none"
              />
              <button
                type="submit"
                className="bg-transparent text-blue-600 text-xs font-medium py-2 px-5 rounded border border-blue-600 hover:bg-white hover:shadow-sm transition-all"
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