import skillSectionStyles from "../styles/SkillSection.module.scss";

export default function Title({ heading, skills }) {
  return (
    <li className={skillSectionStyles["skills"]}>
      <h3 className={skillSectionStyles["skills-heading"]}>{heading}</h3>
      <ul className={skillSectionStyles["skills-list"]}>
        {skills.map((skill) => (
          <li key={skill} className={skillSectionStyles["skills-item"]}>
            {skill}
          </li>
        ))}
      </ul>
    </li>
  );
}
