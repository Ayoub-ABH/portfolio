"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import { useLoader } from "@/hooks/useLoader";
import About from "@/components/About";
// import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import ProjectsComingSoon from "@/components/ProjectsComingSoon";
import Contact from "@/components/Contact";
import JourneyTimeline from "@/components/JourneyTimeline";

export default function Home() {
  const isLoading = useLoader();
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Hero />
          <About />
          <ProjectsComingSoon />
          <JourneyTimeline />
          {/* <Projects /> */}
          <Blog />
          <Contact />
        </>
      )}
    </>
  );
}
