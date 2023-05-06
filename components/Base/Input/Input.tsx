import { useState } from "react";
import type { FormEvent } from "react";
import { useTranslation } from "next-i18next";
import styles from "./Input.module.scss";

export default function Input({
        labelFor,
        page,
        translationKey,
        colored,
    }:
    { labelFor: string; page: string; translationKey: string, colored?: boolean }) {
    const [active, setActive] = useState(false);
    const handleInputChange = (e: FormEvent) => {
        if ((e.target as HTMLInputElement)?.value) {
            setActive(true);
            return;
        }
        setActive(false);
    }
    const { t } = useTranslation(page);
    return (
        <div className={`
            ${styles.container}
            ${colored ? styles.colored : null}
        `}>
            <label
                    htmlFor={labelFor}
                    className={`
                        ${active ? styles.labelActive : null}
                        ${styles.label}
                    `}
                >
                    {t(translationKey)}
            </label>
            <input
                type="text"
                id={labelFor}
                name={labelFor}
                className={styles.input}
                onInput={handleInputChange}
            />
        </div>
    )
}
