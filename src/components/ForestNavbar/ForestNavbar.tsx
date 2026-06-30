import styles from "./ForestNavbar.module.css";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Program", href: "/#program" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export function ForestNavbar() {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          ForestGan
        </a>
        <ul className={styles.links} role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
