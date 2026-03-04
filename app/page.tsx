import HeroSection from "@/app/components/HeroSection";
import PrayersTime from "@/app/components/PrayersTimes";
import RecitationHub from "./components/RecitationHub";
import IslamicFeatures from "./components/IslamicFeatures";
import Action from "./components/Action";
import Footer from "./components/Footer";
import SideScrollNav from "./components/SideScrollNav";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>

      {/* Side Dots Navigation */}
      <SideScrollNav />
      
<section id="hero" className="h-screen">
  <HeroSection />
</section>


<section id="prayer" className="h-screen">
  <PrayersTime />
</section>

<section id="recitation" className="h-screen">
  <RecitationHub />
</section>

<section id="features" className="h-screen">
  <IslamicFeatures />
</section>

<section id="action" className="h-screen">
  <Action />
</section>

<section id="footer" className="h-screen">
  <Footer />
</section>
    </div>
  );
}