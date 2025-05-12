import React from 'react';

interface EventCardProps {
  date: string;
  venue: string;
}

const EventCard: React.FC<EventCardProps> = ({ date, venue }) => {
  return (
    <div className="bg-gray-50 p-5 rounded-md shadow-sm hover:shadow-md transition-shadow text-black">
      <h3 className="text-lg font-semibold mb-3 text-black">Anti-Fraud Measures: Methodologies & Challenges</h3>
      <ul className="space-y-1 text-sm text-black">
        <li>• Date: {date}</li>
        <li>• Venue: {venue}</li>
        <li>• India Habitat Centre, New Delhi</li>
      </ul>
    </div>
  );
};

const EventsGrid = () => {
  const events = [
    { date: '19th & 20th December 2023', venue: 'Hall A' },
    { date: '19th & 20th December 2023', venue: 'Hall B' },
    { date: '19th & 20th December 2023', venue: 'Hall C' },
    { date: '19th & 20th December 2023', venue: 'Hall D' },
    { date: '19th & 20th December 2023', venue: 'Hall E' },
    { date: '19th & 20th December 2023', venue: 'Hall F' },
    { date: '19th & 20th December 2023', venue: 'Hall G' },
    { date: '19th & 20th December 2023', venue: 'Hall H' },
    { date: '19th & 20th December 2023', venue: 'Hall I' },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-4">Conference</h2>
      
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {events.map((event, index) => (
          <EventCard 
            key={index} 
            date={event.date} 
            venue={event.venue} 
          />
        ))}
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mt-20 mb-4">Conference</h2>
      
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.slice(0, 3).map((event, index) => (
          <EventCard 
            key={index} 
            date={event.date} 
            venue={event.venue} 
          />
        ))}
      </div>
    </section>
  );
};

export default EventsGrid;
