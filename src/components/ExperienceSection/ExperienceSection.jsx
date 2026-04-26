import styles from "./ExperienceSection.module.css";

const experience = [
  {
    type: "Internship",
    title: "Software Developer & Designer Internship",
    place: "Pupusas & Grill",
    date: "OCTOBER2025 - FEBRUARY 2025",
    description:
      "Designed and Developed a fully operational pos system, with an offline-first approach, designed to help facilitate sales, and manage performance and resources throughout all locations.",
  },
  {
    type: "Work",
    title: "Web Developer & Designer",
    place: "Pupusas & Grill",
    date: "APRIL 2023 - APRIL 2025",
    description:
      "Designed and Developed a responsive website for a local restaurant chain, designed to display restaurant locations, and respective menus for each location.",
  },
];

const education = [
  {
    type: "Education",
    title: "Software Engineering Bsc",
    place: "University of Europe for Applied Sciences",
    date: "Expected Graduation: 2026",
    description:
      "Studied...",
  },
];

function ExperienceSection() {
  const items = [...education, ...experience];

  return (
    <section id="experience" className={styles.section}>
      <h2>Experience & Education</h2>
      <div className={styles.timeline}>
        {items.map((item, index) => (
          <article className={styles.item} key={index}>
            <span className={styles.type}>{item.type}</span>

            <div>
              <h3>{item.title}</h3>
              <p className={styles.place}>{item.place}</p>
              <p className={styles.date}>{item.date}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;