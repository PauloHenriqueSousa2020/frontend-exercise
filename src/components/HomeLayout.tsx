// libs
import Image from "next/image";

// components
import { HomePlanetInfoCard } from "./HomePlanetInfoCard";

// styles
import styles from "./HomeLayout.module.css";

export function HomeLayout() {
  return (
    <div className={styles.homePageLayoutContainer}>

      <div className={styles.logoImg}>
        <Image
          alt="Star Wars logo"
          src='/images/star-wars-logo.svg'
          width={200}
          height={85}
        />
      </div>

      <div className={styles.homeLayoutInfoWrapper}>
        <h1 className={styles.title}>
          Bem-vindo ao Universo de Star Wars!
        </h1>

        <h2 className={styles.description}>
          Explore o fascinante universo de Star Wars como nunca antes! Pesquise e conheça os planetas icônicos que compõem essa galáxia repleta de aventuras, mistérios e batalhas épicas. Você terá acesso a informações detalhadas sobre cada planeta, desde Tatooine, o mundo desértico onde tudo começou, até Coruscant, o coração político da galáxia.
        </h2>

        <a href="#planets" className={`${styles.gradientAnimation} ${styles.link}`} >
          Explorar planetas
        </a>
      </div>

      <HomePlanetInfoCard />
    </div>
  );
}