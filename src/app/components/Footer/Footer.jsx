import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.copy}>@mohamed youssef</div>
      <div>
        <ul>
          <li>
            <a href="https://www.facebook.com/people/Mohamed-Youssef/pfbid02orw8aeBUyU2gbpWnziQn6WvHNSbtF5BDfHEqY3nynPaVobhSFwauptBE3MBrQ36bl/">
              <AiFillFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mohamed-youssef11/">
              <AiFillLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/moyoussef11">
              <AiFillGithub />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
