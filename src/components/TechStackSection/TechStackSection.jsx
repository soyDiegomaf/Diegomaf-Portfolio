import styles from "./TechStackSection.module.css";
import TechBadge from "../TechBadge/TechBadge";

const techStack = [
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "Python",
  "PostgreSQL",
  "Docker",
  "HTML",
  "CSS",
  "Git",
  "Figma",
];

function TechStackSection() {
  return (
    <section className={styles.card}>
      <h2>Tech Stack</h2>
      <div className={styles.stack}>
        {techStack.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>
    </section>
  );
}

export default TechStackSection;