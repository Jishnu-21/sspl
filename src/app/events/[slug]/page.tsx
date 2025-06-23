import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ShortPageBanner from '@/app/components/ShortPageBanner';

// Event content data structure
const eventDetails: Record<string, {
  main: {
    title: string;
    focusTitle: string;
    focus: string;
    topicsTitle: string;
    topics: string[];
    speakersTitle: string;
    speakers: string[];
  };
  sidebar: {
    speakerProfile: string;
    feedback: string;
    advisorBoard: { role: string; name: string; details: string }[];
    coOrganiser: { name: string; logo: string };
    sponsors: { name: string; logo: string }[];
    institutionalSupporter?: { name: string; logo: string };
  };
}> = {
  'fraud-detection-2012': {
    main: {
      title: 'Assurance 2012 : Fraud Management: Practical Approach',
      focusTitle: 'Conference Focus',
      focus: `The fraud management field has grown exponentially in India and has in fact been given new weight within organisations. The title of the fraud manager has become increasingly essential in the corporation and with this, progressively more taxing on the individuals in this function. Fraud encompasses departments throughout the entire company and the management department need to keep their fingers on the pulse of everything in the company including, but our conference is limited to; IT risks, financial risks as well as safety and physical risks. This high-level and increasingly demanding task needs to be performed with expert meticulousness and diligence while observing and complying with relevant regulations and legislations surrounding fraud management and corporate governance. Attending this event we shall provide you with an opportunity of hearing first hand from high-level experts in the risk and fraud management industry how they go about managing and mitigating all kinds of risks in their companies and organisations. Each session will offer a unique and hard-hitting case study of how these specific risk scenarios are successfully managed in their organisation. The one day event will take structured and carefully ordered sessions through the fraud life cycle, delving into each challenge met by you, as a risk and fraud professional. So, do not miss out on this event, your organisation counts on it! to be held on 31st August 2012, Rooftop, Hotel Trident, Nariman Point, Mumbai.</b>`,
      topicsTitle: 'Key Conference Topic',
      topics: [
        'Fraud Awareness, Prevention, & Deterrence: Are We Doing Enough?',
        'Emerging Trends and Issues: Case Study',
        'The importance of auditing in Anti-Fraud World',
        'Technology that you can use against: Those who use technology to tackle frauds : Case Study',
        'Legal and Ethics : The Letter and Spirit of Laws.'
      ],
      speakersTitle: 'Eminent Speaker',
      speakers: [
        '<b>Dr. Nanda Gopal</b>, <i>Managing Director, Indiafirst Life Insurance.</i>',
        '<b>Mr. Amarjit Chopra</b>, <i>ex-President ICAI.</i>',
        '<b>Mr. S. Bhaskar</b>, <i>President, IIA Bombay Chapter.</i>',
        '<b>Mr. Uday Khanna</b>, <i>President, Bombay Chamber of Commerce & Industry (Also Chairman of Lafarge India, Bata India).</i>',
        '<b>Mr. P. R. Ramesh</b>, <i>Chairman, Deloitte Haskins & Sells.</i>',
        '<b>Mr. P. N. Sharma</b>, <i>Director (Finance), Sir Ganga Ram Hospital.</i>',
        '<b>Mr. Deepak Wadhawan</b>, <i>Director, All India Heart Foundation.</i>',
        '<b>Mr. Sunder Krishnan</b>, <i>EVP and Chief Risk Officer, Reliance Life Insurance.</i>',
        '<b>Mr. Aneel J. Gambhir</b>, <i>Sr. Vice President – Internal Audit, Blue Dart Limited.</i>',
        '<b>Mr. Kallol Kundu</b>, <i>Chief Internal Auditor, The Oberoi Group.</i>',
        '<b>Mr. Satish Warrier</b>, <i>Chief Information Security Officer, Godrej Industries Ltd.</i>',
        '<b>Mr. V. Sriram</b>, <i>Vice President and Head – Internal Audit, Bajaj Allianz Life Insurance.</i>',
        '<b>Mr. Satish Shenoy</b>, <i>ead – Corporate Audit Services, Powai Larsen & Toubro Limited.</i>',
        '<b>Mr. Mr. Sandip Roy</b>, <i> Protector of Emigrants, Ministry of Overseas Indian Affairs..</i>',
        '<b>Mr. Mukesh Arya</b>, <i>ex-Director, Internal Oversight Services, UN Agency (UNRWA).</i>',
        '<b>Dr. K. Subramanian</b>, <i> ex-IT Advisor, CAG of India.</i>',
        '<b>Mr. Rohit Mahajan,</b>, <i>Partner, KPMG.</i>',
        '<b>Mr. Sarabjeet Singh</b>, <i>Partner, BMR Advisors.</i>',
        '<b>Mr. Thomas Karithanam</b>, <i>Senior Advisor-Risk Consulting, Forensic Services, KPMG.</i>',
        '<b>Mr. Kunal Vajani</b>, <i> Partner, Wadia Ghandy & C0., Advocates, Solicitors and Notaries.</i>',
        '<b>Mr. S. N. Ravichandran</b>, <i>Managing Director, Nilgiris Chemical Stoneware Co. (P) Ltd.</i>',
      ]
    },
    sidebar: {
      speakerProfile: 'Speaker profile content for Fraud Management 2012.',
      feedback: 'Feedback section for Fraud Management 2012.',
      advisorBoard: [
        { role: 'Chairman', name: 'Mr. Deepak Wadhawan', details: 'FCA, CPA, CIA' },
        { role: 'Member', name: 'Mr. Amarjit Chopra', details: 'ex-President - ICAI' },
        { role: 'Member', name: 'Mr. Aneel J. Gambhir', details: 'Sr. VP - Internal Audit, BlueDart Limited' },
        { role: 'Member', name: 'Mr. P.N. Sharama', details: 'President - eISSA' },
        { role: 'Member', name: 'Dr. K. Subramanian', details: 'Emeritus President - eISSA' }
      ],
      coOrganiser: { name: 'eISSA', logo: '/images/logos/1.svg' },
      sponsors: [
        { name: 'Central Bank of India', logo: '/images/logos/2.svg' },
      ]
    }
  },
  'risk-intelligence-2011': {
    main: {
      title: 'Assurance 2011 : Risk Intelligence',
      focusTitle: 'Conference Focus',
      focus: `The risk management field has grown exponentially in India and has in fact been given new weight within organisations. The title of the risk manager has become increasingly essential in the corporation and with this, progressively more taxing on the individuals in this function. Risk encompasses departments throughout the entire company and the risk management department need to keep their fingers on the pulse of everything in the company including, but limited to; IT risks, financial risks as well as safety and physical risks. This high-level and increasingly demanding task needs to be performed with expert meticulousness and diligence while observing and complying with relevant regulations and legislations surrounding risk management and corporate governance. Risk professionals have indeed got a lot on their plate. Creating risk frameworks together with planning a strategy of dealing with risk is at the forefront of the risk management process. In order to thoroughly manage risk, the department will have to do a thorough analysis of the company and measure and classify the types of risks face by the organisation. From there, each specific risk within each department needs to be proficiently managed. These include IT risks such as the protection of vital company data as well as managing those online risks faced by the company on a daily basis. So, do not miss out on this event, your organisation counts on it! to be held on 26th August 2011, New Delhi.`,
      topicsTitle: 'Key Conference Topics',
      topics: [
        'CaptionIdentifying preventative practices within your organisation to control potential risks that will affect your company',
        'CaptionDetermining the steps and processes to be included in compiling a risk management framework in order to have a comprehensive risk agenda',
        'CaptionIllustrating the various aspects of risk and how these will positively affect your organisations risk management efforts',
        'CaptionDebating the need for more stringent and compulsory national legislation to be implemented within your company to improve risk management and business intelligence.',
      ],
      speakersTitle: 'Eminent Speakers',
      speakers: [
        '<b>Mr. Amarjit Chopra</b>, <i>ex-President ICAI.</i>',
        '<b>Mr. A. B. L. Srivastava</b>, <i>Chairman and Managing Director, National Hydro Power Limited.</i>',
        '<b>Ms. Neeru Abrol</b>, <i>Director (Finance), National Fertilizers Limited.</i>',
        '<b>Dr. Sanjeev Mishra</b>, <i>Chief Controller of Accounts, Ministry of Home Affairs, Government of India.</i>',
        '<b>Mr. Nalin Srivastava</b>, <i>Controller of Accounts, Ministry of Home Affairs, Government of India.</i>',
        '<b>Mr. P. N. Sharma</b>, <i>Director (Finance), Sir Ganga Ram Hospital.</i>',
        '<b>Mr. Ravi Pani</b>, <i>Director and CFO, C1 India.</i>',
        '<b>Mr. R. R. Girish Kumar</b>, <i>Group Head (Ethics & Intelligence), GMR Group.</i>',
        '<b>Mr. Mukesh Arya</b>, <i>Managing Director and CEO, Red Flag.</i>',
        '<b>Mr. Sanjay Kotha</b>, <i>Group Vice President – IT, Wal-Mart India.</i>',
        '<b>Mr. K. P. Ganesh</b>, <i>Chief Information Officer, S Tel India.</i>',
        '<b>Mr. Kallol Kundu</b>, <i>Chief Internal Auditor, EIH Limited.</i>',
        '<b>Mr. Sanjay Mehta</b>, <i>Partner, BMR Advisors.</i>',
        '<b>Dr. K. Subramanian</b>, <i>Director (Advanced Studies), IGNOU.</i>',
        '<b>Dr. J. K. Goyal</b>, <i>Director, Jagan Institute of Management Studies.</i>',
        '<b>Mr. Asfar Khan</b>, <i>Head – Operation Services, Wal-Mart India.</i>',
        '<b>Mr. Shreenivas Samarth</b>, <i>Head – Revenue Assurance, S Tel India.</i>'
      ]
    },
    sidebar: {
      speakerProfile: '',
      feedback: '',
      advisorBoard: [],
      coOrganiser: { name: '', logo: '' },
      sponsors: []
    }
  },
  'maintainability-of-assurance-2010': {
    main: {
      title: 'Assurance 2010 : Maintainability of Assurance',
      focusTitle: 'Conference Focus',
      focus: `In continuation of its effort to share professional knowledge and Industry Best possible experiences, Substratal Solutions Private Limited (SSPL), is pleased to organize its annual event Assurance 2010, to be held on Wednesday 22nd December 2010, at the Hyatt Regency, Mumbai. The theme of this year conference is Maintainability of Assurance, which is now a major challenge for the Industry, post spending huge amount on solutions and services. One time effort has surely given valuable results and inputs to the industry as a whole, the challenge is how to maintain the desired level of assurance, with constantly, changing business environment and technology. A unique event held every year which aims at providing customer centric solutions on Business Assurance and Risk Management, expert insight and peer exchange.Event highlights include inspirational keynote presentations, Case – study's, Panel Discussion on the current issues in the industry, hands-on product interface with latest in industry as well as peer networking sessions.`,
      topicsTitle: 'Key Conference Topic',
      topics: [
        'Operations Reporting – Compensating Control for Audit Risk and New Dimensions to the Technology Risk in the Banking and Financial Sector',
        'Achieving Compliance in e-System',
        'Fraud: Can we eradicate or have to live with it? and Audit Solutions Demo.',
        'Panel Discussion: Whether Internal Audit needs to be outsourced: Time to Ponder!'
      ],
      speakersTitle: 'Eminent Speaker',
      speakers: [
        '<b>Mr. Senthilvel. K</b>, <i>Executive Director, Axis Risk Consulting.</i>',
        '<b>Mr. D. P. Dube</b>, <i>Executive Director, Paladiaon Networks Ltd.</i>',
        '<b>Dr. K. Subramanian</b>, <i>Director, IGNOU.</i>',
        '<b>Mr. Shashank Karnard</b>, <i>Director, Fraud and Compliance, KPMG</i>',
        '<b>Mr. Niraj Ruparel</b>, <i>Chairman, Deloitte Haskins & Sells.</i>',
        '<b>Mr. V. Swaminathan</b>, <i>Chief Internal Auditor, Godrej Industries Ltd.</i>',
        '<b>Mr. Sunder Krishnan</b>, <i>Chief Risk Officer, Reliance Life Insurance Company Ltd.</i>',
        '<b>Mr. Sanjay K. Mathur</b>, <i>Head Internal Audit, Reliance Communications Limited.</i>',
        '<b>Mr. V. Sriram</b>, <i>Head Internal Audit, Bajaj Allianz Life Insurance Co. Ltd.</i>',
        '<b>Mr. Aneel Gambhir</b>, <i>Senior Vice President - Internal Audit, Blue Dart Express.</i>',
        '<b>Mr. Haresh Dua</b>, <i>Vice President - Internal Audit, JSW Steel Ltd.</i>',
        '<b>Mr. Anil Bhandari</b>, <i>Vice President, IIA India.</i>',
        '<b>Mr. Nishith Seth</b>, <i>Managing Director, SSPL.</i>'
      ]
    },
    sidebar: {
      speakerProfile: '',
      feedback: '',
      advisorBoard: [],
      coOrganiser: { name: '', logo: '' },
      sponsors: [],
      institutionalSupporter: { name: 'Institutional Supporter', logo: '/images/logos/2.svg' }
    }
  },
};

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = eventDetails[params.slug];

  if (!event) {
    notFound();
  }

  return (
    <main className="flex flex-col bg-white min-h-screen">
      <Header />
      <ShortPageBanner
        backgroundImage="/images/events.webp"
        title="Events"
        subtitle="Get information about current & upcoming events"
      />

      <div className="max-w-[1600px] mx-auto w-full py-16 px-4 flex flex-col md:flex-row gap-8">
        {/* Main Content (left) */}
        <section className="md:w-2/3 w-full order-1 md:order-none">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-light mb-6 text-green-700">{event.main.title}</h1>
            <h2 className="text-2xl font-bold text-green-700 mb-2">{event.main.focusTitle}</h2>
            <p className="mb-6 text-gray-700" dangerouslySetInnerHTML={{ __html: event.main.focus }} />
            <h2 className="text-2xl font-bold text-green-700 mb-2">{event.main.topicsTitle}</h2>
            <ul className="mb-6 list-disc pl-6 text-gray-700">
              {event.main.topics.map((topic: string, idx: number) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: topic }} />
              ))}
            </ul>
            <h2 className="text-2xl font-bold text-green-700 mb-2">{event.main.speakersTitle}</h2>
            <ul className="mb-6 list-disc pl-6 text-gray-700">
              {event.main.speakers.map((speaker: string, idx: number) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: speaker }} />
              ))}
            </ul>
            <Link href="/events" className="mt-8 inline-block text-blue-600 hover:underline">&larr; Back to Events</Link>
          </div>
        </section>

        {/* Sidebar (right) */}
        <aside className="md:w-1/3 w-full order-0 md:order-none space-y-6">
          {params.slug === 'risk-intelligence-2011' ? (
            <div className="bg-[#f5f5f5] rounded-lg p-0">
              <div className="border-b border-[#e0e0e0]">
                <div className="p-4 pl-6 font-semibold text-gray-700 border-l-4 border-green-500 bg-white rounded-t-lg">SESSION DETAILS</div>
              </div>
              <div className="p-6">
                <h3 className="text-green-700 font-bold text-lg mb-4">Educational Partner</h3>
                <img src="/images/logos/jims.png" alt="JIMS" className="w-32 h-16 object-contain bg-white" />
              </div>
            </div>
          ) : params.slug === 'maintainability-of-assurance-2010' ? (
            <div className="bg-[#f5f5f5] rounded-lg p-0">
              <div className="border-b border-[#e0e0e0]">
                <div className="p-4 pl-6 font-semibold text-gray-700 border-l-4 border-green-500 bg-white rounded-t-lg">SESSION DETAILS</div>
              </div>
              <div className="p-6">
                <h3 className="text-green-700 font-bold text-lg mb-4">Institutional Supporter</h3>
                <img src="/images/logos/2.svg" alt="Institutional Supporter" className="w-32 h-16 object-contain bg-white" />
              </div>
            </div>
          ) : (
            <>
              {/* Tabs */}
              <div className="space-y-2">
                <div className="bg-white rounded shadow p-3 border-l-4 border-green-500 font-semibold text-gray-700">SPEAKER PROFILE</div>
                <div className="bg-white rounded shadow p-3 border-l-4 border-green-500 font-semibold text-gray-700">FEEDBACK</div>
              </div>
              {/* Conference Advisor Board */}
              {event.sidebar.advisorBoard.length > 0 && (
                <section className="bg-white rounded-lg shadow p-4">
                  <h2 className="text-lg font-bold text-green-700 mb-4">Conference Advisor Board</h2>
                  {event.sidebar.advisorBoard.map((member: { role: string; name: string; details: string }, idx: number) => (
                    <div key={idx} className="mb-2 flex">
                      <span className="font-semibold w-28 text-black">{member.role}</span>
                      <span className="text-gray-700">: {member.name}<br/><span className='text-xs'>{member.details}</span></span>
                    </div>
                  ))}
                </section>
              )}
              {/* Co-Organiser and Sponsors */}
              {(event.sidebar.coOrganiser.logo || (event.sidebar.sponsors && event.sidebar.sponsors.length > 0)) && (
                <section className="bg-white rounded-lg shadow p-4">
                  {event.sidebar.coOrganiser.logo && (
                    <div className="mb-4">
                      <h3 className="text-green-700 font-bold text-lg mb-2">Co-Organiser</h3>
                      <img src={event.sidebar.coOrganiser.logo} alt={event.sidebar.coOrganiser.name} className="w-28 h-12 object-contain bg-white mb-2" />
                    </div>
                  )}
                  {event.sidebar.sponsors && event.sidebar.sponsors.length > 0 && (
                    <div className="mb-4">
                      <h3 className="text-green-700 font-bold text-lg mb-2">Sponsors</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {event.sidebar.sponsors.map((s: { name: string; logo: string }, idx: number) => (
                          <img key={idx} src={s.logo} alt={s.name} className="w-28 h-12 object-contain bg-white" />
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              )}
              {/* Institutional Supporter */}
              {event.sidebar.institutionalSupporter && (
                <section className="bg-white rounded-lg shadow p-4">
                  <h2 className="text-lg font-bold text-green-700 mb-4">Institutional Supporter</h2>
                  <div className="flex items-center">
                    <img src={event.sidebar.institutionalSupporter.logo} alt={event.sidebar.institutionalSupporter.name} className="w-28 h-12 object-contain bg-white mr-4" />
                    <span className="text-gray-700">{event.sidebar.institutionalSupporter.name}</span>
                  </div>
                </section>
              )}
            </>
          )}
        </aside>
      </div>
      <Footer />
    </main>
  );
} 