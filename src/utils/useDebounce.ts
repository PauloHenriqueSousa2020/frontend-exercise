// libs
import { useRef } from "react";

export function useDebounce<Args extends unknown[]>(
  callback: (...args: Args) => void,
  delay: number
) {
  const ref = useRef<ReturnType<typeof setTimeout> | undefined>();
  
  return function debounced(...args: Args) {
    clearTimeout(ref.current!);
    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      callback(...args);
    }, delay);
    ref.current = timeout;
  };
}