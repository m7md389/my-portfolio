import React from "react";
import Link from "next/link";
import portfolioItemStyles from "../styles/PortfolioItem.module.scss";

export default function PortfolioItem({
  name,
  title,
  about,
  websiteUrl,
  githubUrl,
  image,
  isRightImage
}) {
  return (
    <div className={portfolioItemStyles["item"]}>
      <div className={getImageClass(isRightImage)}>
        <img src={image} alt={`Picture of ${title} website`} />
      </div>
      <div className={portfolioItemStyles["item-description"]}>
        <h4 className={portfolioItemStyles["item-name"]}>{name}</h4>
        <h3 className={portfolioItemStyles["item-title"]}>{title}</h3>
        <p className={portfolioItemStyles["item-about"]}>{about}</p>
        {!isEmptyContent(websiteUrl) && (
          <a
            href={websiteUrl}
            className={portfolioItemStyles["item-link"]}
            target="_blank"
          >
            Website
          </a>
        )}
        {!isEmptyContent(githubUrl) && (
          <a
            href={githubUrl}
            className={portfolioItemStyles["item-link"]}
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

function getImageClass(isRightImage) {
  const constClass = portfolioItemStyles["item-image"];
  const conditionalClass = ` ${portfolioItemStyles["right"]}`;
  return isRightImage ? constClass + conditionalClass : constClass;
}
