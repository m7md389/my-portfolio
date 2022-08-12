import React from "react";
import PortfolioItem from "./PortfolioItem";
import Section from "./Section";

export default function Portfolio({ t, id, heading, tagline, projects }) {
  return (
    <Section id={id} heading={heading} tagline={tagline}>
      <div>
        {projects.map((item, index) => {
          const isRightImage = index % 2 === 1;
          return (
            <PortfolioItem
              key={item.title}
              {...item}
              name={item.name}
              title={item.title}
              description={item.description}
              website={item.website}
              github={item.github}
              image={item.image}
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
