import styles from "../styles/hero.module.css";
import TopBar from "./Hero/TopBar";

export default function Hero() {
    return (
        <div className={styles.container}>
            <TopBar />
            <div className={styles.background} />
        </div>
    )
}