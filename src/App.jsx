import React, { useState, useEffect } from 'react';
import Article from './Article';
import ToggleTheme from './ToggleTheme';
import ThemeContext from './ThemeContext';
import './App.css';

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState(() => {
		const initialTheme = localStorage.getItem("theme");
		return initialTheme ? initialTheme : "light";
	});

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const contextValue = {
    theme,
    updateTheme: setTheme
  };
  console.log(theme);

  return (
    <ThemeContext.Provider value={contextValue}>
      <div id="main" className='container-fluid h-100 d-flex ' data-theme={theme}>
        <nav className='container d-flex flex-row justify-content-between'>
          <a href='/'><h2>Anime Image</h2></a>
          <ToggleTheme />
        </nav>
        <div className='container d-flex flex-column justify-content-center align-items-center'>
          <button className='btn btn-primary btn-md ' onClick={() => setToggle(!toggle)}>{toggle ? "Hide" : "Show"} Image</button>
          <hr />
          {toggle && <Article />}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
