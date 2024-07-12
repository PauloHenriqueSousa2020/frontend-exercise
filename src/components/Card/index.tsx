/**
 * Componente Card - utilizado para exibir informações básicas de um planeta
 *
 * @param {PlanetInterface} planet - Informações de um planeta
 * @param {function} handleOpenPlanetDetails - Função para abrir modal e exibir detalhes de um planeta
 *
 */

// libs
import Image from "next/image";

// styles
import styles from "./Card.module.css";

// types
import { PlanetInterface } from "@/@types/PlanetInterface";

interface CardProps {
  planet: PlanetInterface;
  handleOpenPlanetDetails: (url: string) => void;
}

export function Card({ planet, handleOpenPlanetDetails }: CardProps) {
  return (
    <div
      className={styles.cardContainer}
    >
      <Image
        alt="Imagem de um círculo com várias bolas orbitando"
        src='/images/planet.svg'
        width={200}
        height={200}
        className={styles.image}
      />

      <h1 className={styles.name}>
        {planet.name}
      </h1>

      <div className={styles.infoWrapper}>
        <label className={styles.titleLabel}>Terreno: <span className={styles.titleSpan}>{planet.terrain}</span></label>
        <label className={styles.titleLabel}>Diamêtro: <span className={styles.titleSpan}>{planet.diameter}</span></label>
        <label className={styles.titleLabel}>Clima: <span className={styles.titleSpan}>{planet.climate}</span></label>
        <label className={styles.titleLabel}>População: <span className={styles.titleSpan}>{planet.population}</span></label>
        <label className={styles.titleLabel}>Gravidade: <span className={styles.titleSpan}>{planet.gravity}</span></label>
      </div>

      <div className={styles.border} />

      <button
        className={styles.button}
        onClick={() => handleOpenPlanetDetails(planet.url)}
      >
        Ver detalhes
      </button>
    </div>
  )
}