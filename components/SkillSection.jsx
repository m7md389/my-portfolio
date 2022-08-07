import skillSectionStyles from "../styles/SkillSection.module.scss";

export default function Title({ heading, skills }) {
  return (
    <div className={skillSectionStyles["skills"]}>
      <h2 className={skillSectionStyles["skills-heading"]}>{heading}</h2>
      <ul className={skillSectionStyles["skills-list"]}>
        {skills.map((skill) => (
          <li key={skill} className={skillSectionStyles["skills-item"]}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
