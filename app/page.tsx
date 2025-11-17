import Link from "next/link";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Research } from "./components/Research";
import { Experience } from "./components/Experience";
import { Entrepreneurship } from "./components/Entrepreneurship";
import { Awards } from "./components/Awards";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <main className="relative">
      {/* Design Toggle */}
      <Link 
        href="/minimal"
        className="fixed top-8 right-8 z-50 px-4 py-2 bg-[#F5F1E8] hover:bg-[#D99D24] border border-[#D99D24] text-[#2C2520] hover:text-white text-sm font-medium transition-all shadow-md"
      >
        → Minimal Design
      </Link>
      
      <Hero />
      <About />
      <Research />
      <Experience />
      <Entrepreneurship />
      <Awards />
      <Skills />
      <Contact />
    </main>
  );
}
