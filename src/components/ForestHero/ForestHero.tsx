import styles from "./ForestHero.module.css";

export function ForestHero() {
  return (
    <section className={styles.section} aria-label="Welcome">
      <div className={styles.content}>
        <p className={styles.eyebrow}>Forest Kindergarten</p>
        <h1 className={styles.heading}>
          Where Children Grow Free with Nature
        </h1>
        <p className={styles.subCopy}>
          A place where little ones discover the world through play, wonder, and
          the magic of the forest.
        </p>
        <div className={styles.ctaRow}>
          <a href="#contact" className={styles.primaryButton}>
            Get in Touch
          </a>
          <a href="#intro" className={styles.secondaryLink}>
            Learn more ↓
          </a>
        </div>
      </div>
    </section>
  );
}
