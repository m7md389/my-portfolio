import React from "react";
import ExternalLink from "./ExternalLink";
import projectStyles from "../styles/Project.module.scss";

export default function Project({
  name,
  title,
  about,
  website,
  github,
  image,
  isRightImage
}) {
  return (
    <div className={projectStyles["project"]}>
      <div className={getImageClass(isRightImage)}>
        <img src={image} alt={`Picture of ${title} website`} />
      </div>
      <div className={projectStyles["project-description"]}>
        <h4 className={projectStyles["project-name"]}>{name}</h4>
        <h3 className={projectStyles["project-title"]}>{title}</h3>
        <p className={projectStyles["project-about"]}>{about}</p>
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
  const constClass = projectStyles["project-image"];
  const conditionalClass = ` ${projectStyles["right"]}`;
  return isRightImage ? constClass + conditionalClass : constClass;
}
