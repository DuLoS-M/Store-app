import React from "react";
import styles from "./NavBar.module.scss";
import UserBtn from "./UserBtn";
import ThemeButton from "./ThemeButton";
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";
import genericLogo from "../../../assets/logo-generic.svg";

export default function NavBar() {
  return (
    <div
      className={`d-flex flex-between align-center secondary pad-m m-0 ${styles["nav-bar"]}`}
    >
      {/* <div className={styles.logo}>Logo</div> */}
      <div className={styles.logo}>
        <img
          className={styles.logosvg}
          src={genericLogo}
          alt="logo"
          height={35}
          width={100}
        />
      </div>
      {/* <SearchBar className={styles["search-bar"]} /> */}
      <SearchBar className={styles["search-bar"]} />
      <div className={`d-flex gap-1 align-center ${styles.buttons}`}>
        <ThemeButton />
        <UserBtn />
        <CartButton />
      </div>
    </div>
  );
}
