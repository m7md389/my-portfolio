import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Menu from "../components/Menu";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Skills from "../components/Skills";
import React from "react";
import Portfolio from "../components/Portfolio";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
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
        "skills"
      ]))
    }
  };
}
