import Svg from "../Svg/Svg";
import styles from "./SocialMedia.module.css";
import EmailButton from "../Button/EmailButton";

const SocialMedia = () => {
  //const email = process.env.REACT_APP_EMAIL;
  const githubProfileUrl = process.env.REACT_APP_GITHUB_PROFILE;
  const linkedinProfileUrl = process.env.REACT_APP_LINKEDIN_PROFILE;

  return (
    <>
      <div className={styles.socialLinks}>
        <div className={styles.socialLink}>
        <a
          href={githubProfileUrl}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub Profile'
          title="Go Stefie's GitHub">
          <Svg
            symbolId='github'
            className={styles.icon}
            width={40}
            height={40}
          />
          </a></div>
         <div className={styles.socialLink}>
        <a
          href={linkedinProfileUrl}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn Profile'
          title="Go Stefie's LinkedIn">
          <Svg
            symbolId='linkedin'
            className={styles.icon}
            width={40}
            height={40}
          />
        </a></div>
        {/* <a
          href={email}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Email'
          title='Send Stefie email'>
          <div className={styles.emailContainer}>
            <Svg
              symbolId='paperplane2'
              className={styles.icon}
              width={30}
              height={36}
            />
          </div>
        </a> */}
         <div className={styles.socialLink}>
          <EmailButton />
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
