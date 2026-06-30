import styles from "./ForestIntro.module.css";

export function ForestIntro() {
  return (
    <section id="intro" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>About ForestGan</p>
          <h2 className={styles.heading}>A Different Kind of Kindergarten</h2>
          <p className={styles.body}>
            ForestGan is a forest kindergarten nestled in nature, where children
            aged 3–6 spend their days exploring, building, and imagining in a
            natural setting. Rather than a traditional classroom, the forest
            itself is our learning space.
          </p>
          <p className={styles.body}>
            We believe that children learn best when they are free to move, take
            risks, and engage with the natural world at their own pace. Our
            small group of educators guides and supports — but the forest leads
            the way.
          </p>
        </div>
        <div className={styles.imagePlaceholder} aria-hidden="true">
          <span className={styles.placeholderIcon}>🌿</span>
          <p className={styles.placeholderText}>Photos coming soon</p>
        </div>
      </div>
    </section>
  );
}
