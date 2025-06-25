// src/app/events/data-integration-2020.tsx
'use client'


import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ShortPageBanner from '@/app/components/ShortPageBanner';
import Header from "@/app/Header";
import Footer from "@/app/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DataIntegration2020() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="flex flex-col bg-white min-h-screen">
      <Header/>

    <div className="w-full bg-white min-h-screen">
      <ShortPageBanner
        backgroundImage="/images/events.webp"
        title="Events"
        subtitle="Get information about current & upcoming events"
      />
      <div data-aos="fade-up">
        <div className="max-w-8xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-8">
          {/* Left/Main Content */}
          <div className="md:w-2/3 w-full">
            <h1 className="text-3xl font-bold text-lime-600 mb-2">Event Talk</h1>
            <h2 className="text-2xl font-light text-lime-600 mb-6">Data and Application Integration in 2020</h2>
            <p className="mb-6 text-gray-700 text-lg">
              The Evening Talk, is being organised to bring the latest solution and industry closer to each other, to hear out what the user wants. Post massive technological advancements, there is still a hunger to mature the technology, to make the systems, efficient, predictive, robotic to support the ongoing Digitalisation. In this direction, Stambia and SSPL has collaborated to mature the business solutions both from the Backend to Frontend, hence providing the user, hassle-free and dynamic analytics for matured and advance monitoring and control.
            </p>
            <h3 className="text-xl font-bold text-lime-600 mb-2">The Evening Talk shall be sharing the thoughts on the below topics of interest</h3>
            <ul className="list-disc ml-8 mb-6 text-gray-800">
              <li>Evolution of the Information Systems during the last 10 years.</li>
              <li>Data Integration market trends.</li>
              <li>How should a Data Integration solution look like today?</li>
              <li>Build the right answer to Data Integration needs.</li>
            </ul>
            <h3 className="text-xl font-bold text-lime-600 mb-4">Speakers Profile</h3>

            {/* Speaker 1: Image left, text right */}
            <div className="mb-12 flex flex-col md:flex-row items-center md:items-center gap-6" data-aos="fade-up">
              <div className="flex-shrink-0">
                <Image src="/images/events/nishith-seth.jpg" alt="Nishith Seth" width={280} height={280} className="rounded" />
              </div>
              <div className="flex-1">
                <strong className="block text-xl text-gray-900 mb-2">Mr. Nishith Seth, MD - Substratal Solutions P. Ltd. (SSPL)</strong>
                <p className="text-gray-700 text-base">
                  MD, Substratal Solutions P. Ltd. An experienced professional in the field of audit, fraud management and compliance management. Has been in the field for last more than 25 years and was Convener of Forensic Working Group of India to formulate Forensic Standards on Fraud Detection and Management. He represented India at ISO (International Standards Organisation) as a Voting Member and was also special invitee to Inter Ministerial Committee on Cyber Education and Awareness.
                </p>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            {/* Speaker 2: Text left, image right */}
            <div className="mb-8 flex flex-col md:flex-row items-center md:items-start gap-6" data-aos="fade-up" data-aos-delay="100">
              <div className="flex-1 order-2 md:order-1">
                <strong className="block text-xl text-gray-900 mb-2">Mr. Fabien Bruder, CEO - Stambia</strong>
                <p className="text-gray-700 text-base">
                  CEO, Stambia. He is a computer engineer, specialized in artificial intelligence, and also has a master's degree in Business Administration. After 10 years of expertise in data integration as consultant and technical director, including at Oracle, he worked with his team to bring to the market a new generation data integration solution. Stambia is the result of an innovation, based on a clear and powerful vision of the market as well as a deep understanding of real customer needs.
                </p>
              </div>
              <div className="flex-shrink-0 order-1 md:order-2">
                <Image src="/images/events/mr-fabien-bruder.jpg" alt="Fabien Bruder" width={280} height={280} className="rounded" />
              </div>
            </div>
            <Link href="/events" className="mt-12 inline-block text-blue-600 hover:underline text-lg font-medium">← Back to Events</Link>
          </div>
          {/* Right/Sidebar */}
          <aside className="md:w-1/3 w-full space-y-8">
            {/* Supported by */}
            <div>
              <h4 className="font-bold text-lime-600 mb-2">Supported by</h4>
              <div className="flex gap-4 items-center">
                <Image src="/images/events/stambia.jpg" alt="Stambia" width={120} height={60} />
                <Image src="/images/logos/logo.png" alt="SSPL" width={120} height={60} />
              </div>
            </div>
            {/* Glimpses */}
            <div>
              <h4 className="font-bold text-lime-600 mb-2">Glimpses</h4>
              <div className="h-[464px] overflow-y-auto flex flex-col gap-4 pr-2">
                <Image src="/images/about/life/1.jpeg" alt="Glimpse 1" width={360} height={220} className="rounded" />
                <Image src="/images/about/life/2.jpeg" alt="Glimpse 2" width={360} height={220} className="rounded" />
                <Image src="/images/about/life/3.jpeg" alt="Glimpse 1" width={360} height={220} className="rounded" />
                <Image src="/images/about/life/4.jpeg" alt="Glimpse 2" width={360} height={220} className="rounded" />
                <Image src="/images/about/life/5.jpeg" alt="Glimpse 1" width={360} height={220} className="rounded" />
                <Image src="/images/about/life/6.jpeg" alt="Glimpse 2" width={360} height={220} className="rounded" />
                {/* Add more images as needed */}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer/>
    </div>
    </main>
  );
}