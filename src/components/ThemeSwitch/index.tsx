// libs
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

// assets
import { Moon, Sun } from "phosphor-react"

// styles
import styles from "./ThemeSwitch.module.css";

export function ThemeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const handleThemeSwitch = () => {
    currentTheme === "light" ? setTheme("dark") : setTheme("light")
  }

  if (!mounted) return null;

  return (
    <div
      className={styles.themeSwitchContainer}
      data-testid='theme-switch-container'
    >
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={currentTheme === 'dark'}
          onChange={handleThemeSwitch}
          className={styles.input}
        />
        <div className={currentTheme === "light" ? styles.iconsWrapperLight : styles.iconsWrapperDark}>
          {currentTheme === 'light'
            ? <Sun size={24} data-testid='sun-icon' />
            : <Moon size={24} data-testid='moon-icon' />
          }
        </div>
      </label >
    </div >
  );
};