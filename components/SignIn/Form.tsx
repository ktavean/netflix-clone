import type { FormEvent } from "react";
import BaseInput from "@/components/Base/Input/Input";
import BaseButton from "@/components/Base/Button/Button";
import styles from "./Form.module.scss";

export default function Form() {
    const login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(form.entries());
        const response = await fetch("/api/user", {
            method: "POST",
            body: JSON.stringify(data),
        });
        console.log(await response.json());
    }
    return (
        <form className={styles.form} method="POST" onSubmit={login}>
            <h1 className={styles.title}>Sign In</h1>
            <BaseInput colored={true} labelFor="email" page="home" translationKey="hero.email" />
            <BaseInput colored={true} labelFor="password" page="home" translationKey="hero.email" />
            <BaseButton className={styles.buttonWrapper}>
                <button className={styles.button}>Sign In</button>
            </BaseButton>
        </form>
    )
}
