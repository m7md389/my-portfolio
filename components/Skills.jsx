import skillsStyles from "../styles/Skills.module.scss";
import Section from "./Section";
import SkillSection from "./SkillSection";

export default function Skills({ t, id, heading, tagline, skills }) {
  return (
    <Section id={id} heading={heading} tagline={tagline}>
      <ul className={skillsStyles["skills"]}>
        {skills.map((skill) => (
          <SkillSection
            key={skill.name}
            heading={skill.name}
            skills={skill.list}
          />
        ))}
      </ul>
    </Section>
  );
}
