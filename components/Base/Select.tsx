import styles from "styles/select.module.css";

export default function Select({ children }: { children: JSX.Element[] }) {
    return (
        <button className={styles.select} type="button">
            <span className={styles.globe} />
            <span className={styles.language}>language</span>
            <span className={styles.selectArrow} />
        </button>
    )
}

