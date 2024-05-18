import Svg from "../Svg/Svg";
import styles from "./SocialMedia.module.css";

const SocialMedia = () => {
    const email = process.env.REACT_APP_EMAIL;
    const githubProfileUrl = process.env.REACT_APP_GITHUB_PROFILE;
    const linkedinProfileUrl = process.env.REACT_APP_LINKEDIN_PROFILE;
    return(
    <>
        <div className={styles.socialLinks}>
                            <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" title="Go Stefie's GitHub">
                                <Svg symbolId="github" className={styles.icon} />
                            </a>
                            <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" title="Go Stefie's LinkedIn">
                                <Svg symbolId="linkedin" className={styles.icon} />
                            </a>
                            <a href={email} target="_blank" rel="noopener noreferrer" aria-label="Email" title="Send Stefie email">
                                <Svg symbolId="homePaperplane" className={styles.icon} />
                            </a>
                        </div>
        </>
    )
};

export default SocialMedia;