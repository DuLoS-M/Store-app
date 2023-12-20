import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

export default function Card({ children, className, to, props }) {
  return (
    <div
      className={`${styles.card} ${className ? className : ""} secondary pad-s`}
      {...props}
    >
      <Link className={styles["category-link"]} to={to}>
        {children}
      </Link>
    </div>
  );
}
