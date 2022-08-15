import React from "react";
import ExternalLink from "./ExternalLink";
import projectStyles from "../styles/components/Project.module.scss";

export default function Project({
  about,
  animateDelay,
  github,
  image,
  INITIAL_ANIMATE_DELAY,
  isRightImage,
  name,
  title,
  website
}) {
  return (
    <div className={projectStyles["project"]}>
      <div
        className={getImageClass(isRightImage)}
        data-aos-delay={animateDelay}
        data-aos={isRightImage ? "fade-right" : "fade-left"}
      >
        <img src={image} alt={`Picture of ${title} website`} />
      </div>
      <div
        className={projectStyles["project-description"]}
        data-aos-delay={animateDelay + INITIAL_ANIMATE_DELAY}
        data-aos={isRightImage ? "fade-left" : "fade-right"}
      >
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
