import style from './AboutSection.module.css'

function AboutSection() {
  return (
    <section id="home" className={style.card}>
        <h1>Diego M. Andino Fiallos</h1>
        <h2>Software Engineer</h2>
        <p>Berlin, Germany</p>
        <div className="links">
          <div>
            <a href="">
              <img src="/assets/cv.png" alt="CV " />
              <p>Download CV</p>
            </a>
          </div>
          <a href="">
            <img src="/assets/linkedin.png" alt="LinkedIn " />
          </a>
          <a href="">
            <img src="/assets/github.png" alt="GitHub " />
          </a>
          <a href="">
            <img src="/assets/mail.png" alt="Email " />
          </a>
        </div>
    </section>
  )
}

export default AboutSection