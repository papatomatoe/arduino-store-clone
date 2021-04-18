import React from "react";

import Logo from "../Logo";
import RegionsButton from "../RegionsButton";
import ToTop from "../ToTop";
import InfoMenu from "../InfoMenu";
import Subscribe from "../Subscribe";

import styles from "./Footer.module.css";
import footerLogo from "./footerLogo.svg";
import SocialMenu from "../SocialMenu";

import { INFO_LINKS, SOCIAL_LINKS } from "../../constants/footer";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.logoWrapper}>
          <Logo img={footerLogo} alt="Arduino store" />
        </div>
        <div className={styles.btnsWrapper}>
          <RegionsButton />
          <ToTop />
        </div>
      </div>
      <div className={styles.middle}>
        <InfoMenu links={INFO_LINKS} />
        <Subscribe />
        <SocialMenu links={SOCIAL_LINKS} />
      </div>
      <div className={styles.bottom}>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} Arduino</p>
      </div>
    </footer>
  );
};

export default Footer;
