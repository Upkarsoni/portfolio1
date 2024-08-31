import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import instaLight from '../../assets/icons8-instagram.svg';
import instaDark from '../../assets/icons8-instagram-circle.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const instaIcon = theme === 'light' ? instaLight : instaDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          UPKAR
          <br />
          SONI
        </h1>
        <h2>COMPUTER SCIENCE STUDENT </h2>
        <span>
          <a href="https://www.instagram.com/invites/contact/?igsh=18lbibmkhkv1p&utm_content=i5e9q7" target="_blank">
            <img src={instaIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/Upkarsoni" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/upkar-soni-505390268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          PROGRAM : BTECH IN COMPUTER SCIENCE<br/><br/>
          COLLEGE : SHRI VAISHNAV VIDYAPEETH VISHWAVIDYALAYA , INDORE
        </p>
       
      </div>
    </section>
  );
}

export default Hero;
