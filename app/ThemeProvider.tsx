'use client';

import {createContext, useEffect, useState} from 'react';

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
      const [theme, setTheme] = useState("light");

      useEffect(() => {
          const savedTheme = localStorage.getItem("theme");
          const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
          const initialTheme = savedTheme || systemTheme;
          setTheme(initialTheme);

          document.documentElement.classList.toggle("dark", initialTheme == "dark");

          // Écoute les changements du thème système
          const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
          const handleSystemThemeChange = (event: MediaQueryListEvent) => {
              if(!savedTheme){
                  const newSystemTheme = event.matches ? "dark" : "light";
                  setTheme(newSystemTheme);
                  document.documentElement.classList.toggle("dark", newSystemTheme == "dark");
              }
          };

          mediaQuery.addEventListener("change", handleSystemThemeChange);

          // Nettoyage de l'écouteur lors du démontage
          return () => {
              mediaQuery.removeEventListener("change", handleSystemThemeChange);
          };
      }, [])

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}