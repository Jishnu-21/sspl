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
    text: '"We use your product and it works great. Well be adding more to this automation process on the table, and Id love to get training from your end"',
    author: 'Mr. Mohandas Unni',
    position: 'Group IT Manager (Information Technology), Y. K. Almoayyed & Sons, Kingdom of Bahrain'
  },
  {
    id: 2,
    company: 'Toyota Motors',
    logo: '/images/testimonials/toyota-logo.png',
    text: 'SSPL Middle East - conducted a hands-on-training program on data analytics for Toyota Motors U.K. and other subsidiaries. It comprised of practical sessions on how to deploy analytics using excel and Power BI. The learners were thrilled to be a part of this course, as it allowed them to grasp a vast array of technical know-how embedded via a simplistic approach.',
    author: 'Toyota Motors',
    position: 'U.K.'
  },
  {
    id: 3,
    company: 'Ceylon Insurance',
    logo: '/images/testimonials/ceylon-logo.png',
    text: 'Ceylon Insurance Co. Plc, had purchased assureBI Desktop Licenses with Premium support from (Substratal Solutions Private Limited), India and has been renewing the Premium Support with them for last 3 years. We had also undergone assureBI Certified Courses with SSPL, Mumbai office and the training was very satisfactory. We are pleased to be satisfied customer with SSPL and shall surely recommend them for assureBI related requirements.',
    author: 'Mr. Shamendra Perera',
    position: 'Internal Audit, Ceylon Insurance Co. Plc. Colombo, Sri Lanka'
  },
  {
    id: 4,
    company: 'Godrej',
    logo: '/images/testimonials/godrej-logo.png',
    text: 'We would definitely look at consultant like SSPL to help us out in getting more such kind of assureBI scripting, yes we want to do this in big way group because that the kind of assurance management expects we are committed to doing this.',
    author: 'Mr. V. Swaminathan',
    position: 'Chief Internal Auditor, Godrej Industries Ltd.'
  },
  {
    id: 5,
    company: 'Reliance Life Insurance',
    logo: '/images/testimonials/reliance-logo.png',
    text: 'assureBI is widely used as part of operational risk management to ensure ICFAR which is internal control for financial reporting. We plan to use assureBI widely we would run scripts in the future so that we more proactively and effectively use assureBI tool advantage.',
    author: 'Mr. Sunder Krishnan',
    position: 'Chief Risk Officer, Reliance Life Insurance Company'
  },
  {
    id: 6,
    company: 'Bajaj Allianz',
    logo: '/images/testimonials/bajaj-logo.png',
    text: 'From Past six months we have been associated with SSPL and our team has been part of implementation of assureBI. assureBI is a really good product infact though off late we have started using the product. The product has lot of wonderful features and it can be really very useful tool for any organization irrespective of what the nature of the organization is.',
    author: 'Mr. V. Sriram',
    position: 'Head Internal Audit, Bajaj Allianz Life Insurance Company'
  },
  {
    id: 7,
    company: 'EIH Limited',
    logo: '/images/testimonials/eih-logo.png',
    text: 'We have been associated with SSPL since 2002, early days since we began developing our CAAT centric auditing mechanism. Today we have come a long way and very successfully at it. SSPL has been our sole partner in our journey and pursuit for excellence all through. Despite ups and downs, imminent phenomena in any relationship, SSPL never lost touch with us completely and have almost always met us round the corner.',
    author: 'Mr. Kallol Kundu',
    position: 'Chief Internal Auditor, EIH Limited (The Oberoi Group)'
  },
  {
    id: 8,
    company: 'Birla Sun Life',
    logo: '/images/testimonials/birla-logo.png',
    text: 'assureBI is very user-friendly and make data extraction simpler and faster for quick analysis. SSPL has been able to deliver services as per commitments given by them while entering into a contract with us. Their team can handle and solve all queries in the quickest possible time. Their trainers are experienced having in-depth knowledge not just on assureBI but also about the industry and can provide easy solutions to even complex problems.',
    author: 'Mr. Lalit',
    position: 'Head Internal Audit, Birla Sun Life Insurance'
  },
  {
    id: 9,
    company: 'HSBC',
    logo: '/images/testimonials/hsbc-logo.png',
    text: 'We have utilised the services of SSPL in assureBI training and project implementation. We have taken the assureBI training courses from SSPL and found the same to be very interactive, informative and useful. The Trainers have in depth knowledge not just about assureBI but also have extremely good domain knowledge which makes SSPL unique in assureBI Training.',
    author: 'Ms. Devyani Ghosh',
    position: 'Asia Pacific Risk VP, ORC, HSBC Bank'
  },
  {
    id: 10,
    company: 'Bombay Dyeing',
    logo: '/images/testimonials/bombay-dyeing-logo.png',
    text: 'I am thankful to SSPL for introducing me to assureBI which is an extremely user friendly data analysis tool. In fact the more you learn about it and use, it gets better and better. I was very pleased with the overall effort of the SSPL team in all regards right from assureBI installation, training and automation.',
    author: 'Mr. V. Jambunathan',
    position: 'GM-Internal Audit, The Bombay Dyeing & Mfg. Co. Ltd.'
  },
  {
    id: 11,
    company: 'Airtel',
    logo: '/images/testimonials/airtel-logo.png',
    text: 'This is to certify that we have worked with SSPL (formerly known as Seth Services) in Revenue Assurance (RA) Audit with their technical team stationed at our office to support & automate the RA applications. Their performance as towards quality and timeliness is satisfactory as per commitment.',
    author: 'Bharti Airtel Limited',
    position: 'Pune'
  },
  {
    id: 12,
    company: 'Aviva',
    logo: '/images/testimonials/aviva-logo.png',
    text: 'Aviva Life Insurance Company India Limited has been dealing with SSPL for quite some time. SSPL has provided us licenses, conducted training programme and provided support relating to assureBI software. The services of SSPL have been found to be excellent and the quality of services in delivering support and training is experienced to be as per our requirement and standards.',
    author: 'Mr. Rajeev Arora',
    position: 'Director, Aviva Life Insurance Company India Limited'
  },
  {
    id: 13,
    company: 'ICAI',
    logo: '/images/testimonials/icai-logo.png',
    text: 'We express our heartfelt gratitude to you for delivering lectures/ making presentations during Certificate Course on Forensic Accounting and Fraud Detection at Ludhiana and Bangalore. Your lively presentation and masterful analysis of the subjects dealt with in the sessions were enriching and stimulating to all the members.',
    author: 'Ms. Indu Arora',
    position: 'Secretary, Committee on Information Technology, ICAI Noida'
  },
  {
    id: 14,
    company: 'Brahmayya & Co',
    logo: '/images/testimonials/brahmayya-logo.png',
    text: 'We really appreciate the time you took in helping us for selecting the Analytical tools and Audit Documentation software for our organisation and support you extended to negotiate the price with the seller. You are really helping fellow professionals of ICAI in creating awareness about the Analytical tools, its advances and helping them to use these tools for their audit work.',
    author: 'Mr. Chandramohan Reddy T',
    position: 'Partner, Chartered Accountants, Brahmayya & Co., Bangalore'
  },
  {
    id: 15,
    company: 'GSA & Associates',
    logo: '/images/testimonials/gsa-logo.png',
    text: 'We are using Analyzer Data Analytics tool in our Bank Audits, and found the tool very useful. We are able to perform the repeated jobs, much easily and very fast. SSPL is very supportive and professional in providing services for the tool.',
    author: 'Mr. Sunil Aggarwal',
    position: 'Sr. Partner, GSA & Associates, New Delhi'
  },
  {
    id: 16,
    company: 'IMC',
    logo: '/images/testimonials/imc-logo.png',
    text: 'We would like to express our sincere thanks to Nishith Seth for addressing a Session of our Seminar on IT for Investment Management organised by IT Cell of the Indian Merchant Chamber. Your presentation was so informative that all present had a take-home value for the same and felt enriched.',
    author: 'Mr. Jitendra Sanghvi',
    position: 'Sr. Secretary'
  }
];

export const minorClients: MinorTestimonial[] = [
  {
    id: 1,
    company: 'Standard Chartered Bank',
    logo: '/images/testimonials/scb-logo.png',
    text: 'We have been using assureBI for our internal audit functions and found it to be extremely effective for data analysis and risk assessment.',
    author: 'John Smith',
    position: 'Head of Internal Audit, SCB'
  },
  {
    id: 2,
    company: 'Tata Consultancy Services',
    logo: '/images/testimonials/tcs-logo.png',
    text: 'SSPL has provided excellent training and implementation support for our analytics initiatives. Their expertise has been invaluable to our success.',
    author: 'Rajesh Kumar',
    position: 'VP, Analytics Division'
  },
  {
    id: 3,
    company: 'Infosys',
    logo: '/images/testimonials/infosys-logo.png',
    text: 'The data analytics tools provided by SSPL have significantly improved our audit efficiency and helped us identify key risk areas more effectively.',
    author: 'Priya Sharma',
    position: 'Director, Risk Management'
  },
  {
    id: 4,
    company: 'Deloitte',
    logo: '/images/testimonials/deloitte-logo.png',
    text: 'Our partnership with SSPL has enhanced our ability to deliver value-added services to our clients through advanced analytics capabilities.',
    author: 'Michael Chen',
    position: 'Partner, Audit & Assurance'
  },
  {
    id: 5,
    company: 'KPMG',
    logo: '/images/testimonials/kpmg-logo.png',
    text: 'SSPL training programs have equipped our team with the skills needed to leverage data analytics in our audit and advisory services.',
    author: 'Sarah Williams',
    position: 'Director, Data Analytics'
  },
  {
    id: 6,
    company: 'Ernst & Young',
    logo: '/images/testimonials/ey-logo.png',
    text: 'The implementation of assureBI has transformed our approach to risk assessment and control testing, making our processes more efficient and effective.',
    author: 'David Johnson',
    position: 'Senior Manager, Technology Risk'
  },
  {
    id: 7,
    company: 'PwC',
    logo: '/images/testimonials/pwc-logo.png',
    text: 'SSPL expertise in data analytics has been instrumental in helping us develop innovative solutions for our clients complex business challenges.',
    author: 'Emily Thompson',
    position: 'Partner, Advisory Services'
  },
  {
    id: 8,
    company: 'Wipro',
    logo: '/images/testimonials/wipro-logo.png',
    text: 'The assureBI platform has provided us with powerful data analysis capabilities that have significantly enhanced our audit effectiveness and efficiency.',
    author: 'Vikram Mehta',
    position: 'Chief Technology Officer'
  }
];
