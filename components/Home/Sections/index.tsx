import { useTranslation } from "next-i18next";
import styles from "../Home.module.scss";
import Section from "./Section";

export default function Sections() {
    const { t } = useTranslation("home");
    return (
        <>
            <Section>
                <div className={styles.sectionInner}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.sectionTitle}>{t("section-one.title")}</h1>
                        <p className={styles.sectionSubtitle}>{t("section-one.subtitle")}</p>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src="home/tv.png" className={styles.image} alt="tv" />
                        <video autoPlay playsInline muted loop className={styles.video}>
                            <source src="home/video-tv.m4v" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </Section>
            <Section>
                <div className={styles.sectionInner}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.sectionTitle}>{t("section-two.title")}</h1>
                        <p className={styles.sectionSubtitle}>{t("section-two.subtitle")}</p>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src="home/mobile.jpg" className={styles.image} alt="mobile" />
                        <div className={styles.animationContainer}>
                            <img src="home/boxshot.png" className={styles.animationImage} alt="boxshot" />
                            <div className={styles.animationText}>
                                <p className={styles.animationTitle}>{t("section-two.animation.title")}</p>
                                <p className={styles.animationSubtitle}>{t("section-two.animation.subtitle")}</p>
                            </div>
                            <div className={styles.animationDownload} />
                        </div>
                    </div>
                </div>
            </Section>
            <Section>
                <div className={styles.sectionInner}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.sectionTitle}>{t("section-three.title")}</h1>
                        <p className={styles.sectionSubtitle}>{t("section-three.subtitle")}</p>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src="home/device-pile.png" className={styles.image} alt="device-pile" />
                        <div className={styles.videoContainer}>
                            <video autoPlay playsInline muted loop>
                                <source src="home/video-devices.m4v" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </Section>
            <Section>
                <div className={styles.sectionInner}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.sectionTitle}>{t("section-four.title")}</h1>
                        <p className={styles.sectionSubtitle}>{t("section-four.subtitle")}</p>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src="home/kids.png" className={styles.image} alt="kids image" />
                    </div>
                </div>
            </Section>
        </>
    )
}
