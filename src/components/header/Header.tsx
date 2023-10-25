import { useEffect, useState } from "react";
import { todoLogo } from "../../assets";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const Header = () => {
  const storedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(
    storedDarkMode ? JSON.parse(storedDarkMode) : false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="header">
      <div className="header__logo-container">
        <img className="header__logo" src={todoLogo} alt="LOGO" />
        <p className="header__logo-text">TODOS</p>
      </div>

      <div>
        <div
          onClick={() => setDarkMode(!darkMode)}
          className="header__dark-mood"
        >
          {darkMode ? <BsSunFill /> : <BsMoonStarsFill />}
        </div>
      </div>
    </div>
  );
};

export default Header;
