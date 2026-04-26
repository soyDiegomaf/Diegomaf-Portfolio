import styles from "./TechBadge.module.css";

function TechBadge({ name }) {
  return <span className={styles.techBadge}>{name}</span>;
}

export default TechBadge;