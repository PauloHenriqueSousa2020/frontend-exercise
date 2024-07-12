/**
 * Componente PlanetDetailsModal - utilizado para exibir o detalhe de um planeta em um modal
 *
 * @param {boolean} isOpen - Boolean para verificar se o modal está aberto
 * @param {function} handleCloseModal - Função para fechar o modal que exibir o detalhe de um planeta
 * @param {string} url - Url usada para buscar o detalhe de um planeta
 *
 */

// components
import { PlanetDetailsModalSkeleton } from "../PlanetDetailsModalSkeleton";

// hooks
import { useGetPlanetsDetails } from "@/hooks/useGetPlanetsDetail";

// assets
import { X } from "phosphor-react";

// styles
import styles from "./PlanetDetailsModal.module.css";

interface PlanetDetailsModalProps {
  isOpen: boolean;
  handleCloseModal: () => void;
  url: string;
}

export function PlanetDetailsModal({ isOpen, handleCloseModal, url }: PlanetDetailsModalProps) {
  const { planetDetail, isValidating } = useGetPlanetsDetails({ url });

  return (
    <>
      {isOpen && (
        <div className={styles.planetDetailsModalContainer}>
          <div className={styles.modalOverlay} />

          {isValidating ? (
            <PlanetDetailsModalSkeleton />
          ) : (
            <div className={styles.modalWrapper}>
              <header className={styles.modalHeader}>
                <h1 className={styles.modalTitle}>Planeta: {planetDetail.name}</h1>
                <button className={styles.modalButton} onClick={handleCloseModal}>
                  <X size={22} />
                </button>
              </header>

              <section className={styles.modalFirstSection} >
                <p>Residentes: {planetDetail.residents.length}</p>
                <p>Filmes: {planetDetail.films.length}</p>
              </section>

              <section className={styles.modalLastSection}>
                <p>Período de Rotação: {planetDetail.rotation_period}</p>
                <p>Período Orbital: {planetDetail.orbital_period}</p>
                <p>Diâmetro: {planetDetail.diameter}</p>
                <p>Clima: {planetDetail.climate}</p>
                <p>Gravidade: {planetDetail.gravity}</p>
                <p>Terreno: {planetDetail.terrain}</p>
                <p>Superfície Aquática: {planetDetail.surface_water}</p>
                <p>População: {planetDetail.population}</p>
              </section>
            </div>
          )}
        </div>
      )}
    </>
  );
}