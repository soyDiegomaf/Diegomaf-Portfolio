import style from './AboutSection.module.css'

function AboutSection() {
  return (
    <section id="home" className={style.card}>
      <h1>Diego M. Andino F.</h1>
      <h2>Software Engineer</h2>
      <p>Berlin, Germany</p>
      <div className={style.links}>
        <div className={style.cv}>
          <a href="">
            <i class="fa-solid fa-file-arrow-down"></i>
            <p>Resume</p>
          </a>
        </div>
        <a href="">
          <i class="fa-brands fa-linkedin-in"></i>        
        </a>
        <a href="">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
    </section>
  )
}

export default AboutSection