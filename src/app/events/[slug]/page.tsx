import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ShortPageBanner from '@/app/components/ShortPageBanner';
import AOSWrapper from '@/app/components/AOSWrapper';
import SpeakerImage from '@/app/components/SpeakerImage';
import SpeakerProfileTabs from '@/app/components/SpeakerProfileTabs';
import SpeakerFeedbackTabs from '@/app/components/SpeakerFeedbackTabs';

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
      speakerProfile: { name: string; designation: string; details: string; image: string }[];
      feedback: { logo: string; company: string; name: string; designation: string; content: string }[];
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
      speakerProfile: [
        {
          name: 'Dr. Nanda Gopal',
          designation: 'Managing Director, Indiafirst Life Insurance',
          details: `Dr. P. Nandagopal has worked for over 25 years in India's leading Banking, Asset Management, Financial Advisory, General and Life Insurance organizations. Before he joined the life insurance industry at the beginning of the historical opening of the sector in 1999, he was heading the retail sales at DSP Merrill Lynch, sales and marketing at GIC Asset Management and managing finance and operational functions at the divisional offices of New India Assurance. He also worked very briefly at Andhra Bank and Indian Oil Corporation before moving to the insurance industry.`,
          image: '/images/speakers/nanda-gopal.jpg'
        },
        {
          name: 'Mr. Amarjit Chopra',
          designation: 'Ex-President, ICAI',
          details: `Mr. Amarjit Chopra did his post graduation in commerce from Delhi University in 1973. He qualified as a Chartered Accountant in the year 1975 and since then has been in practice as a senior partner of GSA & ASSOCIATES, New Delhi. He was elected to the Northern India Regional Council (NIRC) of The Institute of Chartered Accountants of India for two terms 1985-88 and 1988-91. He was the Chairman of NIRC for the year 1988-89. He was elected to the Central Council of The Institute of Chartered Accountants of India for the term 1998-2001, 2001-2004, 2004-2007, 2007-2010 and was re-elected for the fifth consecutive term 2010 onwards. He served as the Vice President of Institute of Chartered Accountants (ICAI) for the year 2009-10 and President of Institute of Chartered Accountants (ICAI) for the year 2010-11.`,
          image: '/images/speakers/amarjit-chopra.jpg'
        },
        {
          name: 'Mr. S. Bhaskar',
          designation: 'President, IIA Bombay Chapter',
          details: `Mr. S. Bhaskar is currently Chief Internal Auditor at Tata Capital Limited and also Heads the Internal Audit function for the Tata Capital Group comprising of Corporate Finance, Consumer Finance, Housing Finance, Private Equity, Investment Banking, Broking, Wealth Management, Forex, Travels & International Business. He is a member of the Ethics Committee, Operations Committee and an invitee member of the Fraud & Operational Risk Management Committee of Tata Capital Ltd. Mr. S Bhaskar is currently the President of IIA, Bombay Chapter, a member of the IIA India Council and also a committee Member of the ASSOCHAM National Council on Internal Audit & Corporate Fraud. Mr. Bhaskar has also carried the TBEM(Business Excellence) assessments of the Tata Group of Companies as a Senior Business Lead Assessor.`,
          image: '/images/speakers/s-bhaskar.jpg'
        },
        {
          name: 'Mr. Uday Khanna',
          designation: 'President, Bombay Chamber of Commerce & Industry',
          details: `Mr. Uday Khanna is a Chartered Accountant. Mr. Khanna is the Chairman of Lafarge India Pvt. Ltd. as also Chairman of Bata India Ltd and is on the Boards of Castrol India Ltd. & Pfizer Ltd. Prior to this Mr. Khanna was the Managing Director and CEO of Lafarge India till July 2011. Mr. Khanna joined the Lafarge Group in Paris on 1st June, 2003 as Senior Vice President for Group Strategy, after a long experience of almost 30 years with Hindustan Lever Ltd. /Unilever in a variety of financial, commercial and general management roles both nationally and internationally. His last position before joining Lafarge, was Senior Vice President Finance, Unilever - Asia, based in Singapore.`,
          image: '/images/speakers/uday-khanna.jpg'
        },
        {
          name: 'Mr. P. R. Ramesh',
          designation: 'Chairman, Deloitte Haskins & Sells',
          details: `Mr. P. R. Ramesh is the Chairman of Deloitte Haskins & Sells with over 33 years of experience in providing audit services. He has extensive experience in serving large national and multi-national clients in banking, financial services, information technology, steel, automotive and other industry sectors. The positions that P R Ramesh holds and has held in committees and groups are as under: He was a special invitee to National Advisory Committee on Accounting Standards (NACAS) set up by the Ministry of Corporate Affairs of Government of India which was mandated with the task of convergence of Indian Accounting Standards to International Financial Reporting Standards (IFRS) Co-opted member of the Accounting Standards Board (ASB) of the Institute of Chartered Accountants of India Member of the Committee set up by the ASB for Convergence of Indian Accounting Standards with IFRS.`,
          image: '/images/speakers/pr-ramesh.jpg'
        },
        {
          name: 'Mr. P. N. Sharma',
          designation: 'Director (Finance), Sir Ganga Ram Hospital',
          details: `Mr. P. N. Sharma is a Fellow Chartered Accountants, Fellow Member Institute of Company Secretaries of India (F.C.S.). He Completed the Senior Course at Henley Management College, U.K. He is currently, Director and & Chief Finance Officer, at Sir Ganga Ram Hospital. It's a premier tertiary care 700 bedded hospital with most modern Healthcare and Diagnostic facilities. It is one of the largest POST GRADUATE INSTITUTE for DNB courses. In his present position he is responsible to the Trust Society and Management of the Hospital for Finance, Purchase, Administration, Materials Management and most other activities not directly related to Medicare, including, Acquisitions & takeovers as also strategic alliances. The hospital is engaged in implementing state of the art ERP System (HIS) for which he is fully responsible to revamp systems and procedures in all the departments, have set up Costing and Budgeting control system which are being migrated to the ERP System. He has also worked in Director capacity at Airport Authority of India, MMTC Limited, Flex Industries Limited. He is also President of eInformation Systems, Security and Audit Association.`,
          image: '/images/speakers/pn-sharma.jpg'
        },
        {
          name: 'Mr. Deepak Wadhawan',
          designation: 'Director, All India Heart Foundation',
          details: `Mr. Deepak Wadhawan is currently on the Board of Directors of All India Heart Foundation. He has been for 28 years in internal audit & management consultancy practice with experience across a dozen industries including steel, power, coal, cement, road construction, logistics & transportation, auto ancillaries, engineering services, banking & financial services, IT & BPO, sugar, paper, spirits & wine, hospitals, etc. This broad exposure enables him to take a pragmatic approach to finding solutions. He is a former Senior Advisor at KPMG first in Risk Advisory Services & later in the Markets Group.`,
          image: '/images/speakers/deepak-wadhawan.jpg'
        },
        {
          name: 'Mr. Sunder Krishnan',
          designation: 'EVP and Chief Risk Officer, Reliance Life Insurance',
          details: `Mr. Sunder Krishnan is currently EVP and Chief Risk Officer of Reliance Life Insurance for the past six years with an oversight of Risk Management, Compliance, Claims Operations, Legal- Secretarial functions, BCP and Internal Audit. More than two decade of varied experiences in Organizations such as Reliance Life Insurance, DSP Merrill Lynch, ING Vysya, Credit Lyonnais, Standard Chartered Bank, Bank Internasional Indonesia, Ernst and Young at Senior and Mid-Management levels. Started career with Deloitte in the year 1984 pursuing Chartered Accountancy. Today an Enterprise Wide Risk Management professional with professional qualifications and expertise in CA, CISA, ERM and CCSA. He was ISACA Mumbai Chapter President and currently Member of India Task Force – ISACA.`,
          image: '/images/speakers/sunder-krishnan.jpg'
        },
        {
          name: 'Mr. Aneel J. Gambhir',
          designation: 'Sr. Vice President - Internal Audit, Blue Dart Limited',
          details: `Mr. Aneel Gambhir is working as Senior Vice President and Head of Internal Audit in Blue Dart Express Ltd. He has been heading Audit Function for last nine years. He is instrumental in setting up Risk Management process and audit function in the company. Prior to taking over role in Audit, He has worked as Regional Finance Controller of Western Region in Blue Dart for about five years. While in Blue Dart, he has streamlined various processes, led cost optimization and efficiency improvement projects and plugged revenue leakages. He, through his own initiative, designed, developed and implemented Freight on Value (FOV) concept to provide complete peace of mind to Blue Dart Customers. FOV is Insurance arrangement on behalf of customers as value add feature and generates additional contribution to bottom line. He is also member of various committees to review performance as well as provide inputs on investments/automation etc.`,
          image: '/images/speakers/aneel-gambhir.jpg'
        },
        {
          name: 'Mr. Kallol Kundu',
          designation: 'Chief Internal Auditor, The Oberoi Group',
          details: `Mr. Kallol Kundu, currently is a , Head of Group Internal Audit at The Oberoi Group. His Professional Qualifications includes: FCA, DISA, CISA, CFE. Organizational achievements are being Rated 'Exceptional' for 10 years in a row; Youngest 'head of a function' in the organization; Nominated for select-group Franklin Covey Leadership programs (Co-founded by Dr. Stephen R. Covey); Pioneered CAAT-based Management Audit structure; Pioneered implementation of online treasury management systems for power utility with 2-million consumer base. He has Industry Experience of over 20 years spanning Hospitality, Power Utility, FMCG sectors. Specialises in skill sets related to Anti-fraud specialist, Corporate Governance professional, Public Speaking, Active Controls professional, Courage Leadership, Professional networking.`,
          image: '/images/speakers/kallol-kundu.jpg'
        },
        {
          name: 'Mr. Satish Warrier',
          designation: 'Chief Information Security Officer, Godrej Industries Ltd',
          details: `Mr. Satish Warrier, is a CISA (Certified Information Systems Auditor), CISM (Certified Information Security Manager) and a Certified ISO 27001 Lead Auditor, besides being an MBA in Finance and a Certified Associate of Indian Institute of Bankers. I have also done Mumbai University's Computer Management course from the reputed Jamnalal Bajaj Institute of Management Studies, Mumbai. His current role is that of the CISO [Chief Information Security Officer], catering to all the Associate Companies of the Godrej Industries Group. His main responsibility is to ensure that a proper Information Security posture, in accordance with the threat perception, is maintained in all the Companies within the Group.`,
          image: '/images/speakers/satish-warrier.jpg'
        },
        {
          name: 'Mr. V Sriram',
          designation: 'Vice-President & Head-Internal Audit, Bajaj Allianz Life Insurance',
          details: `Mr. V Sriram is a presently working as Vice-President & Head Internal Audit – Bajaj Allianz Life Insurance Company Limited. Fellow member of the Institute of Chartered Accountants of India since 1991. Completed Articleship from M/s N.C. Rajagaopal & Co a reputed firm of Chartered Accountants in Chennai. Having around 20 years of post qualification experience in the areas of Risk and Internal Audit. Has worked in different capacities in diverse industries like Non-Banking Finance Company / Housing Finance company / Hospitality Sector and Insurance Sector. Associate member of the Institute of Cost and Works Accountants of India since 1996. Member of Chennai chapter of Institute of Internal Auditors.`,
          image: '/images/speakers/v-sriram.jpg'
        },
        {
          name: 'Mr. Haresh Dua',
          designation: 'Vice President (Internal Audit & Compliance), JSW Steel Limited',
          details: `Mr. Haresh Dua, is a Chartered Accountant, CIA, CISA, CISSP. He has 19 years of professional experience, out of which he has spent 18 years in Internal Audit. He has worked in manufacturing, FMCG, Projects, Mining and Retain Industry, while working with organisations such as Batliboi Limited, Blue Star Limited, Godrej Group, and Future Group. Currently, he is enriching with his experience JSW Steel Limited, as Vice President (Internal Audit & Compliance), and also Heads Internal Audit department of JSW group, which has various businesses like Steel, Power, Cement, Port, Mining and Aluminum. Experience includes: Implementation of Clause 49, i.e. implementation of Enterprise Risk Management Framework and Internal Control Framework. Preparation & roll out of Risk Based Audit Plans. Integration of Risks Management Framework with Internal Audit. In-charge of Fraud Investigation cell at Godrej & Future groups. Setting up of Internal Audit department at Pantaloon Retail India Ltd. Introducing Rating System for audit of various stores & warehouses at Pantaloon Retail India Ltd. Information Systems Audits at Godrej, Pantaloon and JSW group.`,
          image: '/images/speakers/haresh-dua.jpg'
        },
        {
          name: 'Mr. Satish Shenoy',
          designation: 'Head-Corporate Audit Services, Powai Larsen & Toubro Limited',
          details: `Mr. Satish Shenoy is a Chartered Accountant, Cost Accountant, Company Secretary & Diploma in Central Excise – a 8th rank holder in the final cs examination in 1988. He is currently working as Head Corporate Audit Services, Powai in Larsen & Toubro. He has over 25 years of experience in finance and internal auditing. He has worked in different sectors & companies such as Hindustan Petroleum, Onida, Lupin Pharma & Reliance Retail. He has been associated with the Institute of Internal Auditors – India, Bombay Chapter for last 15 years and was the President last year. He is a member in the accounting & auditing committee of the BCAS. He has also served in several committees of the WIRC, ICAI. He has delivered several papers on internal audit for various study circles in Mumbai, Pune, Thane, Nasik, Nagpur & Vadodara of the ICAI & IIA and for Asscoham at Delhi; he is the faculty for "Internal Audit Studies".`,
          image: '/images/speakers/satish-shenoy.jpg'
        },
        {
          name: 'Mr. Sandip Roy',
          designation: 'Protector of Emigrants, Ministry of Overseas Indian Affairs',
          details: `Mr. Sandip Roy is a Bachelor of Technology in Electrical Engineering from Indian Institute of Technology (IIT) - Bombay, IAAS, CISA, CISM, CFE, CIA, ISO Lead Assessor (ISO 9001:2000), Certification in Finance and Project Management from National Institute of Finance Management and currently working as Protector of Emigrants Ministry of Overseas Indian Affairs, Government of India. He has been responsible for bringing transparency in the Emigration clearance process by initiating strong measures of deterrence against rogue elements and appropriately encouraging the conforming, forthright and committed elements. Computerised (implemented System Automation Initiative - SAI) each and every part of the Emigration process in house so as to bring transparency and enhance processing speed to over 5 times. Initiated SAI Project ERP implementation on a web enabled platform (SQL Server) on the cloud with Thin Clients on N Band Wireless network as the clients.`,
          image: '/images/speakers/sandip-roy.jpg'
        },
        {
          name: 'Mr. Mukesh Arya',
          designation: 'ex-Director, Internal Oversight Services, UN Agency',
          details: `Mr. Mukesh Arya is the founder member of the Red Flag Oversight Consultancy Services P Ltd (Red Flag). Prior to this, he was positioned as the Director of the Department of Internal Oversight Services, United Nations Agency (UNRWA). Mr. Arya, an Indian Audit & Accounts Service (IA&AS) officer took early retirement to join the United Nations. Nationally, he held several important charges such as the Accountant General of Assam, Meghalaya, Arunachal Pradesh, and Mizoram. He was the Principal Director of Audit for Direct taxes and prepared reports for the Parliament of India, one of which was the famous report on VDIS (tax amnesty scheme). He assisted several legislative assemblies of various states in India and interfaced with the constitution assembly of the Republic of Seychelles.`,
          image: '/images/speakers/mukesh-arya.jpg'
        },
        {
          name: 'Dr. K. Subramanian',
          designation: 'ex-IT Advisor, CAG of India',
          details: `Prof. Dr. K. Subramanian, Ex-Professor & Director, Advanced Center for Informatics & Innovative Learning, IGNOU. Honorary Information Technology Advisor to Comptroller & Auditor General (CAG) of India. Ex-Senior Deputy Director General at National Informatics Center, Ministry of Communications & Information Technology, New Delhi. More than three and half decades of experience in ICT Introduction, design, development, Implementation & Audit of Technology & Systems. Pioneer in introducing Technology in Banking, Financial services and Government Finance & Audit Functions (central & State). Associated with IT Implementation of major Projects of railways, Police, Immigration, Passports, Visas & security organizations. Review & e Audit of e Governance Programs.`,
          image: '/images/speakers/k-subramanian.jpg'
        },
        {
          name: 'Mr. Rohit Mahajan',
          designation: 'Partner & Co-Head, KPMG',
          details: `Rohit co-Heads KPMG India's Forensic practice, besides leading the Investigations and Anti-Bribery and Corruption service lines within the practice. Rohit has over 16 years of experience in handling projects in the areas of Fraud Investigation, Process Risk Consulting, Anti Bribery and Corruption diligence and compliance reviews, Financial Due Diligence and Valuation and Business Fraud Risk Review. His exposure spans all major industries with specific focus on Infrastructure, Pharmaceuticals, and Financial Services. Led a number of investigations involving financial improprieties, bribery, corruption, FCPA non-compliance, employee fraud and non-compliance including being part of the team investigating the Satyam case. He has successfully mentored the preparation and launch of publications like the India Anti Money Laundering Survey 2012, Survey on Bribery and Corruption 2011 and India Fraud Survey 2010; including point of view documents on the Lokpal Bill etc.`,
          image: '/images/speakers/rohit-mahajan.jpg'
        },
        {
          name: 'Mr. Sarabjeet Singh',
          designation: 'Partner, BMR Advisors',
          details: `Mr. Sarabjeet Singh is a Partner in the BMR's Risk & Advisory Practice. With a specialization in process and compliance, Sarabjeet has 19 years of experience in advising Fortune 1000 multinationals and Indian business houses on a range of matters spanning process improvement, risk mitigation and controls development, merger integration, internal audits and compliance. He has worked extensively in the anti-money laundering area across geographies, consulting with financial institutions in setting up robust processes to meet compliance needs.`,
          image: '/images/speakers/sarabjeet-singh.jpg'
        },
        {
          name: 'Mr. Thomas J. Karithanam',
          designation: 'Senior Advisor-Risk Consulting, Forensic Services, KPMG',
          details: `Mr. Thomas J. Karithanam is a Senior Advisor in KPMG Forensic, based in Mumbai. He joined KPMG Forensic in 2000 as a Manager. He is a former Police Officer with more than 25 years service with Central Bureau of Investigation, the premier Central investigating agency of India. He mainly worked in the anti - corruption and economic offences wings of the Agency with a stint in investigating conventional crimes, including homicide and unnatural death cases. He also worked for about 2 years on deputation with Bank of India, as a Specialist Investigating Officer. He was awarded the Indian Police Medal for Meritorious Service on Republic Day, 1993. He is the supporting national product leader for Investigation and marketing Forensic services.`,
          image: '/images/speakers/thomas-karithanam.jpg'
        },
        {
          name: 'Mr. Kunal Vajani',
          designation: 'Partner, Wadia Ghandy & Co',
          details: `Mr. Kunal Vajani is a Partner of a leading law firm M/s. Wadia Ghandy & Co. After obtaining his law degree from Government Law College, Mumbai, Mr. Kunal Vajani qualified as a Solicitor, Supreme Court of England & Wales and also completed his masters (LL.M) from Harvard Law School, USA. Mr. Kunal Vajani specializes in litigation and arbitration matters and has represented clients in various leading matters relating to corporate crimes, land disputes, public and private trusts, rehabilitation and restructuring of companies involving capital restructuring, amalgamations, mergers and demergers, challenges to policies/ orders of electricity distribution companies and regulatory commissions, cable and telecom disputes, natural gas and petroleum disputes, direct and indirect tax [income tax, service tax and entertainment duty], intellectual property litigation, recovery of debts including NCDs, FCCBs, OCBs, documentary credits, shareholder litigations, derivative actions.`,
          image: '/images/speakers/kunal-vajani.jpg'
        },
        {
          name: 'Mr. S.N Ravichandran',
          designation: 'Managing Director, Nilgiris Chemical Stoneware Co. (P) Ltd',
          details: `Mr. S.N Ravichandran is the Managing Director of Nilgiris Chemical Stoneware Co. (P) Ltd Coimbatore. He holds an M.Sc. Degree in Applied Sciences. He assists the Coimbatore City Police and Economic Offenses Wing on Cyber, White collar and Economic Offences investigation. He is one of the faculties at the In House Training School of the Tamil Nadu Police in Coimbatore for conducting training sessions on investigation of Cyber Crimes. He has also imparted training to the Chennai North Zone and Pondicherry Police on Cyber Crime Investigations. He has delivered several lectures to Schools, Colleges, Social and Industrial Organizations like CII, and Assocham and Professional bodies like Chartered Accountants and Sales Tax auditors on Cyber Crime, Cyber Security, Maritime and Airspace security threats, Information Technology Act, Economic Offences on the net, Money Laundering scams and Risk Management and Information Security. He was Involved in the framing of a Curriculum for a unique M.Tech/M.S course on Cyber Forensics for IGNOU and C-DAC.`,
          image: '/images/speakers/sn-ravichandran.jpg'
        }
      ],
      feedback: [
        {
          logo: '/images/events/1/if.gif',
          company: 'IndiaFirst Life Insurance Company Ltd',
          name: 'Dr. P. Nandagopal',
          designation: 'Managing Director & Chief Executive Officer',
          content: 'I greatly enjoyed the session and learnt many takeaways for our business. Thank you.'
        },
        {
          logo: '/images/events/1/rl.jpg',
          company: 'Reliance Life Insurance',
          name: 'Mr. Sunder Krishnan',
          designation: 'EVP and Chief Risk Officer',
          content: 'Thanks for the invite. Although could not spend much time in the summit – it was pleasure catching up with so many friends – albeit for a brief period. The summit was well organized and the arrangements were good.'
        },
        {
          logo: '/images/events/1/oberoi.png',
          company: 'The Oberoi Limited.',
          name: 'Mr. Kallol Kundu',
          designation: 'Chief Internal Auditor',
          content: 'Thank you for inviting me to speak at the conference. The atmosphere was indeed very stimulating and I quite enjoyed being a part of it. Also, I must commend you on the choice of speakers as well as the quality of audience. A very well organized event and would love to be associated in future as well.'
        },
        {
          logo: '/images/events/1/godrej.jpg',
          company: 'Godrej Industries Ltd',
          name: 'Mr. Satish Warrier',
          designation: 'Chief Information Security Officer',
          content: 'Would like to compliment SSPL for efficiently and effectively organizing this seminar. The sessions, including your intervening comments, were quite informative and interesting. The number of sessions too was quite appropriate.'
        },
        {
          logo: '/images/events/1/bajaj.jpg',
          company: 'Bajaj Allianz Life Insurance Company.',
          name: 'Mr. V. Sriram',
          designation: 'Head Internal Audit',
          content: 'The whole show was well organized and hats off to you and your team. The only thing which could have been avoided was the delay in the start. This may be kept in mind for the future programme.'
        },
        {
          logo: '/images/events/1/lt.jpg',
          company: 'Powai Larsen & Toubro Limited',
          name: 'Mr. Satish Shenoy',
          designation: 'Head – Corporate Audit Services',
          content: 'It was a well-organized conference and every event was well participated by the delegates. I enjoyed the panoramic view at Trident Roof-top just as auditors need to have the overall view of the area to be audited.'
        },
        {
          logo: '/images/events/1/bmr.jpg',
          company: 'BMR Advisors',
          name: 'Mr. Sarabjeet Singh',
          designation: 'Partner',
          content: 'Many congratulations on the success of your conference event. I think it was great – speakers and audience.'
        },
        {
          logo: '/images/events/1/essar.jpg',
          company: 'Essar Services India Limited',
          name: 'Mr. Vishal Rathod',
          designation: '',
          content: 'Thanks for inviting us for the conference. We had an information packed day!.'
        },
        {
          logo: '/images/events/1/kpmg.jpg',
          company: 'Forensic Services, KPMG',
          name: 'Mr. Thomas Karithanam',
          designation: 'Senior Advisor-Risk Consulting',
          content: 'Overall, it was a fruitful learning time, good ambience and nice people around. Let me once again express my gratitude to Srivatsan.'
        },
        {
          logo: '/images/events/1/nilgiris.jpg',
          company: 'Nilgiris Chemical Stoneware Co. (P) Ltd.',
          name: 'Mr. S. N. Ravichandran',
          designation: 'Managing Director',
          content: 'It was privilege attending the well organized and conducted meeting. My congratulation to you on that. I took back much information. It was my honor to meet so many eminent personalities on and off the dais and interact with them. Please convey my thanks and congratulations to Shri Bhaskar for coordinating and conducting the last session in the most admirable manner. I am planning to take some lessons from him on that! I look forward to be part of such events in future also'
        },
        {
          logo: '/images/events/1/aneja.jpg',
          company: 'Aneja Associates.',
          name: 'Harmeek Bhela',
          designation: '',
          content: 'I must say that it was very well organised and the selection of the speakers was too good. It was truly a knowledge sharing exercise with lot of practical examples cited therein. Would look forward to some more of such interactions.'
        }
      ],
      advisorBoard: [
        { role: 'Chairman', name: 'Mr. Deepak Wadhawan', details: 'FCA, CPA, CIA' },
        { role: 'Member', name: 'Mr. Amarjit Chopra', details: 'ex-President - ICAI' },
        { role: 'Member', name: 'Mr. Aneel J. Gambhir', details: 'Sr. VP - Internal Audit, BlueDart Limited' },
        { role: 'Member', name: 'Mr. P.N. Sharama', details: 'President - eISSA' },
        { role: 'Member', name: 'Dr. K. Subramanian', details: 'Emeritus President - eISSA' }
      ],
      coOrganiser: { name: 'eISSA', logo: '/images/events/1/eissa.gif' },
      sponsors: [
        { name: 'Central Bank of India', logo: '/images/events/1/cbi.jpg' },
        { name: 'Union Bank', logo: '/images/events/1/ub.jpg' },
        { name: 'India First', logo: '/images/events/1/if.gif' },
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
      speakerProfile: [],
      feedback: [],
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
      speakerProfile: [],
      feedback: [],
      advisorBoard: [],
      coOrganiser: { name: '', logo: '' },
      sponsors: [],
      institutionalSupporter: {
        name: 'Institutional Supporters',
        logos: [
          { name: 'eISA', logo: '/images/events/3/eissa.gif' },
          { name: 'IIA', logo: '/images/events/3/tiia.jpg' },
          { name: 'ACL', logo: '/images/events/3/acl.jpg' },
          { name: 'Paladion', logo: '/images/events/3/paladion.jpg' }
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
      speakerProfile: [],
      feedback: [],
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
      speakerProfile: [],
      feedback: [],
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
      speakerProfile: [],
      feedback: [],
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
      speakerProfile: [],
      feedback: [],
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
    const resolvedSearchParams = await searchParams;
    const tab = typeof resolvedSearchParams?.tab === 'string' ? resolvedSearchParams.tab : null;
    const event = eventDetails[slug];
    if (!event && slug !== 'apj-acl-channel-partner-2007') {
      notFound();
    }
  
    // Special layout for APJ Channel Partner Conference 2007
    if (slug === 'apj-acl-channel-partner-2007') {
      return (
        <div className="w-full bg-white min-h-screen">
          <Header />
          <AOSWrapper>
            <ShortPageBanner
              backgroundImage="/images/events.webp"
              title="Events"
              subtitle="Get information about current & upcoming events"
            />
            <div className="max-w-7xl mx-auto py-12 px-4 flex flex-col md:flex-row items-start gap-8">
              <div>
                <img src="/images/awards/award4.jpg" alt="APJ ACL Award" className="w-60 md:w-80 h-80 object-contain mb-4" />
              </div>
              <div className="flex-1">
                <h1 className="text-4xl font-light mb-4 text-lime-600">APJ Channel Partner Conference 2007</h1>
                <div className="text-lg font-bold mb-2 text-gray-800">9<sup>th</sup> - 11<sup>th</sup> September 2007</div>
                <div className="text-lg font-bold mb-4 text-gray-800">Bangkok Thailand</div>
                <p className="mb-4 text-gray-700 max-w-2xl">
                  It was a great opportunity to learn from ACL experts, hear partner success stories, celebrate accomplishments, and help position your company for new levels of achievement in 2008. The conference also provided a great platform for learning techniques to overcome selling challenges and strategies for identifying new sales opportunities.
                </p>
                <a href="/events" className="mt-4 inline-flex items-center text-white bg-red-500 hover:bg-red-600 px-6 py-2 rounded font-semibold">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  BACK
                </a>
              </div>
            </div>
          </AOSWrapper>
          <Footer />
        </div>
      );
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
            {/* Sidebar (left) */}
            <aside className="md:w-1/3 w-full space-y-6" data-aos="fade-up" data-aos-delay="100">
              {slug === 'risk-intelligence-2011' ? (
                <div className="bg-[#f5f5f5] rounded-lg p-0">
                  <div className="border-b border-[#e0e0e0]">
                    <Link
                      href={`/events/${slug}?tab=session-details`}
                      className={`p-4 pl-6 font-semibold text-gray-700 border-l-4 ${tab === 'session-details' ? 'border-green-700 bg-green-100' : 'border-green-500 bg-white'} block rounded-t-lg`}
                    >
                      SESSION DETAILS
                    </Link>
                    <Link
                      href={`/events/${slug}?tab=speaker-profile`}
                      className={`p-4 pl-6 font-semibold text-gray-700 border-l-4 ${tab === 'speaker-profile' ? 'border-green-700 bg-green-100' : 'border-green-500 bg-white'} block`}
                    >
                      SPEAKER PROFILE
                    </Link>
                    <Link
                      href={`/events/${slug}?tab=feedback`}
                      className={`p-4 pl-6 font-semibold text-gray-700 border-l-4 ${tab === 'feedback' ? 'border-green-700 bg-green-100' : 'border-green-500 bg-white'} block`}
                    >
                      FEEDBACK
                    </Link>
                  </div>
                  <div className="p-6">
                    <h3 className="text-green-700 font-bold text-lg mb-4">Educational Partner</h3>
                    <img src="/images/events/2/jims.jpg" alt="JIMS" className="w-32 h-16 object-contain bg-white" />
                  </div>
                </div>
              ) : slug === 'maintainability-of-assurance-2010' ? (
                <div className="bg-[#f5f5f5] rounded-lg p-0">
                  <div className="border-b border-[#e0e0e0]">
                    <Link
                      href={`/events/${slug}?tab=session-details`}
                      className={`p-4 pl-6 font-semibold text-gray-700 border-l-4 ${tab === 'session-details' ? 'border-green-700 bg-green-100' : 'border-green-500 bg-white'} block rounded-t-lg`}
                    >
                      SESSION DETAILS
                    </Link>
                    <Link
                      href={`/events/${slug}?tab=speaker-profile`}
                      className={`p-4 pl-6 font-semibold text-gray-700 border-l-4 ${tab === 'speaker-profile' ? 'border-green-700 bg-green-100' : 'border-green-500 bg-white'} block`}
                    >
                      SPEAKER PROFILE
                    </Link>
                    <Link
                      href={`/events/${slug}?tab=feedback`}
                      className={`p-4 pl-6 font-semibold text-gray-700 border-l-4 ${tab === 'feedback' ? 'border-green-700 bg-green-100' : 'border-green-500 bg-white'} block`}
                    >
                      FEEDBACK
                    </Link>
                  </div>
                  <div className="p-6">
                    <h3 className="text-green-700 font-bold text-lg mb-4">Institutional Supporter</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {event.sidebar.institutionalSupporter?.logos.map((logo, idx) => (
                        <img key={idx} src={logo.logo} alt={logo.name} className="h-16 w-auto object-contain bg-white" />
                      ))}
                    </div>
                  </div>
                </div>
              ) : slug === 'gaining-audit-assurance-2009' ? (
                <div className="bg-[#f5f5f5] rounded-lg p-0">
                  <div className="border-b border-[#e0e0e0]">
                    <Link
                      href={`/events/${slug}?tab=session-details`}
                      className={`p-4 pl-6 font-semibold text-gray-700 border-l-4 ${tab === 'session-details' ? 'border-green-700 bg-green-100' : 'border-green-500 bg-white'} block rounded-t-lg`}
                    >
                      SESSION DETAILS
                    </Link>
                    <Link
                      href={`/events/${slug}?tab=speaker-profile`}
                      className={`p-4 pl-6 font-semibold text-gray-700 border-l-4 ${tab === 'speaker-profile' ? 'border-green-700 bg-green-100' : 'border-green-500 bg-white'} block`}
                    >
                      SPEAKER PROFILE
                    </Link>
                    <Link
                      href={`/events/${slug}?tab=feedback`}
                      className={`p-4 pl-6 font-semibold text-gray-700 border-l-4 ${tab === 'feedback' ? 'border-green-700 bg-green-100' : 'border-green-500 bg-white'} block`}
                    >
                      FEEDBACK
                    </Link>
                  </div>
                  <div className="p-6 space-y-6">
                    <div>
                      <h3 className="text-green-700 font-bold text-lg mb-2">Co-Sponsor</h3>
                      <img src="/images/events/3/acl.jpg" alt="ACL" className="w-32 h-16 object-contain bg-white" />
                    </div>
                    <div>
                      <h3 className="text-green-700 font-bold text-lg mb-2">Institutional Sponsor</h3>
                      <div className="flex flex-col">
                        <span className="font-bold text-green-700 mb-1">India</span>
                        <div className="grid grid-cols-2 gap-2 mb-2">
                          <img src="/images/events/3/tiia.jpg" alt="IIA" className="w-28 h-12 object-contain bg-white" />
                          <img src="/images/events/acfe.jpg" alt="ACFE" className="w-28 h-12 object-contain bg-white" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-green-700 font-bold text-lg mb-2">Chapter</h3>
                      <span className="font-bold text-green-700 mb-1">Knowledge Partners</span>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <img src="/images/events/fg.jpg" alt="Forensics Guru" className="w-28 h-12 object-contain bg-white" />
                        <img src="/images/events/i2k.jpg" alt="i2k2 Networks" className="w-28 h-12 object-contain bg-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : slug === 'transformation-post-audit-2008' ? (
                <div className="bg-[#f5f5f5] rounded-lg p-0">
                  <div className="border-b border-[#e0e0e0]">
                    <Link
                      href={`/events/${slug}?tab=session-details`}
                      className={`p-4 pl-6 font-semibold text-gray-700 border-l-4 ${tab === 'session-details' ? 'border-green-700 bg-green-100' : 'border-green-500 bg-white'} block rounded-t-lg`}
                    >
                      SESSION DETAILS
                    </Link>
                    <Link
                      href={`/events/${slug}?tab=speaker-profile`}
                      className={`p-4 pl-6 font-semibold text-gray-700 border-l-4 ${tab === 'speaker-profile' ? 'border-green-700 bg-green-100' : 'border-green-500 bg-white'} block`}
                    >
                      SPEAKER PROFILE
                    </Link>
                    <Link
                      href={`/events/${slug}?tab=feedback`}
                      className={`p-4 pl-6 font-semibold text-gray-700 border-l-4 ${tab === 'feedback' ? 'border-green-700 bg-green-100' : 'border-green-500 bg-white'} block`}
                    >
                      FEEDBACK
                    </Link>
                  </div>
                  <div className="p-6">
                    <h3 className="text-green-700 font-bold text-lg mb-4">Sponsor</h3>
                    <img src="/images/events/3/acl.jpg" alt="ACL" className="w-32 h-16 object-contain bg-white mb-6" />
                    <h3 className="text-green-700 font-bold text-lg mb-2">Supported by</h3>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <img src="/images/events/3/tiia.jpg" alt="IIA India - Bombay Chapter" className="w-32 h-16 object-contain bg-white" />
                      <img src="/images/events/1/eissa.gif" alt="eISA" className="w-32 h-16 object-contain bg-white" />
                    </div>
                    <div className="flex justify-center">
                      <img src="/images/events/tie.jpg" alt="TiE" className="w-32 h-16 object-contain bg-white" />
                    </div>
                  </div>
                </div>
              ) : slug === 'assurance-2007' ? (
                <div className="bg-[#f5f5f5] rounded-lg p-0">
                  <div className="space-y-2 border-b border-[#e0e0e0]">
                    <Link
                      href={`/events/${slug}?tab=session-details`}
                      className={`p-4 pl-6 font-semibold text-gray-700 border-l-4 ${tab === 'session-details' ? 'border-green-700 bg-green-100' : 'border-green-500 bg-white'} block rounded-t-lg`}
                    >
                      SESSION DETAILS
                    </Link>
                    <Link
                      href={`/events/${slug}?tab=speaker-profile`}
                      className={`p-4 pl-6 font-semibold text-gray-700 border-l-4 ${tab === 'speaker-profile' ? 'border-green-700 bg-green-100' : 'border-green-500 bg-white'} block`}
                    >
                      SPEAKER PROFILE
                    </Link>
                    <Link
                      href={`/events/${slug}?tab=feedback`}
                      className={`p-4 pl-6 font-semibold text-gray-700 border-l-4 ${tab === 'feedback' ? 'border-green-700 bg-green-100' : 'border-green-500 bg-white'} block`}
                    >
                      FEEDBACK
                    </Link>
                  </div>
                  <div className="p-6">
                    <h3 className="text-green-700 font-bold text-lg mb-2">Co-Sponsor</h3>
                    <img src="/images/events/3/acl.jpg" alt="ACL" className="w-32 h-16 object-contain bg-white mb-6" />
                    <h3 className="text-green-700 font-bold text-lg mb-2">Sponsor</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <img src="/images/events/cs.jpg" alt="Control Solutions" className="w-32 h-16 object-contain bg-white" />
                      <img src="/images/events/dena-bank.jpg" alt="Dena Bank" className="w-32 h-16 object-contain bg-white" />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Tabs */}
                  <div className="space-y-2">
                    <Link
                      href={`/events/${slug}?tab=speaker-profile`}
                      className={`bg-white rounded shadow p-3 border-l-4 ${tab === 'speaker-profile' ? 'border-green-700 bg-green-100' : 'border-green-500'} font-semibold text-gray-700 block`}
                    >
                      SPEAKER PROFILE
                    </Link>
                    <Link
                      href={`/events/${slug}?tab=feedback`}
                      className={`bg-white rounded shadow p-3 border-l-4 ${tab === 'feedback' ? 'border-green-700 bg-green-100' : 'border-green-500'} font-semibold text-gray-700 block`}
                    >
                      FEEDBACK
                    </Link>
                    {slug !== 'fraud-detection-2012' && (
                      <Link
                        href={`/events/${slug}?tab=session-details`}
                        className={`bg-white rounded shadow p-3 border-l-4 ${tab === 'session-details' ? 'border-green-700 bg-green-100' : 'border-green-500'} font-semibold text-gray-700 block`}
                      >
                        SESSION DETAILS
                      </Link>
                    )}
                  </div>
                  {/* Conference Advisor Board */}
                  {event.sidebar.advisorBoard.length > 0 && (
                    <section className="bg-white rounded-lg shadow p-4">
                      <h2 className="text-lg font-bold text-green-700 mb-4">Conference Advisor Board</h2>
                      {event.sidebar.advisorBoard.map((member, idx) => (
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
                          <img src={event.sidebar.coOrganiser.logo} alt={event.sidebar.coOrganiser.name} className="h-16 w-auto object-contain bg-white mb-2" />
                        </div>
                      )}
                      {event.sidebar.sponsors && event.sidebar.sponsors.length > 0 && (
                        <div className="mb-4">
                          <h3 className="text-green-700 font-bold text-lg mb-2">Sponsors</h3>
                          <div className="grid grid-cols-2 gap-2">
                            {event.sidebar.sponsors.map((s, idx) => (
                              <img key={idx} src={s.logo} alt={s.name} className="h-16 w-auto object-contain bg-white" />
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
                        {event.sidebar.institutionalSupporter.logos.map((logo, idx) => (
                          <img key={idx} src={logo.logo} alt={logo.name} className="h-16 w-auto object-contain bg-white" />
                        ))}
                      </div>
                    </section>
                  )}
                  {/* Supporter and Industry Supporter */}
                  {slug === 'fraud-detection-2012' && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-lime-700 mb-2">Supporter</h4>
                        <div className="flex gap-4 flex-wrap">
                          <div className="bg-white p-2 rounded shadow flex items-center justify-center">
                            <img src="/images/events/1/tiia.jpg" alt="IIA" className="h-16 w-auto" />
                          </div>
                          <div className="bg-white p-2 rounded shadow flex items-center justify-center">
                            <img src="/images/events/1/bc.jpg" alt="Bombay Chamber" className="h-16 w-auto" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lime-700 mb-2">Industry Supporter</h4>
                        <div className="bg-white p-2 rounded shadow flex items-center justify-center w-fit">
                          <img src="/images/events/1/godrej.jpg" alt="Godrej" className="h-16 w-auto" />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </aside>
            {/* Main Content (right) */}
            <div className="md:w-2/3 w-full" data-aos="fade-up">
              <div className="bg-white rounded-lg shadow-lg p-8">
                {tab === 'speaker-profile' ? (
                  <>
                    <h1 className="text-3xl font-light mb-6 text-green-700">Speaker Profiles</h1>
                    <SpeakerProfileTabs speakers={event.sidebar.speakerProfile} />
                  </>
                ) : tab === 'feedback' ? (
                  <>
                    <h1 className="text-3xl font-light mb-6 text-green-700">Feedback</h1>
                    <SpeakerFeedbackTabs feedbacks={event.sidebar.feedback} />
                  </>
                ) : tab === 'session-details' ? (
                  <>
                    <h1 className="text-3xl font-light mb-6 text-green-700">Session Details</h1>
                    <p className="text-gray-700 mb-4">Detailed information about the sessions for {event.main.title}.</p>
                    <ul className="list-disc pl-6 text-gray-700">
                      {event.main.topics.map((topic, idx) => (
                        <li key={idx} dangerouslySetInnerHTML={{ __html: topic }} />
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <h1 className="text-3xl font-light mb-6 text-green-700">{event.main.title}</h1>
                    <h2 className="text-2xl font-bold text-green-700 mb-2">{event.main.focusTitle}</h2>
                    <p className="mb-6 text-gray-700" dangerouslySetInnerHTML={{ __html: event.main.focus }} />
                    <h2 className="text-2xl font-bold text-green-700 mb-2">{event.main.topicsTitle}</h2>
                    <ul className="mb-6 list-disc pl-6 text-gray-700">
                      {event.main.topics.map((topic, idx) => (
                        <li key={idx} dangerouslySetInnerHTML={{ __html: topic }} />
                      ))}
                    </ul>
                    <h2 className="text-2xl font-bold text-green-700 mb-2">{event.main.speakersTitle}</h2>
                    <ul className="mb-6 list-disc pl-6 text-gray-700">
                      {event.main.speakers.map((speaker, idx) => (
                        <li key={idx} dangerouslySetInnerHTML={{ __html: speaker }} />
                      ))}
                    </ul>
                  </>
                )}
                <Link href="/events" className="mt-8 inline-block text-blue-600 hover:underline">← Back to Events</Link>
              </div>
            </div>
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