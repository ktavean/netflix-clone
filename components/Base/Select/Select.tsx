import styles from "./Select.module.scss";

// eslint-disable-next-line no-unused-vars
export default function Select({ children, language, onClick }:
    { children: JSX.Element, language: string, onClick: MouseEventHandler<HTMLButtonElement> }) {
    return (
        <button className={styles.select} type="button" onClick={onClick}>
            <span className={styles.globe} />
            <span className={styles.language}>{language}</span>
            <span className={styles.selectArrow} />
            {children}
        </button>
    )
}
