import { useTranslation } from "next-i18next";
import BaseButton from "@/components/Base/Button/Button";
import BaseInput from "@/components/Base/Input/Input";
import styles from "./Hero.module.scss";

export default function Form() {
    const { t } = useTranslation("home");
    return (
        <form className={styles.form}>
            <p className={styles.formSubtitle}>{t("hero.subtitle-two")}</p>
            <div className={styles.formInner}>
                <BaseInput labelFor="email" page="home" translationKey="hero.email" />
                <BaseButton>
                    <div className={styles.buttonInner}>
                        <a href="#">
                            {t("hero.get-started")}
                        </a>
                        <span className={styles.arrow} />
                    </div>
                </BaseButton>
            </div>
        </form>
    )
}
