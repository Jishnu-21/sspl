'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

interface EventCardProps {
  title: string;
  date: string;
  year: string;
  venue: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, year, venue }) => {
  return (
    <div
      className="bg-white p-6 rounded-md shadow-md border-b-4 border-[#a4ce4e] transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col min-h-[220px]"
      data-aos="fade-up"
    >
      <h3 className="text-lg font-semibold mb-4 text-gray-900 leading-snug">{title}</h3>
      <div className="mb-2">
        <span className="text-green-700 font-bold">Date</span>
        <span className="ml-2 text-gray-800">{date}</span>
        <span className="ml-2 inline-block align-middle px-2 py-0.5 rounded bg-blue-700 text-white text-xs font-semibold">{year}</span>
      </div>
      <div>
        <span className="text-green-700 font-bold">Venue</span>
        <span className="ml-2 text-gray-800">{venue}</span>
      </div>
    </div>
  );
};

const conferenceEvents = [
  {
    title: 'Anti-Fraud Measures : Methodologies & Challenges',
    date: '19th & 20th December',
    year: '2013',
    venue: 'India Habitat Centre, New Delhi',
  },
  {
    title: 'Fraud Detection : Practical Approach',
    date: 'Friday, 31st August',
    year: '2012',
    venue: 'Rooftop, Hotel Trident, Nariman Point, Mumbai',
    slug: 'fraud-detection-2012',
  },
  {
    title: 'Risk Intelligence',
    date: 'Friday, 26th August',
    year: '2011',
    venue: 'Crystal Ballroom, The Lalit, New Delhi',
    slug: 'risk-intelligence-2011',
  },
  {
    title: 'Maintainability of Assurance',
    date: 'Wednesday, 22nd December',
    year: '2010',
    venue: 'Ball Room, The Hyatt Regency, Mumbai',
    slug: 'maintainability-of-assurance-2010',
  },
  {
    title: 'Gaining Audit Assurance : Continuous Audit Techniques with Technology Identifying Fraud in Turbulent Economic Times',
    date: 'Friday, 18th December',
    year: '2009',
    venue: 'Regal Room, The Lalit, New Delhi',
    slug: 'gaining-audit-assurance-2009',
  },
  {
    title: 'Transformation from Post Audit to Continuous Control Monitoring - Technology and Methodology',
    date: 'Thursday, 21st August',
    year: '2008',
    venue: 'Ball Room, The Hyatt Regency, Mumbai',
    slug: 'transformation-post-audit-2008',
  },
  {
    title: 'Assurance 2007',
    date: 'May, 23rd - 25th',
    year: '2007',
    venue: 'Ballroom, The Sheraton, New Delhi',
    slug: 'assurance-2007',
  },
  {
    title: 'APJ ACL Channel Partner Conference',
    date: 'September, 9th - 11th',
    year: '2007',
    venue: 'Bangkok, Thailand',
    slug: 'apj-acl-channel-partner-2007',
  },
];

const eveningTalks = [
  {
    title: 'Data and Application Integration in 2020',
    date: 'Tuesday 7th August',
    year: '2018',
    venue: 'Narmada Yamuna, Trident Hotel, Gurgaon',
    slug: 'data-application-integration-2018',
  },
  {
    title: 'Use of Technology for Audits',
    date: 'Friday, 11th May',
    year: '2012',
    venue: 'The Lotus Room, Hotel Crowne Plaza, Gurgaon',
  },
  {
    title: 'Use of Technology for Audits',
    date: 'Friday, 25th February',
    year: '2011',
    venue: 'Hotel Hyatt Regency, Mumbai',
  },
];

const EventsGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className="py-16 px-2 sm:px-4 md:px-8 lg:px-16 max-w-7xl mx-auto ">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-4">Conference</h2>
      <div className="mt-12 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
        {conferenceEvents.map((event, index) => (
          event.slug ? (
            <Link key={event.slug} href={`/events/${event.slug}`} className="block">
              <EventCard 
                title={event.title}
                date={event.date}
                year={event.year}
                venue={event.venue}
              />
            </Link>
          ) : (
            <div key={event.title + event.date} className="block cursor-default">
              <EventCard 
                title={event.title}
                date={event.date}
                year={event.year}
                venue={event.venue}
              />
            </div>
          )
        ))}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mt-16 mb-6">Evening talk</h2>
      <div className="mt-8 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
        {eveningTalks.map((event, index) => (
          event.slug ? (
            <Link key={event.slug} href={`/events/${event.slug}`} className="block">
              <EventCard 
                title={event.title}
                date={event.date}
                year={event.year}
                venue={event.venue}
              />
            </Link>
          ) : (
            <div key={event.title + event.date} className="block cursor-default opacity-70">
              <EventCard 
                title={event.title}
                date={event.date}
                year={event.year}
                venue={event.venue}
              />
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default EventsGrid;
