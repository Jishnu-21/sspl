'use client';

import Header from '../Header'
import AboutBanner from './AboutBanner'
import AboutContent from './AboutContent'
import TeamSection from './TeamSection'
import LifeAtSSPL from './LifeAtSSPL'
import ContactSection from './ContactSection'
import Footer from '../Footer';
import VisionSection from './components/VisionSection';

const teamMembers = [
  {
    name: 'Nishith Seth',
    designation: 'CEO & Founder',
    image: '/images/about/team/4.png',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    name: 'Mukesh Arya',
    designation: 'CTO',
    image: '/images/about/team/1.png',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Sujnesh',
    designation: 'Head of Analytics',
    image: '/images/about/team/5.png',
    socials: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    name: 'Nikki Arya',
    designation: 'Lead Data Scientist',
    image: '/images/about/team/3.png',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Harshita Chadha',
    designation: 'Lead Data Scientist',
    image: '/images/about/team/2.png',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
];

export default function About() {
  return (
    <>
          <main className="flex flex-col bg-white min-h-screen">
      <Header/>
      <AboutBanner/>
      <AboutContent />
     
      <TeamSection members={teamMembers} title="Meet Our Leaders" />
      <LifeAtSSPL />
      <ContactSection />
      <Footer/>
      </main>
    </>
  )
}