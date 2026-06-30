import styles from "./ForestFooter.module.css";

const EXPLORE_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Program", href: "/#program" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export function ForestFooter() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <p className={styles.brandName}>ForestGan</p>
            <p className={styles.brandTagline}>
              A forest garden where children grow free with nature.
            </p>
          </div>

          <div>
            <h4 className={styles.colHeading}>Explore</h4>
            <ul className={styles.linkList} role="list">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.footerLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.colHeading}>Contact</h4>
            <ul className={styles.contactList} role="list">
              <li>Forest Lane 12, Nature Valley</li>
              <li>
                <a href="mailto:hello@forestgan.com" className={styles.footerLink}>
                  hello@forestgan.com
                </a>
              </li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2025 ForestGan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
