import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Landing from "../components/Landing";
import Menu from "../components/Menu";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";

export default function Home() {
  const {
    t,
    i18n: { language }
  } = useTranslation();

  return (
    <div dir={getDir(language)}>
      <Head>
        <title>{t("landing:heading")}</title>
        <meta
          name="description"
          content="Mohammad Abd Alrahman's portfolio, created by himself!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu t={t} />

      <Landing heading={t("landing:heading")} tagline={t("landing:tagline")} />

      <Hero
        id="about"
        image={"/images/me.png"}
        heading={t("about:heading")}
        tagline={t("about:tagline")}
        description={t("about:about")}
      />

      <Skills id="technical_skills" t={t} />

      <Portfolio id="portfolio" t={t} />

      <Timeline id={"experience"} t={t} />

      <Timeline id={"education"} t={t} />

      <Contact
        t={t}
        id={"contact"}
        heading={t("contact:heading")}
        tagline={t("contact:tagline")}
      />

      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "navbar",
        "landing",
        "about",
        "portfolio",
        "skills",
        "experience",
        "education",
        "contact"
      ]))
    }
  };
}

function getDir(language) {
  const rtlLanguages = ["he"];
  return rtlLanguages.includes(language) ? "rtl" : "ltr";
}
