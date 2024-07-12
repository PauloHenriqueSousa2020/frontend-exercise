// libs
import { useState } from "react";

// components
import { Card, CardSkeleton, HomeLayout, InputSearch, Pagination, PlanetDetailsModal } from "@/components";

// hooks
import { useGetPlanets } from "@/hooks/useGetPlanets";

// utils
import { useDebounce } from "@/utils/useDebounce";

// styles
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [showPlanetDetails, setShowPlanetDetails] = useState(false);
  const [planetDetailsURL, setPlanetDetailsURL] = useState("");

  const { planets, totalElements, isValidating } = useGetPlanets({ search, page })

  const handleOpenPlanetDetails = (url: string) => {
    setPlanetDetailsURL(url);
    setShowPlanetDetails(true);
  }

  const handleClosePlanetDetails = () => {
    setPlanetDetailsURL('');
    setShowPlanetDetails(false);
  }

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  }

  const paginationMobileIsValid = page < totalElements / 10

  const handleDecrementPage = () => {
    setPage(page - 1)
  }

  const handleIncrementPage = () => {
    setPage(page + 1)
  }

  const searchDebounce = useDebounce(handleSearch, 1000);

  return (
    <div className={styles.homeContainer}>
      <HomeLayout />

      <section
        className={styles.sectionWrapper}
        id="planets"
      >
        <div className={styles.wrapper}>
          <div className={styles.searchWrapper}>
            <h2 className={styles.title}>Total de Planetas: {totalElements ?? ""}</h2>

            <InputSearch handleChangeDebounce={searchDebounce} />
          </div>

          {isValidating ?
            <div className={styles.cardSkeletonContainer}>
              <div className={styles.cardSkeletonPaginationLine} />
              <div className={styles.cardSkeletonWrapper}>
                {[...Array(10)].map((_, index) => (
                  <CardSkeleton key={index} />
                ))}
              </div>
            </div> : (
              <>
                {planets.length > 0 ? (
                  <div className={styles.planetsWrapper}>
                    <Pagination
                      count={totalElements}
                      perPage={10}
                      page={page}
                      onChange={(newPage) => setPage(newPage)}
                    />

                    <div className={styles.planetList}>
                      {planets.map((planet, index) => (
                        <Card
                          key={index}
                          planet={planet}
                          handleOpenPlanetDetails={handleOpenPlanetDetails}
                        />
                      ))}
                    </div>

                    <div className={styles.buttonMobileWrapper}>
                      <button
                        className={styles.buttonMobile}
                        onClick={handleDecrementPage}
                        disabled={page === 1}
                      >
                        Página anterior
                      </button>

                      <button
                        className={styles.buttonMobile}
                        onClick={handleIncrementPage}
                        disabled={!paginationMobileIsValid}
                      >
                        Próxima página
                      </button>

                    </div>
                  </div>
                ) : (
                  <h1 className={styles.notFoundPlanet}>
                    Nenhum planeta encontrado.
                  </h1>
                )}
              </>
            )}
        </div>
      </section>

      <PlanetDetailsModal
        isOpen={showPlanetDetails}
        handleCloseModal={handleClosePlanetDetails}
        url={planetDetailsURL}
      />
    </div>
  );
}