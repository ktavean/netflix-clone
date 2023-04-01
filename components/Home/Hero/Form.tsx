import { useTranslation } from "next-i18next";
import { FormEvent, useState } from "react";
import BaseButton from "@/components/Base/Button/Button";
import styles from "./Hero.module.scss";

export default function Form() {
    const [active, setActive] = useState(false);
    const handleInputChange = (e: FormEvent) => {
        if ((e.target as HTMLInputElement)?.value) {
            setActive(true);
            return;
        }
        setActive(false);
    }
    const { t } = useTranslation("home");
    return (
        <form className={styles.form}>
            <p className={styles.formSubtitle}>{t("hero.subtitle-two")}</p>
            <div className={styles.formInner}>
                <label
                    htmlFor="email"
                    className={`
                        ${active ? styles.labelActive : null}
                        ${styles.label}
                    `}
                >
                    {t("hero.email")}
                </label>
                <input
                    type="text"
                    name="email"
                    className={styles.emailInput}
                    onInput={handleInputChange}
                />
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
