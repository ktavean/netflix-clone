import BaseLogo from "@/components/Base/Logo/Logo";
import BaseSelect from "@/components/Base/Select/Select"
import BaseButton from "@/components/Base/Button/Button";
import styles from "./Hero.module.scss";

export default function TopBar() {
    return (
        <div className={styles.topbarContainer}>
            <BaseLogo />
            <div className={styles.topbarInnerContainer}>
                <BaseSelect>
                    <option>languages here</option>
                    <option>languages here</option>
                </BaseSelect>
                <BaseButton>
                    <a href="#">Sign in</a>
                </BaseButton>
            </div>
        </div>
    )
}
