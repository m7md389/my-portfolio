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
        setCurrentSection={setCurrentSection}
        messages={messages}
        _handleNavigate={handleNavigate}
        id={messages.landing.id}
        setSectionRef={setSectionRef}
        heading={messages.landing.name}
        tagline={messages.landing.tagline}
      />

      <About
        INITIAL_ANIMATE_DELAY={INITIAL_ANIMATE_DELAY}
        id={messages.about.id}
        setSectionRef={setSectionRef}
        heading={messages.about.heading}
        tagline={messages.about.tagline}
        description={messages.about.description}
        links={messages.about.links}
        image={messages.about.image}
      />

      <Skills
        INITIAL_ANIMATE_DELAY={INITIAL_ANIMATE_DELAY}
        id={messages.skills.id}
        setSectionRef={setSectionRef}
        heading={messages.skills.heading}
        tagline={messages.skills.tagline}
        skills={messages.skills.skills}
      />

      <Portfolio
        INITIAL_ANIMATE_DELAY={INITIAL_ANIMATE_DELAY}
        id={messages.portfolio.id}
        setSectionRef={setSectionRef}
        heading={messages.portfolio.heading}
        tagline={messages.portfolio.tagline}
        projects={messages.portfolio.projects}
      />

      <Timeline
        INITIAL_ANIMATE_DELAY={INITIAL_ANIMATE_DELAY}
        id={messages.experience.id}
        setSectionRef={setSectionRef}
        heading={messages.experience.heading}
        tagline={messages.experience.tagline}
        timelineEvents={messages.experience.events}
      />

      <Timeline
        INITIAL_ANIMATE_DELAY={INITIAL_ANIMATE_DELAY}
        id={messages.education.id}
        setSectionRef={setSectionRef}
        heading={messages.education.heading}
        tagline={messages.education.tagline}
        timelineEvents={messages.education.events}
      />

      <Contact
        INITIAL_ANIMATE_DELAY={INITIAL_ANIMATE_DELAY}
        id={messages.contact.id}
        setSectionRef={setSectionRef}
        heading={messages.contact.heading}
        tagline={messages.contact.tagline}
        phone={messages.contact.phone}
        email={messages.contact.email}
        links={messages.contact.links}
      />

      <Footer
        setSectionRef={setSectionRef}
        copyright={messages.footer.copyright}
      />
    </div>
  );
}
