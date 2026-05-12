import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import WhyAtce from "@/components/WhyAtce";
import Offer from "@/components/Offer";
import Process from "@/components/Process";
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
        <Problem />
        <Solution />
        <WhyAtce />
        <Offer />
        <Process />
        <Projects />
        <Guarantees />
        <Faq />
        <Cta />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
