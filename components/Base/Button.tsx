import styles from "styles/button.module.css";

export default function Button({ children }: { children : JSX.Element }) {
    return (
        <span className={styles.button}>
            {children}
        </span>
    )
}