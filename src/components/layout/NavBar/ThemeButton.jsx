import React from "react";
import { useEffect } from "react";
import { ToggleButton } from "react-aria-components";
import styles from "./ThemeButton.module.scss";
import moonIcon from "../../../assets/moon.svg";
import sunIcon from "../../../assets/sun.svg";
import useLocalStorage from "../../../hooks/useLocalStorage";

export default function ThemeButton() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  const toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
      setLightMode();
    }
    if (theme == "light") {
      setTheme("dark");
      setDarkMode();
    }
  };

  useEffect(() => {
    theme == "dark"
      ? document.querySelector("body").setAttribute("data-theme", "dark")
      : document.querySelector("body").setAttribute("data-theme", "light");
  }, []);

  return (
    <ToggleButton
      className={`${styles["theme-button"]} border-circle `}
      isSelected={theme == "light"}
      onChange={() => {
        console.log("toggles");
        toggleTheme();
      }}
    >
      {/* <img
        src={theme == "light" ? sunIcon : moonIcon}
        width={30}
        height={30}
        alt=""
      /> */}
      <div
        className={`${styles["icon-container"]} d-flex flex-column just-center align-center gap-1`}
      >
        <img src={moonIcon} width={25} height={25} alt="" />
        <img src={sunIcon} width={25} height={25} alt="" />
      </div>
    </ToggleButton>
  );
}
