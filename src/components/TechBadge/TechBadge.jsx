import styles from "./TechBadge.module.css";

function TechBadge({ name, icon, color }) {
  return (
    <div className={styles.techBadge} id={styles[color]}>
      <i class={icon}></i>
      <p>{name}</p>
    </div>
  );
}

export default TechBadge;