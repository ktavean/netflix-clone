import styles from "styles/button.module.css";

interface ButtonProps {
    children: JSX.Element | JSX.Element[]
    className?: string
}

export default function Button({ children, className }: ButtonProps) {
    return (
        <span className={`${styles.button} ${className}`}>
            {children}
        </span>
    )
}
