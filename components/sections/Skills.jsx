import Section from "../Section";
import Skill from "../Skill";
import skillsStyles from "../../styles/Skills.module.scss";

export default function Skills({ t, id, heading, tagline, skills }) {
  return (
    <Section id={id} heading={heading} tagline={tagline}>
      <ul className={skillsStyles["skills"]}>
        {skills.map((skill) => (
          <Skill key={skill.name} heading={skill.name} skills={skill.list} />
        ))}
      </ul>
    </Section>
  );
}
