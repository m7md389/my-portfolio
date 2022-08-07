import React from "react";
import portfolioStyles from "../styles/Portfolio.module.scss";
import PortfolioItem from "./PortfolioItem";
import Section from "./Section";

export default function Portfolio({ t, id }) {
  let portfolioItems = getPortfolioItems(t);

  return (
    <Section
      id={id}
      heading={t("portfolio:heading")}
      tagline={t("portfolio:tagline")}
    >
      <div className={portfolioStyles["portfolioItems"]}>
        {portfolioItems.map((item) => (
          <PortfolioItem key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}

function getPortfolioItems(t) {
  const itemsAsStrings = t("portfolio:portfolioItems").split("&&");
  const itemsAsArrays = itemsAsStrings.map((item) => item.split("__"));
  const itemsAsObjects = itemsAsArrays.map((item) => ({
    title: item[0],
    about: item[1],
    websiteUrl: item[2],
    githubUrl: item[3],
    image: item[4]
  }));

  return itemsAsObjects;
}
