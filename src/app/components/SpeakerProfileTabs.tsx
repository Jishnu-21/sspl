"use client";
import React, { useState } from "react";
import SpeakerImage from "@/app/components/SpeakerImage";

export interface SpeakerProfile {
  name: string;
  designation: string;
  details: string;
  image: string;
}

export default function SpeakerProfileTabs({ speakers }: { speakers: SpeakerProfile[] }) {
  const [selected, setSelected] = useState(0);
  const selectedSpeaker = speakers[selected];

  return (
    <div className="flex flex-col md:flex-row gap-6 md:max-h-[700px] max-h-[550px]">
      {/* Tab List */}
      <div className="flex md:flex-col gap-2 md:w-56 w-full overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 md:pr-4 md:max-h-[500px] max-h-[350px] overflow-auto">
        {speakers.map((speaker, idx) => (
          <button
            key={idx}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors w-full md:w-auto text-left ${selected === idx ? "bg-green-100 border-l-4 border-green-600" : "hover:bg-gray-100"}`}
            onClick={() => setSelected(idx)}
            aria-selected={selected === idx}
          >
            <SpeakerImage
              src={speaker.image}
              alt={speaker.name}
              className="w-12 h-12 object-cover rounded-full border border-gray-200"
            />
            <span className="font-medium text-gray-800 text-sm md:text-base">{speaker.name}</span>
          </button>
        ))}
      </div>
      {/* Details Panel */}
      <div className="flex-1 bg-white rounded-lg shadow p-6 flex flex-col items-center md:items-start md:max-h-[500px] max-h-[350px] overflow-auto">
        <SpeakerImage
          src={selectedSpeaker.image}
          alt={selectedSpeaker.name}
          className="w-28 h-28 object-cover rounded-full border border-gray-300 mb-4"
        />
        <h3 className="text-2xl font-bold text-green-700 mb-1 text-center md:text-left">{selectedSpeaker.name}</h3>
        <p className="text-gray-600 italic mb-4 text-center md:text-left">{selectedSpeaker.designation}</p>
        <p className="text-gray-700 whitespace-pre-line text-sm md:text-base text-center md:text-left">{selectedSpeaker.details}</p>
      </div>
    </div>
  );
} 