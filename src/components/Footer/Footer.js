import React from "react";
import cn from "classnames";

import styles from "./Footer.module.css";
import footerLogo from "./footerLogo.svg";

const LINKS = [
  { title: "Shipping Policy", link: "/shipping-policy" },
  { title: "Payment Methods", link: "/payment-methods" },
  { title: "Transparency", link: "/transparency" },
];

const SOCIAL_LINKS = [
  { key: "fb", title: "facebook", link: "/" },
  { key: "inst", title: "instagram", link: "/" },
  { key: "tw", title: "twitter", link: "/" },
  { key: "gh", title: "github", link: "/" },
  { key: "in", title: "linked in", link: "/" },
  { key: "yt", title: "youtube", link: "/" },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.logoWrapper}>
          <a href="/" className={styles.logo}>
            <img
              className={styles.img}
              src={footerLogo}
              alt="Arduino"
              width="113"
              height="15"
            />
          </a>
        </div>
        <div className={styles.btnsWrapper}>
          <button className={styles.region} type="button">
            Region
          </button>
          <a href="/" className={styles.toTop}>
            Back to top
          </a>
        </div>
      </div>
      <div className={styles.middle}>
        <ul className={styles.infoMenu}>
          {LINKS.map(({ title, link }, idx) => (
            <li className={styles.infoMenu__item} key={`${idx}-${title}`}>
              <a className={styles.infoMenu__link} href={link}>
                {title}
              </a>
            </li>
          ))}
        </ul>
        <form action="#" method="POST" className={styles.subscribe}>
          <div>
            <h2 className={styles.title}>newsletter</h2>
            <input
              className={styles.input}
              type="email"
              name="subscribeEmail"
              placeholder="Enter your email to sign up"
              required
            />
            <button
              className={styles.subscribeButton}
              type="submit"
              onClick={(evt) => evt.preventDefault()}
            >
              subscribe
            </button>
          </div>
        </form>
        <div className={styles.socialWrapper}>
          <h2 className={styles.title}>follow us</h2>
          <ul className={styles.socialList}>
            {SOCIAL_LINKS.map(({ key, title, link }) => (
              <li className={styles.socialItem} key={key}>
                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                <a
                  className={cn(styles.socialLink, styles[key])}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} Arduino</p>
      </div>
    </footer>
  );
};

export default Footer;
