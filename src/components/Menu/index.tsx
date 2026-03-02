import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function handleTemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });

    //document.documentElement.setAttribute("data-theme", nextTheme);
  }

  // useEffect(() => {
  //   console.log("useEffect sem dependências", Date.now());
  // }); // Executado toda vez que o componente renderiza na tela

  // useEffect(() => {
  //   console.log("useEffect com array de deps vazio", Date.now());
  // }, []); // Executa apenas quando o react monta o componente na tela pela primeira vez

  useEffect(() => {
    console.log("Theme mudou", theme, Date.now());
    document.documentElement.setAttribute("data-theme", theme);

    return () => {
      console.log("Olha, este componente será atualizado.");
    };
  }, [theme]); // Executa apenas quando o valor de theme muda

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ver Histórico"
        title="Ver Histórico"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar tema"
        title="Mudar tema"
        onClick={handleTemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
