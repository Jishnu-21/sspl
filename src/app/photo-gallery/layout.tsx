import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery - SSPL",
  description: "Welcome to SSPL, your trusted digital agency.",
};

const PhotoGalleryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      {/* You can add any layout-specific components or styles here */}
      {children}
    </div>
  );
};

export default  PhotoGalleryLayout; // Default export of the layout component