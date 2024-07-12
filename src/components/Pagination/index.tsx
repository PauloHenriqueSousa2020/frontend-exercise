/**
 * Componente Pagination - utilizado para paginação
 *
 * @param {number} count - Valor total de itens
 * @param {number} page - Indicação do número da página selecionado
 * @param {number} perPage - Total de itens a serem exibidos por página
 * @param {Function} onChange - Função de retorno de chamada
 *
 */

// utils
import usePagination from "@/utils/usePagination";

// assets
import { CaretLeft, CaretRight } from "phosphor-react";

// styles
import styles from "./Pagination.module.css";

interface Pagination {
  count: number;
  page: number;
  perPage: number;
  onChange: (page: number) => void;
}

export const Pagination = ({ count, page, perPage, onChange }: Pagination) => {
  const { items, disabledNext, disabledPrevious, next, previous } =
    usePagination({
      count: Math.ceil(count / perPage),
      page,
      onChange,
    });

  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.button}
        onClick={previous}
        disabled={disabledPrevious}
      >
        <CaretLeft size={24} weight="bold" />
        <p>Anterior</p>
      </button>

      <div className={styles.pagesWrapper}>
        {items.map((item) => (
          <div
            key={item.page}
            onClick={item.onClick}
            className={`${styles.page} ${item.page === page && styles.activePage}`}
          >
            {String(item.page).includes("ellipsis") ? "..." : item.page}
          </div>
        ))}
      </div>

      <button
        className={styles.button}
        onClick={next}
        disabled={disabledNext}
      >
        <p className="underline">Seguinte</p>
        <CaretRight size={24} weight="bold" />
      </button>
    </div>
  );
};