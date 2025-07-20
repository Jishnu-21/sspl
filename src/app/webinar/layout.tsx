import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webinar - SSPL",
  description: "Welcome to SSPL, your trusted digital agency.",
};

const WebinarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      {/* You can add any layout-specific components or styles here */}
      {children}
    </div>
  );
};

export default  WebinarLayout; // Default export of the layout component