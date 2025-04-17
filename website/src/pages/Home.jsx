import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <HeroSection />
      <HowItWorks />
      <CTASection />
      <Footer />
    </div>
  );
}
