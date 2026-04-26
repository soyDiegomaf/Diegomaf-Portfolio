import styles from "./AboutSection.module.css";

function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>//////////////</p>

        <h1>Diego M. Andino F.</h1>
        <h2>Software Engineer</h2>

        <p className={styles.location}>Berlin, Germany</p>

        <div className={styles.links}>
          <a className={styles.resumeButton} href="/Diego-Andino-Resume.pdf" download>
            <i className="fa-solid fa-file-arrow-down"></i>
            <span>Resume</span>
          </a>

          <a href="" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          <a href="" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>

          <a href="mailto:your-email@example.com" aria-label="Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
