export interface TraineeTestimonial {
  id: number;
  avatar: string;
  text: string;
  name: string;
  course: string;
}

export const traineeTestimonials: TraineeTestimonial[] = [
  {
    id: 1,
    avatar: '/images/testimonials/trainee1.png',
    text: 'I found the big data analytics course provided by SSPL to be highly beneficial. The hands-on labs, real-world case studies, and the expert guidance from instructors made complex concepts easy to understand. I was able to immediately apply what I learned to my current role, resulting in significant improvements to our data analysis processes.',
    name: 'John Smith',
    course: 'Big Data Analytics'
  },
  {
    id: 2,
    avatar: '/images/testimonials/trainee2.png',
    text: 'The training on advanced analytics tools was comprehensive and practical. SSPL\'s approach of combining theory with hands-on exercises helped me grasp complex data visualization techniques. The instructors were knowledgeable and always available to answer questions. I would highly recommend this training to anyone looking to enhance their data analytics skills.',
    name: 'Emma Johnson',
    course: 'Advanced Analytics'
  },
  {
    id: 3,
    avatar: '/images/testimonials/trainee3.png',
    text: 'SSPL\'s training program on data analytics was exactly what I needed to advance my career. The curriculum was well-structured, covering everything from basic concepts to advanced techniques. The practical exercises and real-world case studies were particularly valuable. I\'ve already seen a positive impact on my work performance.',
    name: 'Michael Chen',
    course: 'Data Analytics'
  },
  {
    id: 4,
    avatar: '/images/testimonials/trainee4.png',
    text: 'I enrolled in the big data analytics course after researching several options, and I\'m glad I chose SSPL. The training was comprehensive, with a good balance of theory and practice. The instructors were experts in their field and made complex topics accessible. The skills I gained have been invaluable in my current role.',
    name: 'Sarah Williams',
    course: 'Big Data Analytics'
  },
  {
    id: 5,
    avatar: '/images/testimonials/trainee5.png',
    text: 'The data visualization course exceeded my expectations. The instructors were knowledgeable and passionate about the subject, making the learning experience engaging and enjoyable. The hands-on projects helped solidify my understanding of the concepts. I\'ve already implemented several techniques I learned in my current role.',
    name: 'David Rodriguez',
    course: 'Data Visualization'
  },
  {
    id: 6,
    avatar: '/images/testimonials/trainee6.png',
    text: 'SSPL\'s training on predictive analytics was excellent. The course material was up-to-date with the latest industry trends and tools. The instructors were experienced professionals who provided valuable insights beyond what was in the curriculum. I feel much more confident in my ability to apply predictive analytics in my work.',
    name: 'Jennifer Lee',
    course: 'Predictive Analytics'
  }
];
