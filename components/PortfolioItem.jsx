import React from "react";
import ExternalLink from "./ExternalLink";
import portfolioItemStyles from "../styles/PortfolioItem.module.scss";

export default function PortfolioItem({
  name,
  title,
  about,
  website,
  github,
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
        {website && (
          <ExternalLink href={website.link} uppercase>
            {website.name}
          </ExternalLink>
        )}
        {github && (
          <ExternalLink href={github.link} uppercase>
            {github.name}
          </ExternalLink>
        )}
      </div>
    </div>
  );
}

function getImageClass(isRightImage) {
  const constClass = portfolioItemStyles["item-image"];
  const conditionalClass = ` ${portfolioItemStyles["right"]}`;
  return isRightImage ? constClass + conditionalClass : constClass;
}
