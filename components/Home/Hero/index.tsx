import { useTranslation } from "next-i18next";
import styles from "./Hero.module.scss";
import TopBar from "./TopBar";
import Content from "./Content";
import Form from "./Form";

export default function Hero() {
    const { t } = useTranslation("home")
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <img
                    alt="background"
                    src={t("hero.background") as string}
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
