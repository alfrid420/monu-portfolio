import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { TechStack } from "@/components/tech-stack";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
