import styles from "styles/hero.module.css";
import TopBar from "./TopBar";
import Content from "./Content";
import Form from "./Form";

export default function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <img
                    alt="background"
                    src="/home/hero-background.jpg"
                    className={styles.background}
                />
                <div className={styles.backgroundEffect} />
                <TopBar />
                <Content />
                <Form />
            </div>
        </div>

    )
}
