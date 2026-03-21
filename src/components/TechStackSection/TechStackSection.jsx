import styles from "./TechStackSection.module.css";
import TechBadge from "../TechBadge/TechBadge";

function TechStackSection() {
    return (
        <div className={styles.card}>
            <h2>Tech Stack</h2>
            <div className={styles.stack}>
                <TechBadge name="TypeScript" icon="fa-brands fa-typescript" color="blue" />
                <TechBadge name="JavaScript" icon="fa-brands fa-js" color="yellow" /> 
                <TechBadge name="CSS" icon="fa-brands fa-css3-alt" color="blue" /> 
                <TechBadge name="HTML" icon="fa-brands fa-html5" color="orange" />
                <TechBadge name="React" icon="fa-brands fa-react" color="cyan" />
                <TechBadge name="Node.js" icon="fa-brands fa-node-js" color="green" />
                <TechBadge name="Python" icon="fa-brands fa-python" color="yellow" />
                <TechBadge name="Docker" icon="fa-brands fa-docker" color="blue" />
                <TechBadge name="PostgreSQL" icon="fa-brands fa-postgresql" color="blue" />
                <TechBadge name="Figma" icon="fa-brands fa-figma" color="red" />
                <TechBadge name="TailwindCSS" icon="fa-brands fa-tailwind-css" color="orange" /> 
            </div>
        </div>
    );
}

export default TechStackSection