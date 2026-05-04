import styles from './Projects.module.css'

function Projects () {
    return (
        <div id="projects" className={styles.projects}>
            <div className={styles.card}>
                <h1>Projects</h1>
                
                <div className={styles.projectsection}>
                <div className={styles.projectcontainer}>
                    <div className={styles.imagesection}>
                        <img src="" alt="project1" />
                    </div>
                    <div className={styles.information}>
                        <h1>Project 1</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium mollitia, modi rerum veniam quos dignissimos cumque, quas officia maiores in nesciunt. Repudiandae rem ex repellat aliquam incidunt fugit eveniet numquam.</p>
                    </div>            
                </div>

                <div className={styles.projectcontainer}>
                    <div className={styles.imagesection}>
                        <img src="" alt="project1" />
                    </div>
                    <div className={styles.information}>
                        <h1>Project 1</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium mollitia, modi rerum veniam quos dignissimos cumque, quas officia maiores in nesciunt. Repudiandae rem ex repellat aliquam incidunt fugit eveniet numquam.</p>
                    </div>            
                </div>

                <div className={styles.projectcontainer}>
                    <div className={styles.imagesection}>
                        <img src="" alt="project1" />
                    </div>
                    <div className={styles.information}>
                        <h1>Project 1</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium mollitia, modi rerum veniam quos dignissimos cumque, quas officia maiores in nesciunt. Repudiandae rem ex repellat aliquam incidunt fugit eveniet numquam.</p>
                    </div>            
                </div>
            </div>
            </div>
        </div>
    );
}

export default Projects;