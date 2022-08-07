import React from "react";
import Link from "next/link";
import portfolioItemStyles from "../styles/PortfolioItem.module.scss";

export default function PortfolioItem({
  title,
  about,
  websiteUrl,
  githubUrl,
  image
}) {
  return (
    <div className={portfolioItemStyles["item"]}>
      <div className={portfolioItemStyles["item-image"]}>
        <img src={image} alt={`Picture of ${title} website`} />
      </div>
      <div className={portfolioItemStyles["item-description"]}>
        <h3 className={portfolioItemStyles["item-title"]}>{title}</h3>
        <p className={portfolioItemStyles["item-about"]}>{about}</p>
        {!isEmptyContent(websiteUrl) && (
          <a
            href={websiteUrl}
            className={portfolioItemStyles["item-website"]}
            target="_blank"
          >
            Website
          </a>
        )}
        {!isEmptyContent(githubUrl) && (
          <a
            href={githubUrl}
            className={portfolioItemStyles["item-github"]}
            target="_blank"
          >
            Github Repository
          </a>
        )}
      </div>
    </div>
  );
}

function isEmptyContent(str) {
  return str === "000";
}
