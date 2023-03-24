import styles from "./Hero.module.scss";
import TopBar from "./TopBar";
import Content from "./Content";
import Form from "./Form";

export default function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <img
                    alt="background"
                    src="home/hero-background.jpg"
                    className={styles.background}
                />
                <div className={styles.backgroundEffect} />
                <TopBar />
                <div className={styles.innerWrapper}>
                    <Content />
                    <Form />
                </div>
            </div>
        </div>

    )
}
