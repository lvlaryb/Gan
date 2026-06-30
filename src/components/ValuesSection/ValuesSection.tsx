import { ValueCard } from "../ValueCard/ValueCard";
import styles from "./ValuesSection.module.css";

const VALUES = [
  {
    icon: "🌿",
    title: "Nature",
    description:
      "Every day is spent outdoors, connecting with trees, soil, and seasons in a real forest environment.",
  },
  {
    icon: "🎲",
    title: "Free Play",
    description:
      "Unstructured play drives development. Children choose their own adventures and learn through doing.",
  },
  {
    icon: "🤝",
    title: "Community",
    description:
      "Small groups foster deep friendships. Children and educators grow together as a caring community.",
  },
  {
    icon: "🛡️",
    title: "Safety",
    description:
      "Nature-based with mindful boundaries. Our educators are trained in outdoor safety and first aid.",
  },
];

export function ValuesSection() {
  return (
    <section id="values" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Our Values</p>
          <h2 className={styles.heading}>What Makes ForestGan Special</h2>
        </div>
        <div className={styles.grid}>
          {VALUES.map((v) => (
            <ValueCard
              key={v.title}
              icon={v.icon}
              title={v.title}
              description={v.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
