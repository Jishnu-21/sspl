import Header from "./Header";
import Banner from "./Banner";
import ServicesSection from "./ServicesSection";
import WhyChooseSection from "./WhyChooseSection";
import StatsSection from "./StatsSection";
import ClientMarquee from "./components/ClientMarquee";
import CaseStudiesSection from "./FeaturedProjectsSection";
import RecognitionSection from "./RecognitionSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header/>
      <main className="pt-0">
        <Banner/>
        <ServicesSection/>
        <WhyChooseSection/>
        <StatsSection/>
        <ClientMarquee/>
        <div className="bg-white pt-25"><CaseStudiesSection/></div>
        <RecognitionSection/>
        <CTASection/>
      </main>
      <Footer/>
    </div>
  );
}
