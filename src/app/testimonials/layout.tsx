import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials - SSPL",
  description: "Welcome to SSPL, your trusted digital agency.",
};

const TestimonialsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      {/* You can add any layout-specific components or styles here */}
      {children}
    </div>
  );
};

export const viewport = 'width=device-width, initial-scale=1';

export default  TestimonialsLayout; // Default export of the layout component