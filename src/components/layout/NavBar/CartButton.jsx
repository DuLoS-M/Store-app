import React from "react";
import cartIcon from "../../../assets/cart.svg";
import CircleDiv from "./CircleDiv";
import styles from "./CartButton.module.scss";

function CartItemsCounter({ numItems, ...props }) {
  if (numItems)
    return (
      <CircleDiv
        className={`accent d-flex just-center align-center ${styles["item-counter"]}`}
        size={23}
      >
        {numItems}
      </CircleDiv>
    );
  return <div></div>;
}

export default function CartButton() {
  return (
    <CircleDiv
      className={`d-flex just-center align-center primary ${styles["cart-btn"]}`}
      size={40}
    >
      <CartItemsCounter numItems={10} />
      <img src={cartIcon} alt="" width={20} height={20} />
    </CircleDiv>
  );
}
