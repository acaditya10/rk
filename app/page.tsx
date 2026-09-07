import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import FeaturedProject from "@/components/FeaturedProject";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import ExperienceCentre from "@/components/ExperienceCentre";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <FeaturedProject />
        <Process />
        <WhyChooseUs />
        <Portfolio />
        <BeforeAfter />
        <Testimonials />
        <ExperienceCentre />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
