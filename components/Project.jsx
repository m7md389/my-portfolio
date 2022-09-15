import React from "react";
import ExternalLink from "./ExternalLink";
import projectStyles from "../styles/components/Project.module.scss";

export default function Project({
  about,
  github,
  image,
  INITIAL_ANIMATE_DELAY,
  animationDelay,
  isRightImage,
  name,
  stack,
  title,
  website
}) {
  return (
    <div className={projectStyles["project"]}>
      <div
        className={getImageClass(isRightImage)}
        data-aos-delay={animationDelay}
        data-aos="fade-down"
      >
        <img src={image} alt={`Picture of ${title} website`} />
        <div className={projectStyles["image-glow"]}></div>
      </div>
      <div
        className={projectStyles["project-description"]}
        data-aos-delay={animationDelay}
        data-aos="fade-down"
      >
        <h4 className={projectStyles["project-name"]}>{name}</h4>
        <h3 className={projectStyles["project-title"]}>{title}</h3>
        <p className={projectStyles["project-about"]}>{about}</p>
        <p className={projectStyles["project-stack"]}>
          {stack.reduce(
            (text, current, index) =>
              index === stack.length - 1
                ? `${text} ${current}.`
                : `${text} ${current}, `,
            "Stack: "
          )}
        </p>

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
