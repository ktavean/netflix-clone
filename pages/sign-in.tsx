import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SignInForm from "@/components/SignIn/Form";
import BaseLogo from "@/components/Base/Logo/Logo";
import styles from "@/components/SignIn/index.module.scss"

export default function signIn() {
    return (
        <div className={styles.container}>
            <BaseLogo className={styles.logo} />
            <div className={styles.content}>
                <SignInForm />
            </div>
        </div>
    )
}

export async function getStaticProps({ locale }: { locale: string}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["home"])),
        },
    };
}
