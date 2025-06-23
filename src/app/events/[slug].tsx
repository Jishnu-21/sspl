import React from 'react';
import { useRouter } from 'next/router';
import Header from '../Header';
import Footer from '../Footer';

// Event data (should match EventsGrid)
const conferenceEvents = [
  {
    title: 'Anti-Fraud Measures : Methodologies & Challenges',
    date: '19th & 20th December',
    year: '2013',
    venue: 'India Habitat Centre, New Delhi',
    slug: 'anti-fraud-measures-2013',
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
    slug: 'technology-for-audits-2012-gurgaon',
  },
  {
    title: 'Use of Technology for Audits',
    date: 'Friday, 25th February',
    year: '2011',
    venue: 'Hotel Hyatt Regency, Mumbai',
    slug: 'technology-for-audits-2011-mumbai',
  },
];

const allEvents = [...conferenceEvents, ...eveningTalks];

const EventDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const event = allEvents.find(e => e.slug === slug);

  return (
    <main className="flex flex-col bg-white min-h-screen">
      <Header />
      <div className="max-w-2xl mx-auto py-16 px-4">
        {event ? (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4 text-green-800">{event.title}</h1>
            <div className="mb-2">
              <span className="text-green-700 font-bold">Date:</span>
              <span className="ml-2 text-gray-800">{event.date}</span>
              <span className="ml-2 inline-block align-middle px-2 py-0.5 rounded bg-blue-700 text-white text-xs font-semibold">{event.year}</span>
            </div>
            <div className="mb-2">
              <span className="text-green-700 font-bold">Venue:</span>
              <span className="ml-2 text-gray-800">{event.venue}</span>
            </div>
            {/* Add more event details here if available */}
            <button onClick={() => router.push('/events')} className="mt-8 text-blue-600 hover:underline">&larr; Back to Events</button>
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Event not found</h2>
            <button onClick={() => router.push('/events')} className="text-blue-600 hover:underline">&larr; Back to Events</button>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default EventDetailPage; 