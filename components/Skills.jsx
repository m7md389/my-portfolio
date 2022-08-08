import skillsStyles from "../styles/Skills.module.scss";
import Section from "./Section";
import SkillSection from "./SkillSection";

export default function Skills({ t, id }) {
  const skills = [];
  skills.push(getSkills(t("skills:frameworks")));
  skills.push(getSkills(t("skills:clientSide")));
  skills.push(getSkills(t("skills:serverSide")));
  skills.push(getSkills(t("skills:tools")));
  skills.push(getSkills(t("skills:programmingLanguages")));

  return (
    <Section
      id={id}
      heading={t("skills:heading")}
      tagline={t("skills:tagline")}
    >
      <ul className={skillsStyles["skills"]}>
        {skills.map((skill) => (
          <SkillSection
            key={skill.heading}
            heading={skill.heading}
            skills={skill.list}
          />
        ))}
      </ul>
    </Section>
  );
}

function getSkills(skillsString) {
  const skillsArray = skillsString.split("__");
  const [heading, ...list] = skillsArray;

  return { heading, list };
}
