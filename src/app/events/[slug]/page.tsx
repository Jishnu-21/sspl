import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ShortPageBanner from '@/app/components/ShortPageBanner';
import AOSWrapper from '@/app/components/AOSWrapper';

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
      institutionalSupporter?: { name: string; logos: { name: string; logo: string }[] };
      customSidebar?: boolean;
      coSponsor?: { name: string; logo: string };
      institutionalSponsors?: { name: string; logo: string }[];
      knowledgePartners?: { name: string; logo: string }[];
      showOnlySessionDetails?: boolean;
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
        '<b>Mr. Sandeep Bhadkande</b>, <i>Head – Data Analysis Function, Siemens Corporate Finance Pvt. Ltd.</i>',
        '<b>Mr. Salil Krishnan</b>, <i>Senior Vice President – Inspection and Audit, Axis Bank.</i>',
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
      institutionalSupporter: {
        name: 'Institutional Supporters',
        logos: [
          { name: 'eISA', logo: '/images/logos/1.svg' },
          { name: 'IIA', logo: '/images/logos/5.svg' },
          { name: 'ACL', logo: '/images/logos/3.svg' },
          { name: 'Paladion', logo: '/images/logos/4.svg' }
        ]
      }
    }
  },
  'gaining-audit-assurance-2009': {
    main: {
      title: 'Assurance 2009',
      focusTitle: 'Conference Focus',
      focus: `With the growing importance and responsibility from all quarters, corporate are required to gear-up with technology to handle Assurance and generate confidence both internally and externally. SSPL is pleased to provide you an opportunity to be a part of the Grand Meet on Assurance to deliberate, share and know how the Industry Experts are handling the Challenges.`,
      topicsTitle: 'Key Conference Topic',
      topics: [
        'CaptionIdentifying preventative practices within your organisation to control potential risks that will affect your company',
        'CaptionDetermining the steps and processes to be included in compiling a risk management framework in order to have a comprehensive risk agenda',
        'CaptionIllustrating the various aspects of risk and how these will positively affect your organisations risk management efforts',
        'CaptionDebating the need for more stringent and compulsory national legislation to be implemented within your company to improve risk management and business intelligence.'
      ],
      speakersTitle: 'Eminent Speaker',
      speakers: [
        '<b>Mr. Manoj Chugh</b>, <i>President of EMC India & SAARC.</i>',
        '<b>Mr. Harald Will</b>, <i>President & CEO, ACL Services Limited.</i>',
        '<b>Dr. K. Subramanian</b>, <i>IT Consultant to CAG of India, Director IGNOU.</i>',
        '<b>Mr. R. Dayal</b>, <i>Executive Director (Internal Audit), Air India Limited.</i>',
        '<b>Mr. Ravi S. Pani</b>, <i>Director/CFO,C1 India Limited.</i>',
        '<b>Mr. Rajeev Arora</b>, <i>Vice President, Internal Audit – North EIH Limited.</i>',
        '<b>Mr. Kallol Kundu</b>, <i>Director and CFO, C1 India.</i>',
        '<b>Mr. G. K. Gupta</b>, <i>Vice-President, Distribution Standards & Contracts, Max New York Life Insurance Company Ltd.</i>',
        '<b>Mr. Anil Roy</b>, <i>Partner, Grant Thortan.</i>',
        '<b>Mr. Niraj Ruparel</b>, <i>Director, BMR Advisors.</i>',
        '<b>Mr. Gaganpreet Singh</b>, <i>Director, KPMG.</i>',
        '<b>Mr. Akshay Bhalla</b>, <i>Partner, Control Solutions.</i>',
        '<b>Mr. Deepak Wadhawan</b>, <i>Senior Advisory (Risk Advisory Services) KPMG.</i>',
        '<b>Mr. Ravi. H. Iyer</b>, <i>Vice President IIA Delhi.</i>',
        '<b>Mr. Nishith Seth</b>, <i>ACDA, SSPL.</i>'
      ]
    },
    sidebar: {
      speakerProfile: '',
      feedback: '',
      advisorBoard: [],
      coOrganiser: { name: '', logo: '' },
      sponsors: [],
      customSidebar: true,
      coSponsor: { name: 'ACL', logo: '/images/logos/3.svg' },
      institutionalSponsors: [
        { name: 'IIA', logo: '/images/logos/5.svg' },
        { name: 'ACFE', logo: '/images/logos/acfe.png' }
      ],
      knowledgePartners: [
        { name: 'Forensics Guru', logo: '/images/logos/forensicsguru.png' },
        { name: 'i2k2 Networks', logo: '/images/logos/i2k2.png' }
      ]
    }
  },
  'transformation-post-audit-2008': {
    main: {
      title: 'Assurance 2008',
      focusTitle: 'Transformation from Post Audit to Continuous Control Monitoring – Technology and Methodology',
      focus: `SSPL got the opportunity to organise a grand meet on Assurance. The invitees were executives, business managers and industry experts. They came together on one stage to exchange ideas and explore innovative business and technology solutions at 'ASSURANCE 2008'. This unique event is held in India once a year. It provides customer centric solutions on Business Assurance and Risk Management and also on expert insight and peer exchange.`,
      topicsTitle: '',
      topics: [],
      speakersTitle: 'Eminent Speaker',
      speakers: [
        'Dr. K. Subramanian, IT Advisor to CAG of India.',
        'Mr. Ganapathy Subramanian, Director (Finance), Bennet Coleman & Co. Limited.',
        'Mr. P. N. Sharma, Chairman Audit Committee, UFlex Limited.',
        'Mr. Nagesh Pinge, President – Internal Audit, JSW Limited.',
        'Mr. Amar Kumar, Chief Risk Officer, Max New York Life Insurance Company India Limited.',
        'Mr. Rajeev Arora, Vice President, Internal Audit – North EIH Limited.',
        'Mr. Sunder Krishnan, Chief Risk Officer, Reliance Insurance Limited.',
        'Mr. Sandeep Bhadkande, Head – Data Analysis Function, Siemens Corporate Finance Pvt. Ltd.',
        'Mr. Salil Krishnan, Senior Vice President – Inspection and Audit, Axis Bank.',
        'Ms. Smitha Gune, General Manager, Operational Risk Management Group, ICICI Bank Limited.',
        'Mr. Mohan Bhatia, Director, KPMG.',
        'Mr. John Scrivener, Senior Consultant, SymSure Limited.',
        'Mr. Jatin Thakkar, Senior Manager, HSBC Group.'
      ]
    },
    sidebar: {
      speakerProfile: '',
      feedback: '',
      advisorBoard: [],
      coOrganiser: { name: '', logo: '' },
      customSidebar: true,
      sponsors: [
        { name: 'ACL', logo: '/images/partners/arbutus.png' }
      ],
      institutionalSupporter: {
        name: 'Supported by',
        logos: [
          { name: 'IIA India - Bombay Chapter', logo: '/images/logos/5.svg' },
          { name: 'eISA', logo: '/images/logos/1.svg' },
          { name: 'TiE', logo: '/images/partners/tie.png' }
        ]
      }
    }
  },
  'assurance-2007': {
    main: {
      title: 'Assurance 2007',
      focusTitle: 'Conference Focus',
      focus: `Is an opportunity for you to be a part of the Grand Meet on Assurance. We invite you to join executives, business managers and industry experts who will come together to meet, exchange ideas and explore innovative business and technology solutions at <b>ASSURANCE 2007, The Sheraton New Delhi, from 23rd – 25th May 2007</b>. It is a unique event which would aim at providing customer centric solutions on Business Assurance and Risk Management, expert insight and peer exchange.<br/><br/>
      <b>Assurance 2007</b> is a valuable opportunity for solutions related to compliance and risk management. It will provide a platform to audit professionals to exchange ideas and trade practices. An exclusive customer focused event that brings together the knowledge base of ACL with that of its users, partners and other industry experts. You shall benefit by not just from interacting with your colleagues from wide variety of industries but also by listening to intellectual view points of some of the leading visionaries in the open source of world.<br/><br/>
      <b>Event highlights</b> include inspirational keynote presentations, client- presented sessions, detailed product workshops, hands-on product interface as well as many peer networking sessions.<br/><br/>
      <span style='color:#7bb32e;font-weight:bold;font-size:1.2em;'>ASSURANCE 2007 shall benefit participants in many ways, a few of them being :</span>`,
      topicsTitle: '',
      topics: [
        'Know if your company is harnessing current technologies to fullest? Or are you losing business by not keeping pace with market trends.',
        'Explore best practices in governance, risk and compliance.',
        'Hear Customer success stories',
        'Learn from top industry experts.',
        'Expand peer network and have countless opportunities to make beneficial contacts.',
        'Be inspired & get new ideas.',
        'Get on to becoming more imaginative & initiate new ideas to succeed.'
      ],
      speakersTitle: 'Eminent Speaker',
      speakers: [
        'Mr. Sunil Talati, President, The Institute of Chartered Accountants of India.',
        'Mr. Amarjit Chopra, Central Council Member, The Institute of Chartered Accountants of India.',
        'Mr. Michael Liu, Regional Director, ACL Services Limited.',
        'Mr. Probal Ghosal, Director Finance, Benett, Coleman & Co. Limited.',
        'Mr. Dr. K. Subramanian, IT Advisor to CAG of India.',
        'Mr. Manoj Chugh, President India & SAARC, EMC.',
        'Mr. Anil Kumar, Deputy Executive Director, Dalmia Cements.',
        'Mr. Rajiv Arora, Director -Business Risk and Internal Audit, Aviva Life Insurance Company India Pvt Ltd.',
        'Mr. Sandeep Bhatkhande, Head – Data Analysis Function, Siemens Corporate Finance Private Limited.',
        'Ms. Akhilesh Tuteja, Executive Director, KPMG.',
        'Mr. G. Kali Prasad, Partner, Ernst & Young.',
        'Mr. P. N. Sharma, Director - Finance, Sir Ganga Ram Hospital.',
        'Mr. S. Satyamoorty, Former Deputy CAG of India, Commercial.',
        'Dr. D. P. S. Seth, Former Member Telecom, TRAI.',
        'Mr. Amar Kumar, Assistant Vice President- Risk Management, Max New York Life Insurance Co Ltd.',
        'Mr. Devangshu Dutta, Chief Executive, Third Eyesight.',
        'Mr. Sanjay Bane, AGM - Head Information System Audit, ICICI Bank Limited.',
        'Mr. Rajesh Bhatia, General Manager - Global Internal Audit, Ranbaxy Laboratories Limited.',
        'Mr. Naveen Sherman, Principle Finance Officer, Bharti Airtel Limited.',
        'Mr. Kallol Kundu, Director Regional Audit, EIH Limited.',
        'Mr. Kallol Lahiri, Divisional Manager - Internal Audit, TATA Motors Limited.',
        'Mr. Suveer Khanna, Manager - Forensic Practice, KPMG.'
      ]
    },
    sidebar: {
      speakerProfile: 'Speakers profile content for Assurance 2007.',
      feedback: '',
      advisorBoard: [],
      coOrganiser: { name: '', logo: '' },
      customSidebar: true,
      coSponsor: { name: 'ACL', logo: '/images/logos/3.svg' },
      sponsors: [
        { name: 'Control Solutions', logo: '/images/partners/controlsolutions.png' },
        { name: 'Dena Bank', logo: '/images/partners/denabank.png' }
      ]
    }
  },
  'apj-acl-channel-partner-2007': {
    main: {
      title: 'APJ Channel Partner Conference 2007',
      focusTitle: 'Conference Focus',
      focus: `It was a great opportunity to learn from ACL experts, hear partner success stories, celebrate accomplishments, and help position your company for new levels of achievement in 2008. The conference also provided a great platform for learning techniques to overcome selling challenges and strategies for identifying new sales opportunities.`,
      topicsTitle: '',
      topics: [],
      speakersTitle: 'Eminent Speaker',
      speakers: []
    },
    sidebar: {
      speakerProfile: '',
      feedback: '',
      advisorBoard: [],
      coOrganiser: { name: '', logo: '' },
      sponsors: []
    }
  },
};

type Props = {
    params: Promise<{ slug: string }>;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
  };
  
  export default async function Page({ params, searchParams }: Props) {
    const { slug } = await params;
    const event = eventDetails[slug];
    if (!event && slug !== 'apj-acl-channel-partner-2007') {
      notFound();
    }
  
    return (
      <div className="w-full bg-white min-h-screen">
        <Header />
        <AOSWrapper>
        <ShortPageBanner
    backgroundImage="/images/events.webp"
    title="Events"
    subtitle="Get information about current & upcoming events"
    />
  
          <div className="max-w-7xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-8" data-aos="fade-up">
            {/* Main Content (left) */}
            <div className="md:w-2/3 w-full" data-aos="fade-up">
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
                <Link href="/events" className="mt-8 inline-block text-blue-600 hover:underline">← Back to Events</Link>
              </div>
            </div>
            {/* Sidebar (right) */}
            <aside className="md:w-1/3 w-full space-y-6" data-aos="fade-up" data-aos-delay="100">
              {slug === 'risk-intelligence-2011' ? (
                <div className="bg-[#f5f5f5] rounded-lg p-0">
                  <div className="border-b border-[#e0e0e0]">
                    <div className="p-4 pl-6 font-semibold text-gray-700 border-l-4 border-green-500 bg-white rounded-t-lg">SESSION DETAILS</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-green-700 font-bold text-lg mb-4">Educational Partner</h3>
                    <img src="/images/logos/jims.png" alt="JIMS" className="w-32 h-16 object-contain bg-white" />
                  </div>
                </div>
              ) : slug === 'maintainability-of-assurance-2010' ? (
                <div className="bg-[#f5f5f5] rounded-lg p-0">
                  <div className="border-b border-[#e0e0e0]">
                    <div className="p-4 pl-6 font-semibold text-gray-700 border-l-4 border-green-500 bg-white rounded-t-lg">SESSION DETAILS</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-green-700 font-bold text-lg mb-4">Institutional Supporter</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {event.sidebar.institutionalSupporter?.logos.map((logo: { name: string; logo: string }, idx: number) => (
                        <img key={idx} src={logo.logo} alt={logo.name} className="w-28 h-12 object-contain bg-white" />
                      ))}
                    </div>
                  </div>
                </div>
              ) : slug === 'gaining-audit-assurance-2009' ? (
                <div className="bg-[#f5f5f5] rounded-lg p-0">
                  <div className="border-b border-[#e0e0e0]">
                    <div className="p-4 pl-6 font-semibold text-gray-700 border-l-4 border-green-500 bg-white rounded-t-lg">SESSION DETAILS</div>
                  </div>
                  <div className="p-6 space-y-6">
                    <div>
                      <h3 className="text-green-700 font-bold text-lg mb-2">Co-Sponsor</h3>
                      <img src="/images/logos/3.svg" alt="ACL" className="w-32 h-16 object-contain bg-white" />
                    </div>
                    <div>
                      <h3 className="text-green-700 font-bold text-lg mb-2">Institutional Sponsor</h3>
                      <div className="flex flex-col">
                        <span className="font-bold text-green-700 mb-1">India</span>
                        <div className="grid grid-cols-2 gap-2 mb-2">
                          <img src="/images/logos/5.svg" alt="IIA" className="w-28 h-12 object-contain bg-white" />
                          <img src="/images/logos/acfe.png" alt="ACFE" className="w-28 h-12 object-contain bg-white" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-green-700 font-bold text-lg mb-2">Chapter</h3>
                      <span className="font-bold text-green-700 mb-1">Knowledge Partners</span>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <img src="/images/logos/forensicsguru.png" alt="Forensics Guru" className="w-28 h-12 object-contain bg-white" />
                        <img src="/images/logos/i2k2.png" alt="i2k2 Networks" className="w-28 h-12 object-contain bg-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : slug === 'transformation-post-audit-2008' ? (
                <div className="bg-[#f5f5f5] rounded-lg p-0">
                  <div className="border-b border-[#e0e0e0]">
                    <div className="p-4 pl-6 font-semibold text-gray-700 border-l-4 border-green-500 bg-white rounded-t-lg">SESSION DETAILS</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-green-700 font-bold text-lg mb-4">Sponsor</h3>
                    <img src="/images/partners/arbutus.png" alt="ACL" className="w-32 h-16 object-contain bg-white mb-6" />
                    <h3 className="text-green-700 font-bold text-lg mb-2">Supported by</h3>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <img src="/images/logos/5.svg" alt="IIA India - Bombay Chapter" className="w-32 h-16 object-contain bg-white" />
                      <img src="/images/logos/1.svg" alt="eISA" className="w-32 h-16 object-contain bg-white" />
                    </div>
                    <div className="flex justify-center">
                      <img src="/images/partners/tie.png" alt="TiE" className="w-32 h-16 object-contain bg-white" />
                    </div>
                  </div>
                </div>
              ) : slug === 'assurance-2007' ? (
                <div className="bg-[#f5f5f5] rounded-lg p-0">
                  <div className="space-y-2 border-b border-[#e0e0e0]">
                    <div className="p-4 pl-6 font-semibold text-gray-700 border-l-4 border-green-500 bg-white rounded-t-lg">SESSION DETAILS</div>
                    <div className="p-4 pl-6 font-semibold text-gray-700 border-l-4 border-green-500 bg-white">SPEAKERS PROFILE</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-green-700 font-bold text-lg mb-2">Co-Sponsor</h3>
                    <img src="/images/logos/3.svg" alt="ACL" className="w-32 h-16 object-contain bg-white mb-6" />
                    <h3 className="text-green-700 font-bold text-lg mb-2">Sponsor</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <img src="/images/partners/controlsolutions.png" alt="Control Solutions" className="w-32 h-16 object-contain bg-white" />
                      <img src="/images/partners/denabank.png" alt="Dena Bank" className="w-32 h-16 object-contain bg-white" />
                    </div>
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
                  {event.sidebar.institutionalSupporter?.logos && (
                    <section className="bg-white rounded-lg shadow p-4">
                      <h2 className="text-lg font-bold text-green-700 mb-4">Institutional Supporter</h2>
                      <div className="grid grid-cols-4 gap-2">
                        {event.sidebar.institutionalSupporter.logos.map((logo: { name: string; logo: string }, idx: number) => (
                          <img key={idx} src={logo.logo} alt={logo.name} className="w-28 h-12 object-contain bg-white" />
                        ))}
                      </div>
                    </section>
                  )}
                </>
              )}
            </aside>
          </div>
        </AOSWrapper>
        <Footer />
      </div>
    );
  }
  
  export async function generateStaticParams() {
    const slugs = Object.keys(eventDetails);
    if (!slugs.includes('apj-acl-channel-partner-2007')) {
      slugs.push('apj-acl-channel-partner-2007');
    }
    return slugs.map(slug => ({ slug }));
  }