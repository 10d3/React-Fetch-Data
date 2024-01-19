import React, { useContext } from 'react';
import ThemeContext from './ThemeContext'; // Adjust the path based on your actual file structure

export default function ToggleTheme() {
  const { theme, updateTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    updateTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button id='toggler' onClick={toggleTheme}>
      {theme === 'light' ? '🌜' : '🌞'}
    </button>
  );
}
