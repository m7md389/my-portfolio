import React from "react";
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
      <div>
        {portfolioItems.map((item, index) => {
          const isRightImage = index % 2 === 1;
          return (
            <PortfolioItem
              key={item.title}
              {...item}
              isRightImage={isRightImage}
            />
          );
        })}
      </div>
    </Section>
  );
}

function getPortfolioItems(t) {
  const itemsAsStrings = t("portfolio:portfolioItems").split("&&");
  const itemsAsArrays = itemsAsStrings.map((item) => item.split("__"));
  const itemsAsObjects = itemsAsArrays.map((item) => ({
    name: item[0],
    title: item[1],
    about: item[2],
    websiteUrl: item[3],
    githubUrl: item[4],
    image: item[5]
  }));

  return itemsAsObjects;
}
