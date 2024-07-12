// styles
import styles from "./CardSkeleton.module.css";

export function CardSkeleton() {
  return (
    <div
      className={styles.skeletonContainer}
      data-testid="card-skeleton-container"
    >
      <div
        className={styles.skeletonRounded}
        data-testid="upper-circle"
      />
      <div
        className={styles.skeletonHeader}
        data-testid="horizontal-line"
      />

      <div
        className={styles.skeletonInfos}
        data-testid="text-bars"
      >
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={styles.skeletonLine}
            data-testid="text-bar"
          />
        ))}
      </div>

      <div
        className={styles.skeletonBorder}
        data-testid="separator-line"
      />
      <div
        className={styles.skeletonButton}
        data-testid="bottom-button"
      />
    </div>
  )
}