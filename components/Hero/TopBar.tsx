import styles from "styles/topbar.module.css";
import BaseLogo from "components/Base/Logo";
import BaseSelect from "components/Base/Select"
import BaseButton from "components/Base/Button";

export default function TopBar() {
    return (
        <div className={styles.container}>
            <BaseLogo />
            <BaseSelect>
                <option>caca</option>
                <option>caca</option>
            </BaseSelect>
            <BaseButton>
                <a href="#">Conectare</a>
            </BaseButton>
        </div>
    )
}