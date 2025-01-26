import Image from "next/image";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Misc/Spacing";
import { Summary } from "./_components/Summary";
import { About } from "./_components/About";
import { Footer } from "./_components/Footer";
import { Experience } from "./_components/Experience";
import { Projects } from "./_components/Projects";
import { Skills } from "./_components/Skills";
import { Contact } from "./_components/Contact";
import { Publications } from "./_components/Publications";
import { HAIP } from "./_components/Icons/HAIP";

const height = 45;

export default function Home() {
  return (
    <main>
      <Header />

      <Spacing height={height} />

      <Hero />

      <Spacing height={height} />

      {/* <Summary />

      <Spacing height={height} /> */}

      <About />

      <Spacing height={height} />

      <Experience />

      <Spacing height={height} />

      <Projects />

      <Spacing height={height} />

      <Skills />

      <Spacing height={height} />

      <Publications />

      <Spacing height={height} />

      <Contact />

      <Spacing height={height} />

      <Footer />
    </main>
  );
}
