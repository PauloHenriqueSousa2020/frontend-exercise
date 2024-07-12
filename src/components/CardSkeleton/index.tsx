// styles
import styles from "./CardSkeleton.module.css";

export function CardSkeleton() {
  return (
    <div
      className={styles.skeletonContainer}
    >
      <div className={styles.skeletonRounded} />
      <div className={styles.skeletonHeader} />

      <div className={styles.skeletonInfos}>
        {[...Array(5)].map((_, index) => (
          <div key={index} className={styles.skeletonLine} />
        ))}
      </div>

      <div className={styles.skeletonBorder} />
      <div className={styles.skeletonButton} />
    </div>
  )
}