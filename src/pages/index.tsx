// libs
import { useState } from "react";

// components
import { HomeLayout, InputSearch } from "@/components";

// hooks
import { useGetPlanets } from "@/hooks/useGetPlanets";

// utils
import { useDebounce } from "@/utils/useDebounce";

// styles
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { planets, totalElements } = useGetPlanets({ search, page })


  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
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
        </div>

        <div className={styles.planetsWrapper}>
          {/* Paginação */}

           <div className="flex flex-wrap justify-center items-center gap-10">
            {planets.map((planet, index) => (
              <p key={index}>{planet.name}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}