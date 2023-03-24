import home from "content/home.json";
import styles from "./Hero.module.scss";

export default function Content() {
    return (
        <div className={styles.contentContainer}>
            <h1 className={styles.header}>{home.hero.title}</h1>
            <p className={styles.subtitle}>{home.hero["subtitle-one"]}</p>
        </div>
    )
}
