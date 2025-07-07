import React from 'react';
import { FaEye, FaLock, FaLightbulb } from 'react-icons/fa';

const steps = [
  {
    icon: <FaEye size={28} className="text-white" />,
    color: 'bg-[#366A00]',
    title: 'Vision',
    description:
      'Formed with a vision to be “the leading data analytics and data intelligence organisation”, we at SSPL are committed to continuous customer service and advance analytics solution Development Company. Helping our clients to steer towards their corporate vision and attain their goals with best possible optimized analytics solutions and services.'
  },
  {
    icon: <FaLock size={28} className="text-white" />,
    color: 'bg-[#1B3D69]',
    title: 'Protect & respect confidentiality',
    description:
      'We often work in sensitive environments where the slightest breach of confidentiality - or the appearance of a breach - could have severe consequences and hinder our ability to serve our clients well. We strictly maintain our clients’ confidentiality and do everything we can to encourage others involved in the process including the service providers etc to share our approach.'
  },
  {
    icon: <FaLightbulb size={28} className="text-white" />,
    color: 'bg-[#366A00]',
    title: 'Lead with insight',
    description:
      'Our consultants carry a wealth of expertise that most companies are always looking forward to tap into managing analytics for their various internal functions such as Operations, Risk and Revenue Assurance but struggle to achieve. SSPL is a strategic thought leader in the discipline of Data and Big Data Analytics for efficient Enterprise Management. Undoubtedly, the leadership is blended into a rich mixture of skills and experiences of our consulting professionals that encompasses towards many economic verticals such as Manufacturing, Retail, Telecom, Insurance, Banking, Media, Government, and Aviation.'
  }
];

const VisionSection = () => (
  <section className="py-6 bg-gray-50">
    <div className="container mx-auto max-w-screen-2xl">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-black text-center mb-10 text-comfortaa">
        Our Vision & Values
      </h2>
      <div className="flex flex-col gap-12 w-full mx-auto z-10">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-start gap-5 relative">
            {/* Icon circle */}
            <div className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${step.color} z-10`}>
              {step.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#1B3D69]">{step.title}</h3>
              <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VisionSection; 