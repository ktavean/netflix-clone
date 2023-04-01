import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "components/Home/Home.module.scss";
import Head from "next/head"
import Hero from "components/Home/Hero";
import Sections from "components/Home/Sections"

export default function Home() {
    return (
        <>
        <Head>
            <title>Netflix</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.home}>
            <Hero />
            <Sections />
        </main>
        </>
    )
}
export async function getStaticProps({ locale }: { locale: string}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["home"])),
        },
    };
}
