import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - SSPL",
  description: "Welcome to SSPL, your trusted digital agency.",
};

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      {/* You can add any layout-specific components or styles here */}
      {children}
    </div>
  );
};

export default  ProductsLayout; // Default export of the layout component