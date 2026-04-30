import styles from './TechStack.module.css'

function TechStack() {
    const languages = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Java', 'Python', 'SQL', 'PostgreSQL'];
    const frameworks = ['React', 'Node.js', 'TailwindCSS', 'TensorFlow', 'Spring Boot', 'Electron', 'OpenCV', 'Express'];
    const tools =['Git', 'Figma', 'AWS', 'Docker', 'Vercel', 'Render'];
    const platforms = ['Windows', 'Linux', 'Mac'];

    return (
       <div className={styles.techbadges}>
        <div className={styles.card}>
            {languages.map((language, index) => (
                <div key={index} className={styles.techcontainer}>
                    {language}
               </div>
            ))}

            {frameworks.map((framework, index) => (
                <div key={index} className={styles.techcontainer}>
                    {framework}
                </div>
            ))}

            {tools.map((tool, index) => (
                <div key={index} className={styles.techcontainer}>
                    {tool}
                </div>
            ))}

            {platforms.map((platform, index) => (
                <div key={index} className={styles.techcontainer}>
                    {platform}
                </div>
            ))}
        </div>
       </div>
    );
}

export default TechStack;