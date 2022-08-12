import Head from "next/head";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getMessages, getDir } from "./../services/MessagesService";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Landing from "../components/Landing";
import Menu from "../components/Menu";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";

export default function Home() {
  const { i18n } = useTranslation();

  const [messages, setMessages] = useState(getMessages(i18n.language));

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

      <Hero
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
