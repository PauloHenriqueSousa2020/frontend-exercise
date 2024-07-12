// styles
import styles from "./PlanetDetailsModalSkeleton.module.css"

export function PlanetDetailsModalSkeleton() {
  return (
    <div
      className={styles.skeletonContainer}
      data-testid="planet-details-modal-skeleton-container"
    >
      <div
        className={styles.skeletonHeader}
        data-testid="header-line"
      />

      <div
        className={styles.skeletonFirstSection}
        data-testid="first-section-lines"
      >
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className={styles.skeletonLine}
            data-testid="first-section-line"
          />
        ))}
      </div>

      <div
        className={styles.skeletonLastSection}
        data-testid="last-section-lines"
      >
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className={styles.skeletonLine}
            data-testid="last-section-line"
          />
        ))}
      </div>
    </div>
  )
}