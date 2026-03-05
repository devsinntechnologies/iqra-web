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
      
      
<section id="hero" >
  <HeroSection />
</section>


<section id="prayer" >
  <PrayersTime />
</section>

<section id="recitation" >
  <RecitationHub />
</section>

<section id="features" >
  <IslamicFeatures />
</section>

<section id="action" >
  <Action />
</section>

<section id="footer" >
  <Footer />
</section>
    </div>
  );
}