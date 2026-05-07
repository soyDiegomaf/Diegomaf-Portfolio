import styles from './Experience.module.css'

function Experience (){
    return (
        <div id="experience" className={styles.experience}>
          <div className={styles.card}>
            <h1>Experience</h1>
            <div className={styles.experiencecontainer}>
                <div className={styles.type}>
                    <h2>Software Developer & Designer Internship</h2>
                </div>
                <div className={styles.info}>
                    <h2>Pupusas & Grill</h2>
                    <h3>OCTOBER2025 - FEBRUARY 2025</h3>
                    <h4>Remote: Honduras, Tegucigalpa</h4>
                    <p>Designed and Developed a fully operational pos system, with an offline-first approach, designed to help facilitate sales, and manage performance and resources throughout all locations.</p>
                </div>            
            </div>
            <div className={styles.experiencecontainer}>
                <div className={styles.type}>
                    <h2>Web Developer & Designer Freelance</h2>
                </div>
                <div className={styles.info}>
                    <h2>Pupusas & Grill</h2>
                    <h3>APRIL 2023 - APRIL 2025</h3>
                    <h4>Remote: Honduras, Tegucigalpa</h4>
                    <p>Designed and Developed a responsive website for a local restaurant chain, designed to display restaurant locations, and respective menus for each location.</p>
                </div>            
            </div>
            <div className={styles.experiencecontainer}>
                <div className={styles.type}>
                    <h2>Instructor Assistant</h2>
                </div>
                <div className={styles.info}>
                    <h2>UNITEC</h2>
                    <h3>MARCH 2023 - FEBRUARY 2024</h3>
                    <h4>Hybrid: Honduras, Tegucigalpa</h4>
                    <p>At UNITEC I went through 3 programming Labs. Once I completed these labs, I was able to assist the instructors in creating some of the problems that the following students needed to solve. Mainly in Java and C++.</p>
                </div>            
            </div>
          </div>
          <div className={styles.card}>
            <h1>Education</h1>
            <div className={styles.experiencecontainer}>
                <div className={styles.type}>
                    <h2>Bachelor's Degree of Software Engineer</h2>
                </div>
                <div className={styles.info}>
                    <h2>University of Europe for Applied Sciences</h2>
                    <h3>Expected Graduation, JUNE 2026</h3>
                    <h4>Potsdam, Germany</h4>
{/*                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium mollitia, modi rerum veniam quos dignissimos cumque, quas officia maiores in nesciunt. Repudiandae rem ex repellat aliquam incidunt fugit eveniet numquam.</p>*/}
                </div>            
            </div>
          </div>
        </div>
    );
}

export default Experience;