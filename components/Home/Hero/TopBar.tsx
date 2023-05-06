import { useTranslation } from "next-i18next";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import BaseLogo from "@/components/Base/Logo/Logo";
import BaseSelect from "@/components/Base/Select/Select"
import BaseButton from "@/components/Base/Button/Button";
import languageStyles from "components/Base/Select/Select.module.scss";
import styles from "./Hero.module.scss";

export default function TopBar() {
    const { locales, locale } = useRouter();
    const languages = {
        en: "English",
        ro: "Română",
    }
    const [visible, setVisible] = useState(false);
    const handleClick = () => {
        setVisible((visibility) => !visibility)
    }
    const { t } = useTranslation("home");
    return (
        <div className={styles.topbarContainer}>
            <BaseLogo />
            <div className={styles.topbarInnerContainer}>
                <BaseSelect language={languages[locale as keyof object]} onClick={handleClick}>
                    <div className={
                        `${languageStyles.languageContainer}
                        ${visible ? languageStyles.languageContainerVisible : null}`
                    }>
                        {locales?.map((lang) => (
                            <Link href="/" locale={lang} key={lang} className={languageStyles.languageOption}>
                                {languages[lang as keyof object]}
                            </Link>
                        ))}
                    </div>
                </BaseSelect>
                <BaseButton>
                    <a href="sign-in">{t("hero.sign-in")}</a>
                </BaseButton>
            </div>
        </div>
    )
}
