import home from "content/home.json";
import styles from "../Home.module.scss";
import Section from "./Section";

export default function Sections() {
    return (
        <>
            <Section>
                <div className={styles.sectionInner}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.sectionTitle}>{home["section-one"].title}</h1>
                        <p className={styles.sectionSubtitle}>{home["section-one"].subtitle}</p>
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
                        <h1 className={styles.sectionTitle}>{home["section-two"].title}</h1>
                        <p className={styles.sectionSubtitle}>{home["section-two"].subtitle}</p>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src="home/mobile.jpg" className={styles.image} alt="mobile" />
                        <div className={styles.animationContainer}>
                            <img src="/home/boxshot.png" className={styles.animationImage} alt="boxshot" />
                            <div className={styles.animationText}>
                                <p className={styles.animationTitle}>{home["section-two"].animation.title}</p>
                                <p className={styles.animationSubtitle}>{home["section-two"].animation.subtitle}</p>
                            </div>
                            <div className={styles.animationDownload} />
                        </div>
                    </div>
                </div>
            </Section>
            <Section>
                <div className={styles.sectionInner}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.sectionTitle}>{home["section-three"].title}</h1>
                        <p className={styles.sectionSubtitle}>{home["section-three"].subtitle}</p>
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
                        <h1 className={styles.sectionTitle}>{home["section-four"].title}</h1>
                        <p className={styles.sectionSubtitle}>{home["section-four"].subtitle}</p>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src="home/kids.png" className={styles.image} alt="kids image" />
                    </div>
                </div>
            </Section>
        </>
    )
}
