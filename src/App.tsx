/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { HeroSlider } from "./components/HeroSlider";
import { AboutUs } from "./components/AboutUs";
import { CorePillars } from "./components/CorePillars";
import { Products } from "./components/Products";
import { VideoSection } from "./components/VideoSection";
import { Clients } from "./components/Clients";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      
      <main>
        <HeroSlider />
        <AboutUs />
        <CorePillars />
        <Products />
        <VideoSection />
        <Clients />
      </main>

      <Footer />
    </div>
  );
}


