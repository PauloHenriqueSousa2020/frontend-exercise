/**
 * Componente InputSearch - utilizado para filtrar
 *
 * @param {function} handleChangeDebounce - Função para fazer um debounce no onChange
 *
 */

// libs
import { useState } from "react";

// assets
import { MagnifyingGlass } from "phosphor-react";

// styles
import styles from "./InputSearch.module.css";

interface InputSearchProps {
  handleChangeDebounce: (value: string) => void;
}

export function InputSearch({ handleChangeDebounce }: InputSearchProps) {
  const [inputValue, setInputValue] = useState('');

  const onChange = (value: string) => {
    setInputValue(value);
    handleChangeDebounce(value);
  }

  return (
    <div className={styles.inputSearchContainer}>
      <MagnifyingGlass size={24} />

      <input
        className={styles.input}
        placeholder="Buscar planetas"
        value={inputValue}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}