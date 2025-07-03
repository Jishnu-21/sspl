import React from 'react';
import { FaDownload } from 'react-icons/fa';

interface DownloadBrochureButtonProps {
  pdfPath: string;
  text?: string;
}

const DownloadBrochureButton: React.FC<DownloadBrochureButtonProps> = ({ pdfPath, text = 'Download Brochure' }) => (
  <div className="flex justify-center">
    <a
      href={pdfPath}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 bg-[#366A00] text-white font-semibold rounded-md shadow hover:bg-[#274d00] transition-colors duration-200 group"
    >
      <FaDownload className="text-lg group-hover:translate-y-1 transition-transform duration-200" />
      {text}
    </a>
  </div>
);

export default DownloadBrochureButton; 