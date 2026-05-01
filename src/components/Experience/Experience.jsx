import styles from './Experience.module.css'

function Experience (){
    return (
        <div id="experience" className={styles.experience}>
          <div className={styles.card}>
            <h1>Experience & Education</h1>
            <div className={styles.experiencecontainer}>
                <div className={styles.type}>
                    <h2>Lorem ipsum</h2>
                </div>
                <div className={styles.info}>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <h3>DATE - DATE</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium mollitia, modi rerum veniam quos dignissimos cumque, quas officia maiores in nesciunt. Repudiandae rem ex repellat aliquam incidunt fugit eveniet numquam.</p>
                </div>            
            </div>
            <div className={styles.experiencecontainer}>
                <div className={styles.type}>
                    <h2>Lorem ipsum</h2>
                </div>
                <div className={styles.info}>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <h3>DATE - DATE</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium mollitia, modi rerum veniam quos dignissimos cumque, quas officia maiores in nesciunt. Repudiandae rem ex repellat aliquam incidunt fugit eveniet numquam.</p>
                </div>            
            </div>
            <div className={styles.experiencecontainer}>
                <div className={styles.type}>
                    <h2>Lorem ipsum</h2>
                </div>
                <div className={styles.info}>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <h3>DATE - DATE</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium mollitia, modi rerum veniam quos dignissimos cumque, quas officia maiores in nesciunt. Repudiandae rem ex repellat aliquam incidunt fugit eveniet numquam.</p>
                </div>            
            </div>
          </div>
        </div>
    );
}

export default Experience;