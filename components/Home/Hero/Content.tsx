import { useTranslation } from "next-i18next";
import styles from "./Hero.module.scss";

export default function Content() {
    const { t } = useTranslation("home");
    return (
        <div className={styles.contentContainer}>
            <h1 className={styles.header}>{t("hero.title")}</h1>
            <p className={styles.subtitle}>{t("hero.subtitle-one")}</p>
        </div>
    )
}
