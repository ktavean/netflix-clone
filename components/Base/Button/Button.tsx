import styles from "./Button.module.scss";

interface ButtonProps {
    children: JSX.Element | JSX.Element[]
    className?: string
}

export default function Button({ children, className }: ButtonProps) {
    return (
        <span className={`${className} ${styles.button}`}>
            {children}
        </span>
    )
}
