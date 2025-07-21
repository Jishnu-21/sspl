import Header from "./Header";
import Banner from "./Banner";
import WhyChooseSection from "./WhyChooseSection";
import StatsSection from "./StatsSection";
import ClientMarquee from "./components/ClientMarquee";
import CaseStudiesSection from "./FeaturedProjectsSection";
import RecognitionSection from "./RecognitionSection";
import CTASection from "./CTASection";
import Footer from "./Footer";
import ServicesList from "./components/ServicesList";
export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col bg-white min-h-screen">
      <main className="">
      <Header/>
        <Banner/>
        <div className="relative bg-white mt-screen w-full">
        <ServicesList/>
          <WhyChooseSection/>
          <StatsSection/>
          <ClientMarquee/>
          <CaseStudiesSection/>
          <RecognitionSection/>
          <CTASection/>
        </div>
      </main>
      <Footer className="relative bg-white w-full"/>
    </main>
    </div>
  );
}
