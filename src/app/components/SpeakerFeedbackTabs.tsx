"use client";
import React from "react";

export interface SpeakerFeedback {
  logo: string;
  company: string;
  name: string;
  designation: string;
  content: string;
}

export default function SpeakerFeedbackTabs({ feedbacks }: { feedbacks: SpeakerFeedback[] }) {
  return (
    <div className="w-full flex flex-col space-y-10 min-h-[400px] md:min-h-[600px]">
      {feedbacks.map((fb, idx) => (
        <div
          key={idx}
          className="bg-gray-100 p-8 rounded-lg shadow-sm flex flex-col md:flex-row items-center md:items-start"
        >
          {/* Logo and Company */}
          <div className="flex flex-col items-center md:items-start md:w-44 w-full mb-4 md:mb-0 md:mr-6 flex-shrink-0">
            <div className="w-32 h-20 flex items-center justify-center bg-white p-1 rounded mb-2">
              <img
                src={fb.logo}
                alt={fb.company}
                className="h-full w-auto object-contain"
              />
            </div>
            <h3 className="text-base font-semibold text-gray-800 text-center md:text-left break-words">{fb.company}</h3>
          </div>
          {/* Feedback Content and Author */}
          <div className="flex-1 flex flex-col justify-between w-full">
            <p className="text-gray-700 mb-4 italic text-base md:text-lg">{fb.content}</p>
            <div className="text-sm text-blue-800 font-semibold mb-1">{fb.name}{fb.designation ? `, ${fb.designation}` : ''}</div>
          </div>
        </div>
      ))}
    </div>
  );
} 