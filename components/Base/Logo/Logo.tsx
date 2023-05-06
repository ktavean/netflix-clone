import Link from "next/link"
import styles from "./Logo.module.scss"

export default function Logo({ className }: { className?: string }) {
    return <Link href="/" className={`${className} ${styles.logo}`} />
}
