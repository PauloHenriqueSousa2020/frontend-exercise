// styles
import styles from "./PlanetDetailsModalSkeleton.module.css"

export function PlanetDetailsModalSkeleton() {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonHeader} />

      <div className={styles.skeletonFirstSection}>
        {[...Array(2)].map((_, index) => (
          <div key={index} className={styles.skeletonLine} />
        ))}
      </div>

      <div className={styles.skeletonLastSection}>
        {[...Array(8)].map((_, index) => (
          <div key={index} className={styles.skeletonLine} />
        ))}
      </div>
    </div>
  )
}