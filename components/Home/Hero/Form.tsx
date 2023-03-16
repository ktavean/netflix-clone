import styles from "styles/form.module.css";
import BaseButton from "components/Base/Button";
import home from "content/home.json";

export default function Form() {
    return (
        <form className={styles.form}>
            <input type="text" className={styles.emailInput} placeholder={home.hero.email} />
            <BaseButton className={styles.button}>
                <a href="#">
                    {home.hero["get-started"]}
                </a>
                <span className={styles.arrow} />
            </BaseButton>
        </form>
    )
}
