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
    logo: '/images/testimonials/hsbc.gif',
    text: '"We have utilised the services of SSPL in assureBI training and project implementation. We have taken the assureBI training courses from SSPL and found the same to be very interactive, informative and useful. The Trainers have in depth knowledge not just about assureBI but also have extremely good domain knowledge which makes SSPL unique in assureBI Training.One of the HSBC units made use of SSPL support services and found the same to be very proactive and user-friendly. Another unit within HSBC had availed SSPL’s support, when they decided to use assureBI software for converting the system generated exception reports (notepad reports) into Excel. With the installation of the software, they have been able to save lot of time and manual intervention involved in the accurate conversion of these reports in an Excel format. Feedback from this unit is that SSPL team has been a great support in this project.Overall, it has always been a pleasure interacting and working with SSPL.',
    author: 'Ms. Devyani Ghosh',
    position: 'Asia Pacific Risk VP, ORC'
  },
  {
    id: 2,
    company: 'Toyota Motors',
    logo: '/images/testimonials/toyota.jpg',
    text: 'SSPL Middle East - conducted a hands-on-training program on data analytics for Toyota Motors U.K. and other subsidiaries. It comprised of practical sessions on how to deploy analytics using excel and Power BI. The learners were thrilled to be a part of this course, as it allowed them to grasp a vast array of technical know-how embedded via a simplistic approach. The course received phenomenal positive responses from the learners, who clearly stated their insights on how “Data” was better read and understood, after attending the training sessions. In fact, the participants in the training sessions who did not seem to have any particular use of analytics in their day-2-day job profile, found this course to be immensely helpful and informative as well. The sessions were well-tailored & subsequently addressed the real case studies at the end of each training module. The proficiency that was acquired via the training sessions, promised the participants to adapt and implement the objectives with respect to data analytics. PowerBI sessions successfully equipped the learners with the essential skills to create a dashboard themselves using different themes, maps and data transformations. On the whole, participants thoroughly enjoyed the course and learned many new concepts related to data analytics and data in general. The mean score based on the feedback received by the participants was a high value notched at 4.5 out of 5.',
    author: 'Toyota Motors',
    position: 'U.K.'
  },
  {
    id: 3,
    company: 'Airtel',
    logo: '/images/testimonials/airtel.gif',
    text: 'This is to certify that we have worked with SSPL (formerly known as Seth Services) in Revenue Assurance (RA) Audit with their technical team stationed at our office to support & automate the RA applications. Their performance as towards quality and timeliness is satisfactory as per commitment.',
    author: 'Bharti Airtel Limited',
    position: 'Pune'
  },
  {
    id: 4,
    company: 'Reliance Life Insurance',
    logo: '/images/testimonials/reliance.jpg',
    text: 'assureBI is widely used as part of operational risk management to ensure ICFAR which is internal control for financial reporting. We plan to use assureBI widely we would run scripts in the future so that we more proactively and effectively use assureBI tool advantage.',
    author: 'Mr. Sunder Krishnan',
    position: 'Chief Risk Officer, Reliance Life Insurance Company'
  },
  {
    id: 5,
    company: 'Aviva',
    logo: '/images/testimonials/aviva.gif',
    text: 'Aviva Life Insurance Company India Limited has been dealing with SSPL for quite some time. SSPL has provided us licenses, conducted training programme and provided support relating to assureBI software. The services of SSPL have been found to be excellent and the quality of services in delivering support and training is experienced to be as per our requirement and standards.All the people with whom we have been interacting have handled the matters in very professional manner and to our satisfaction. We are pleased to state that Aviva Life Insurance Company India Limited continues its relationship with SSPL in future also.',
    author: 'Mr. Rajeev Arora',
    position: 'Director, Aviva Life Insurance Company India Limited'
  },
  {
    id: 6,
    company: 'Godrej',
    logo: '/images/testimonials/godrej.jpg',
    text: 'We would definitely look at consultant like SSPL to help us out in getting more such kind of assureBI scripting, yes we want to do this in big way group because that the kind of assurance management expects we are committed to doing this.',
    author: 'Mr. V. Swaminathan',
    position: 'Chief Internal Auditor, Godrej Industries Ltd.'

  },
  {
    id: 7,
    company: 'Committee on Information Technology, ICAI Noida',
    logo: '/images/testimonials/icai.png',
    text: 'We express our heartfelt gratitude to you for delivering lectures/ making presentations during Certificate Course on Forensic Accounting and Fraud Detection at Ludhiana and Bangalore Your lively presentation and masterful analysis of the subjects dealt with in the sessions were enriching and stimulating to all the members. The participants highly appreciated the way you presented the subject. The members were immensely benefited by your knowledge, experience and expertise. We look forward to your continued support in future also.',
    author: 'Ms. Indu Arora',
    position: 'Secretary'
  },
  {
    id: 8,
    company: 'Oberoi Group',
    logo: '/images/testimonials/oberoi.jpg',
    text: 'We have been associated with SSPL since 2002, early days since we began developing our CAAT centric auditing mechanism. Today we have come a long way and very successfully at it. SSPL has been our sole partner in our journey and pursuit for excellence all through. Despite ups and downs, imminent phenomena in any relationship, SSPL never lost touch with us completely and have almost always met us round the corner.',
    author: 'Mr. Kallol Kundu',
    position: 'Chief Internal Auditor, EIH Limited (The Oberoi Group)'
  },
  {
    id: 9,
    company: 'IMC',
    logo: '/images/testimonials/imc.jpg',
    text: 'We would like to express our sincere thanks to Nishith Seth for addressing a Session of our Seminar on IT for Investment Management organised by IT Cell of the Indian Merchant Chamber. Your presentation was so informative that all present had a take-home value for the same and felt enriched.',
    author: 'Mr. Jitendra Sanghvi',
    position: 'Sr. Secretary'
  },
];

export const minorClients: MinorTestimonial[] = [
  {
    id: 1,
    company: 'Y. K. Almoayyed & Sons, Kingdom of Bahrain',
    logo: '/images/testimonials/yk.jpg',
    text: 'We use your product and it works great. We\'ll be adding more to this automation process on the table, and I\'d love to get training from your end.',
    author: 'Mr. Mohandas Unni',
    position: 'Group IT Manager (Information Technology)'
  },
  {
    id: 2,
    company: 'Accountant General (A & E). Himachal Pradesh',
    logo: '/images/testimonials/accountant.jpg',
    text: 'It\'s my pleasure to share our experience in working with Nishith of Substratal Solutions Private Limited (SSPL). Due to his persistent follow-up and demonstration of the benefits of the technology in various areas of internal and external audit functions in Government Analytics License was renewed after eight years with SSPL. Three years back an extremely interesting case on Indian Railways data analysis was conducted, which largely prompted us to take the final call for continued usage of the tool/application and the consequent renewal of the license. Post renewal, we were very satisfied with the quality of professional services backed up by an highly skilled technical team at SSPL, had rendered to us, in making my office use the Analytics Tool effectively. As on many occasions earlier, we have given them an opportunity to present Analytics tool at our forthcoming International Program of Comptroller and Auditor Generals, where in participants from around 21 countries shall be present. Our relationship with SSPL could help in utilizing their expertise in Analytics tool and audit, at all the State Accounts and Audit offices across India. Their command on the Analytics Tool clubbed with Audit experience, makes them an invaluable partner to the users in this area.',
    author: 'Mr. Nilotpal Goswami',
    position: ''
  },
  {
    id: 3,
    company: 'GPIC,Bahrain',
    logo: '/images/testimonials/gpic.jpg',
    text: 'assureBI Certified Training conducted by Mr. Nishith Seth for GPIC, Bahrain. Objectives was more than achieved. Expectations were more than met.',
    author: 'Mr. Percy Mistry',
    position: 'Chief Internal Auditor'
  },
  {
    id: 4,
    company: 'Ceylinco Insurance Co. Plc',
    logo: '/images/testimonials/ceylon.jpg',
    text: 'Ceylinco Insurance Co. Plc, had purchased assureBI Desktop Licenses with Premium support from (Substratal Solutions Private Limited), India and has been renewing the Premium Support with them for last 3 years. We had also undergone assureBI Certified Courses with SSPL, Mumbai office and the training was very satisfactory. We are pleased to be satisfied customer with SSPL and shall surely recommend them for assureBI related requirements.',
    author: 'Mr. Shamendra Perera',
    position: 'Internal Audit, Ceylon Insurance Co. Plc. Colombo, Sri Lanka'
  },
  {
    id: 5,
    company: 'Avaya Professional Services',
    logo: '/images/testimonials/avaya.gif',
    text: 'Substratal Solutions P. Ltd, earlier in its Avatar of Seth Services, provided a crucial service to our managed services program with high degree of professionalism and competence. Even though the task was a difficult one in terms of combining non-structured data and producing meaningful business relevant information out of it and automating the whole process was the key factor in our ability to satisfy our customer’s requirements and do it within the stipulated SLA as well as competitive cost. SSPL built for us an engine with substantial intelligence incorporated to sift through data from a variety of sources and combine it with the information generated by self-service platform and provide meaningful insights aiding the whole program in terms of capacity management, SLA management and pattern recognition to continually improve our performance. The fact that SSPL team handled large scale volumes of data is also worthy of note. In short, a dedicated, focused and professional team delivering on customer expectations and partnering in continual improvement cycle at competitive price!',
    author: 'Mr. Rinoo Rajesh',
    position: ''
  },
  {
    id: 6,
    company: 'The Bombay Dyeing & Mfg. Co. Ltd.',
    logo: '/images/testimonials/bombaydyeing.gif',
    text: 'I am thankful to SSPL for introducing me to assureBI which is an extremely user friendly data analysis tool. In fact the more you learn about it and use, it gets better and better. I was very pleased with the overall effort of the SSPL team in all regards right from assureBI Installation, training and automation. The professionals from SSPL team are no doubt masters in the technology. One thing they never say is No. They always try their level best and reach to the desired solution in the least time. SSPL places a high level of importance on the quality of both their processes and people with robust due diligence. There is a positive can do attitude at all levels in the organization and this enthusiastic engagement creates an excellent environment for increased efficiency and productivity. They have always provided qualified, timely and superior support, exceeding our expectations.SSPL is bound to grow with their approach and commitment to client satisfaction.',
    author: 'Mr. V. Jambunathan',
    position: 'GM-Internal Audit'
  },
  {
    id: 7,
    company: 'Bajaj Allianz',
    logo: '/images/testimonials/bajaj.jpg',
    text: 'From Past six months we have been associated with SSPL and our team has been part of implementation of assureBI. assureBI is a really good product infact though off late we have started using the product. The product has lot of wonderful features and it can be really very useful tool for any organization irrespective of what the nature of the organization is.',
    author: 'Mr. V. Sriram',
    position: 'Head Internal Audit, Bajaj Allianz Life Insurance Company'
  },

  {
    id: 8,
    company: 'Birla Sun life Insurance',
    logo: '/images/testimonials/birla.gif',
    text: 'assureBI is very user- friendly and make data extraction simpler and faster for quick analysis. SSPL has been able to deliver services as per commitments given by them while entering into a contract with us. Their team can handle and solve all queries in the quickest possible time .Their trainers are experienced having in- depth knowledge not just on assureBI but also about the industry and can provide easy solutions to even complex problems. Overall Experience has been very enriching. They especially focus on providing guidance to their client’s team on independently working with assureBI.',
    author: 'Mr. Lalit',
    position: 'Internal Audit'
  },
  {
    id: 9,
    company: 'United Colors of Benetton',
    logo: '/images/testimonials/ucb.gif',
    text: 'This is to show appreciation to the support that we at Benetton India Private Limited have received from SSPL since our communication began in 2006.We acknowledge the professional and care extended to us in matters related to sale of assureBI as a product and the vibrant training sessions conducted thereafter. We hope to receive similar support in the coming year. Keep up the good work.',
    author: 'Mr. Manoj Dhar',
    position: 'System & Internal Auditor'
  },
  {
    id: 10,
    company: 'Brahmayya & Co',
    logo: '/images/testimonials/brahmayya.jpg',
    text: 'We really appreciate the time you took in helping us for selecting the Analytical tools and Audit Documentation software for our organisation and support you extended to negotiate the price with the seller. You are really helping fellow professionals of ICAI in creating awareness about the Analytical tools, its advances and helping them to use these tools for their audit work. Further, we would like to thank you for the timely support in resolving the issues we are encountering in usage of Arbutus Analyzer. Thank you for being an awesome fellow member of ICAI and supporter of professional growth.',
    author: 'Mr. Chandramohan Reddy T',
    position: 'Partner, Chartered Accountants, Brahmayya & Co., Bangalore'
  },
  {
    id: 11,
    company: 'GSA & Associates, New Delhi',
    logo: '/images/testimonials/gsa.png',
    text: 'We are using Analyzer Data Analytics tool in our Bank Audits, and found the tool very useful. We are able to perform the repeated jobs, much easily and very fast. SSPL is very supportive and professional in providing services for the tool.',
    author: 'Mr. Sunil Aggarwal',
    position: 'Sr.Partner'
  },
 
];
