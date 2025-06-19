import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { RouterLink } from '../RouterLink';

type AvaliableTheme = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvaliableTheme>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvaliableTheme) || 'dark';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleChangeTheme(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault; //Não segue o link

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]); //Executa apenas quando o valor de theme muda

  return (
    <nav className={styles.menu}>
      <RouterLink
        className={styles.menuLink}
        href='/'
        aria-label='Ir para a home'
        title='Ir para a home'
      >
        <HouseIcon />
      </RouterLink>

      <RouterLink
        className={styles.menuLink}
        href='/history/'
        aria-label='Ver histórico'
        title='Ver histórico'
      >
        <HistoryIcon />
      </RouterLink>

      <RouterLink
        className={styles.menuLink}
        href='/settings/'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </RouterLink>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar Tema'
        title='Mudar tema'
        onClick={handleChangeTheme}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
