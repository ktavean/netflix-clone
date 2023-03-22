import styles from "./Select.module.scss";

// eslint-disable-next-line no-unused-vars
export default function Select({ children }: { children: JSX.Element[] }) {
    return (
        <button className={styles.select} type="button">
            <span className={styles.globe} />
            <span className={styles.language}>language</span>
            <span className={styles.selectArrow} />
        </button>
    )
}
