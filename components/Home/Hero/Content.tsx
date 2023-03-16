import styles from "styles/content.module.css";
import home from "content/home.json";

export default function Content() {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>{home.hero.title}</h1>
            <p className={styles.subtitle}>{home.hero["subtitle-one"]}</p>
            <p className={styles.subtitle}>{home.hero["subtitle-two"]}</p>
        </div>
    )
}
