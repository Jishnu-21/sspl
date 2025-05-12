export interface MajorTestimonial {
  id: number;
  company: string;
  logo: string;
  text: string;
  author: string;
  position: string;
}

export interface MinorTestimonial {
  id: number;
  company: string;
  logo: string;
  text: string;
  author: string;
  position: string;
}

export const majorClients: MajorTestimonial[] = [
  {
    id: 1,
    company: 'HSBC',
    logo: '/images/testimonials/hsbc-logo.png',
    text: 'We have utilized the services of SSPL to carefully analyze our project implementation. We found them to be thorough and very professional. We are pleased with the way they have been working with us and we look forward to a long-term relationship with them. The team is quick to respond to our queries and has been very supportive of our needs.',
    author: 'Sarah Johnson',
    position: 'CIO, HSBC'
  },
  {
    id: 2,
    company: 'HSBC',
    logo: '/images/testimonials/hsbc-logo.png',
    text: 'We have utilized the services of SSPL to carefully analyze our project implementation. We found them to be thorough and very professional. We are pleased with the way they have been working with us and we look forward to a long-term relationship with them. The team is quick to respond to our queries and has been very supportive of our needs.',
    author: 'Michael Brown',
    position: 'Head of IT, HSBC'
  },
  {
    id: 3,
    company: 'HSBC',
    logo: '/images/testimonials/hsbc-logo.png',
    text: 'We have utilized the services of SSPL to carefully analyze our project implementation. We found them to be thorough and very professional. We are pleased with the way they have been working with us and we look forward to a long-term relationship with them. The team is quick to respond to our queries and has been very supportive of our needs.',
    author: 'David Wilson',
    position: 'Director of Operations, HSBC'
  }
];

export const minorClients: MinorTestimonial[] = [
  {
    id: 1,
    company: 'Client',
    logo: '/images/testimonials/client-logo.png',
    text: 'Working with SSPL to handle our data analytics has been a great choice for our business. SSPL has been instrumental in helping us understand our data and make informed decisions. Their expertise, combined with their responsive service, has made them an invaluable partner. They consistently focus on delivering solutions that meet our specific needs.',
    author: 'Emma Thompson',
    position: 'CEO'
  },
  {
    id: 2,
    company: 'Client',
    logo: '/images/testimonials/client-logo.png',
    text: 'Working with SSPL to handle our data analytics has been a great choice for our business. SSPL has been instrumental in helping us understand our data and make informed decisions. Their expertise, combined with their responsive service, has made them an invaluable partner. They consistently focus on delivering solutions that meet our specific needs.',
    author: 'James Anderson',
    position: 'CTO'
  },
  {
    id: 3,
    company: 'Client',
    logo: '/images/testimonials/client-logo.png',
    text: 'Working with SSPL to handle our data analytics has been a great choice for our business. SSPL has been instrumental in helping us understand our data and make informed decisions. Their expertise, combined with their responsive service, has made them an invaluable partner. They consistently focus on delivering solutions that meet our specific needs.',
    author: 'Sophie Miller',
    position: 'Head of Analytics'
  },
  {
    id: 4,
    company: 'Client',
    logo: '/images/testimonials/client-logo.png',
    text: 'Working with SSPL to handle our data analytics has been a great choice for our business. SSPL has been instrumental in helping us understand our data and make informed decisions. Their expertise, combined with their responsive service, has made them an invaluable partner. They consistently focus on delivering solutions that meet our specific needs.',
    author: 'Robert Clark',
    position: 'Director of Technology'
  }
];
