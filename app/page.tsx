import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import BrandScroller from "@/components/BrandScroller";
import Problem from "@/components/Problem";
import WhyAtce from "@/components/WhyAtce";
import Offer from "@/components/Offer";
import Projects from "@/components/Projects";
import Guarantees from "@/components/Guarantees";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Solution />
        <Services />
        <BrandScroller />
        <Problem />
        <WhyAtce />
        <Projects />
        <Offer />
        <Guarantees />
        <Faq />
        <Cta />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
