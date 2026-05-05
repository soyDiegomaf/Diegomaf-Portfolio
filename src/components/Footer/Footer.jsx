import styles from './Footer.module.css'

function Footer () {
    return (
        <div className={styles.footer}>
            <div className={styles.card}>
                <h1>contact me</h1>

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
        </div>
    );
}

export default Footer;