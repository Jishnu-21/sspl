'use client';

import Header from '../Header'
import AboutBanner from './AboutBanner'
import AboutContent from './AboutContent'
import TeamSection from './TeamSection'
import LifeAtSSPL from './LifeAtSSPL'
import ContactSection from './ContactSection'
import Footer from '../Footer';

const teamMembers = [
  {
    name: 'John Smith',
    designation: 'CEO & Founder',
    image: '/images/about/team/1.png',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    name: 'Sarah Wilson',
    designation: 'CTO',
    image: '/images/about/team/2.png',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Emily Chen',
    designation: 'Head of Analytics',
    image: '/images/about/team/3.png',
    socials: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    name: 'Michael Brown',
    designation: 'Lead Data Scientist',
    image: '/images/about/team/4.png',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  }
];

export default function About() {
  return (
    <>
      <Header/>
      <AboutBanner />
      <AboutContent />
      <TeamSection members={teamMembers} title="Meet Our Leaders" />
      <TeamSection members={teamMembers} title="Our Team" />
      <LifeAtSSPL />
      <ContactSection />
      <Footer/>
    </>
  )
}