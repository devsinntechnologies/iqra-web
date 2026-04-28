import HeroSection from "@/app/components/HeroSection";
import PrayersTime from "@/app/components/PrayersTimes";
import RecitationHub from "./components/RecitationHub";
import IslamicFeatures from "./components/IslamicFeatures";
import Action from "./components/Action";

import SideScrollNav from "./components/SideScrollNav";

import PrivacyPolicy from "./privacy-policy/page";

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


{/* <section id="privicy">
 <PrivacyPolicy/>
</section> */}
    </div>
  );
}