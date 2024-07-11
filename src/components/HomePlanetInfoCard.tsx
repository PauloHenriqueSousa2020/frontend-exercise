// libs
import { useEffect, useState } from "react";

// styles
import styles from "./HomePlanetInfoCard.module.css";

export function HomePlanetInfoCard() {
  const [index, setIndex] = useState(0);

  const planetsInfo = [
    {
      title: "Tatooine",
      description: "Um planeta desértico conhecido por suas paisagens áridas e pela presença de povos nômades, como os Tusken Raiders e os Jawas. É o lar de Anakin e Luke Skywalker."
    },
    {
      title: "Coruscant",
      description: "O centro político e cultural da galáxia, coberto por uma vasta cidade-planetária. É o coração da República Galáctica e, mais tarde, do Império Galáctico."
    },
    {
      title: "Kashyyyk",
      description: "Um planeta coberto por densas florestas e lar dos Wookiees, uma espécie de guerreiros peludos. Kashyyyk foi fundamental durante a Guerra dos Clones e serviu como um símbolo de resistência contra a opressão Imperial."
    },
    {
      title: "Naboo",
      description: "Um planeta de beleza exuberante, com vastas planícies, lagos e cidades elegantes. Naboo é o lar dos Naboo, uma sociedade pacífica que desempenhou papéis cruciais nos eventos políticos da galáxia."
    },
    {
      title: "Endor",
      description: "Uma lua florestal, lar dos Ewoks, uma espécie de pequenos seres peludos. Endor foi o local da batalha final entre a Aliança Rebelde e o Império Galáctico, onde a segunda Estrela da Morte foi destruída."
    },
    {
      title: "Hoth",
      description: "Um planeta gelado e desolado, conhecido por seus vastos campos de gelo e cavernas. Hoth foi o local da base temporária da Aliança Rebelde durante os eventos de 'O Império Contra-Ataca'."
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % planetsInfo.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [planetsInfo.length]);

  return (
    <div className={styles.planetInfoCardContainer}>
      <h1 className={styles.title}>{planetsInfo[index].title}</h1>
      <p className={styles.description}>{planetsInfo[index].description}</p>
    </div>
  )
}