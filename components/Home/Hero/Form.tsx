import { FormEvent, useState } from "react";
import BaseButton from "@/components/Base/Button/Button";
import home from "content/home.json";
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
    return (
        <form className={styles.form}>
            <p className={styles.formSubtitle}>{home.hero["subtitle-two"]}</p>
            <div className={styles.formInner}>
                <label
                    htmlFor="email"
                    className={`
                        ${active ? styles.labelActive : null}
                        ${styles.label}
                    `}
                >
                    {home.hero.email}
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
                            {home.hero["get-started"]}
                        </a>
                        <span className={styles.arrow} />
                    </div>
                </BaseButton>
            </div>
        </form>
    )
}
