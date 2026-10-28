import NeonTrail from "@/components/ui/NeonTrail";
import Navbar from "@/components/Navbar";
import Hero from "@/app/(components)/Hero";
import About from "@/app/(components)/About";
import Skills from "@/app/(components)/Skills";
import Projects from "@/app/(components)/Projects";
import Experience from "@/app/(components)/WorkEx";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <NeonTrail />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
