import styles from "styles/home.module.scss";

export default function Section({ children }: { children: JSX.Element[] }) {
    return (
        <section className={styles.section}>
            {children}
        </section>
    )
}
