import React from "react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { getMessages, getDir } from "./../services/MessagesService";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import Portfolio from "../components/sections/Portfolio";
import Skills from "../components/sections/Skills";
import Timeline from "../components/sections/Timeline";

export default function Home() {
  const INITIAL_ANIMATE_DELAY = 300;
  const language = "en";
  const [messages] = useState(getMessages(language));

  const sectionsRef = {};
  const setSectionRef = (sectionName, sectionRef) => {
    sectionsRef[sectionName] = sectionRef;
  };
  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    if (currentSection) {
      currentSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentSection]);

  const handleNavigate = (section) => {
    setCurrentSection(sectionsRef[section]);
  };
  return (
    <div dir={getDir(language)}>
      <Head>
        <title>{messages.head.title}</title>
        <meta name="description" content={messages.head.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        _handleNavigate={handleNavigate}
        heading={messages.landing.name}
        id={messages.landing.id}
        messages={messages}
        setCurrentSection={setCurrentSection}
        setSectionRef={setSectionRef}
        tagline={messages.landing.tagline}
      />

      <About
        description={messages.about.description}
        heading={messages.about.heading}
        id={messages.about.id}
        image={messages.about.image}
        INITIAL_ANIMATE_DELAY={INITIAL_ANIMATE_DELAY}
        links={messages.about.links}
        setSectionRef={setSectionRef}
        tagline={messages.about.tagline}
      />

      <Skills
        heading={messages.skills.heading}
        id={messages.skills.id}
        INITIAL_ANIMATE_DELAY={INITIAL_ANIMATE_DELAY}
        setSectionRef={setSectionRef}
        skills={messages.skills.skills}
        tagline={messages.skills.tagline}
      />

      <Portfolio
        heading={messages.portfolio.heading}
        id={messages.portfolio.id}
        INITIAL_ANIMATE_DELAY={INITIAL_ANIMATE_DELAY}
        projects={messages.portfolio.projects}
        setSectionRef={setSectionRef}
        tagline={messages.portfolio.tagline}
      />

      <Timeline
        heading={messages.experience.heading}
        id={messages.experience.id}
        INITIAL_ANIMATE_DELAY={INITIAL_ANIMATE_DELAY}
        setSectionRef={setSectionRef}
        tagline={messages.experience.tagline}
        timelineEvents={messages.experience.events}
      />

      <Timeline
        heading={messages.education.heading}
        id={messages.education.id}
        INITIAL_ANIMATE_DELAY={INITIAL_ANIMATE_DELAY}
        setSectionRef={setSectionRef}
        tagline={messages.education.tagline}
        timelineEvents={messages.education.events}
      />

      <Contact
        email={messages.contact.email}
        heading={messages.contact.heading}
        id={messages.contact.id}
        INITIAL_ANIMATE_DELAY={INITIAL_ANIMATE_DELAY}
        links={messages.contact.links}
        phone={messages.contact.phone}
        setSectionRef={setSectionRef}
        tagline={messages.contact.tagline}
      />

      <Footer
        copyright={messages.footer.copyright}
        setSectionRef={setSectionRef}
      />
    </div>
  );
}
