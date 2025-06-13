import Svg from "../Svg/Svg";
import styles from "./SocialMedia.module.css";
import EmailButton from "../Button/EmailButton";
import InstaGramButton from "../Button/InstaGramButton";

const SocialMedia = () => {
  const githubProfileUrl = process.env.REACT_APP_GITHUB_PROFILE;
  const linkedinProfileUrl = process.env.REACT_APP_LINKEDIN_PROFILE;

  return (
    <div className={styles.socialLinks}>
      <div className={styles.socialLink}>
        <a
          href={githubProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          title="Go Stefie's GitHub"
        >
          <Svg
            symbolId="github"
            className={styles.icon}
            width={35}
            height={35}
          />
        </a>
      </div>
      <div className={styles.socialLink}>
        <a
          href={linkedinProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          title="Go Stefie's LinkedIn"
        >
          <Svg
            symbolId="linkedin"
            className={styles.icon}
            width={35}
            height={35}
          />
        </a>
      </div>
      <div className={styles.socialLink}>
        <EmailButton />
      </div>
      <div className={styles.socialLink}>
        <InstaGramButton />
      </div>
    </div>
  );
};

export default SocialMedia;
