import Head from "next/head";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getMessages, getDir } from "./../services/MessagesService";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import About from "../components/sections/About";
import Landing from "../components/sections/Landing";
import Menu from "../components/sections/Menu";
import Portfolio from "../components/sections/Portfolio";
import Skills from "../components/sections/Skills";
import Timeline from "../components/sections/Timeline";

export default function Home() {
  const { i18n } = useTranslation();

  const [messages] = useState(getMessages(i18n.language));

  return (
    <div dir={getDir(i18n.language)}>
      <Head>
        <title>{messages.head.title}</title>
        <meta name="description" content={messages.head.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu messages={messages} />

      <Landing
        heading={messages.landing.name}
        tagline={messages.landing.tagline}
      />

      <About
        id={messages.about.id}
        heading={messages.about.heading}
        tagline={messages.about.tagline}
        description={messages.about.description}
        links={messages.about.links}
        image={messages.about.image}
      />

      <Skills
        id={messages.skills.id}
        heading={messages.skills.heading}
        tagline={messages.skills.tagline}
        skills={messages.skills.skills}
      />

      <Portfolio
        id={messages.portfolio.id}
        heading={messages.portfolio.heading}
        tagline={messages.portfolio.tagline}
        projects={messages.portfolio.projects}
      />

      <Timeline
        id={messages.experience.id}
        heading={messages.experience.heading}
        tagline={messages.experience.tagline}
        timelineEvents={messages.experience.events}
      />

      <Timeline
        id={messages.education.id}
        heading={messages.education.heading}
        tagline={messages.education.tagline}
        timelineEvents={messages.education.events}
      />

      <Contact
        id={messages.contact.id}
        heading={messages.contact.heading}
        tagline={messages.contact.tagline}
        phone={messages.contact.phone}
        email={messages.contact.email}
        links={messages.contact.links}
      />

      <Footer copyright={messages.footer.copyright} />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, []))
    }
  };
}
