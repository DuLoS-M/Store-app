import React from "react";
import { Button, Input, Label, SearchField } from "react-aria-components";
import searchIcon from "../../../assets/search.svg";
import styles from "./SearchBar.module.scss";

export default function SearchBar({ className, props }) {
  const formClassName = `${styles["search-bar"]} ${className}`;
  return (
    <form className={formClassName} {...props}>
      <SearchField
        name="search"
        isRequired
        className={styles["react-aria-SearchField"]}
      >
        <Label style={{ display: "none" }}>Search</Label>
        <Input className={styles["react-aria-Input"]} placeholder="Search" />
        <Button className={styles["react-aria-Button"]}>&times;</Button>
      </SearchField>
      <Button className={styles["search-button"]} type="submit">
        <img src={searchIcon} height={15} width={15} />
      </Button>
    </form>
  );
}
