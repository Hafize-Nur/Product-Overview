import { useEffect, useState } from "react";
import "./ThemeToggle.scss";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Koyu temaya geç" : "Açık temaya geç"}
      type="button"
      title={theme === "light" ? "Koyu tema" : "Açık tema"}
    >
      <span aria-hidden="true">{theme === "light" ? "🌙" : "☀️"}</span>
    </button>
  );
};

export default ThemeToggle;
