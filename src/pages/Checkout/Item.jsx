import React from "react";
import styles from "./Item.module.scss";
import stockImg from "../../assets/stockimage.jpg";

export default function Item({ quantity, item }) {
  return (
    <div className={styles.item}>
      <img src={stockImg} alt="" />
      <div>{item.description}</div>
      <button>&times;</button>
      <div className={styles.pricing}>
        <div>Quantity: {quantity}</div>
        <div>Price: {parseInt(quantity) * (item.price * item.discount)}</div>
      </div>
    </div>
  );
}
