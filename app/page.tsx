"use client";

import {Contact} from "@/app/_component/contact";
import {Projects} from "@/app/_component/projects";
import {About} from "@/app/_component/about";
import {Navigation} from "@/app/_component/navigation";
import {Footer} from "@/app/_component/footer";
import {Hero} from "@/app/_component/hero";

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-800">
      {/* Navigation */}
        <Navigation/>

      {/* Hero Section */}
        <Hero/>

      {/* About Section */}
        <About/>

      {/* Projects Section */}
        <Projects/>

      {/* Contact Section */}
        <Contact/>

      {/* Footer */}
        <Footer/>
    </div>
  );
}