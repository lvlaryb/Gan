import type { ValueCardProps } from "./ValueCard.types";
import styles from "./ValueCard.module.css";

export function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrap} aria-hidden="true">
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
