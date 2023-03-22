import BaseButton from "@/components/Base/Button/Button";
import home from "content/home.json";
import styles from "./Hero.module.scss";

export default function Form() {
    return (
        <form className={styles.form}>
            <p className={styles.formSubtitle}>{home.hero["subtitle-two"]}</p>
            <div className={styles.formInner}>
                <label htmlFor="email" className={styles.label}>{home.hero.email}</label>
                <input type="text" name="email" className={styles.emailInput} />
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
