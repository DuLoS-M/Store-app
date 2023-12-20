import React from "react";
import Item from "./Item";
import styles from "./Checkout.module.scss";

const testItem = {
  description: "Lorem, ipsum dolor.",
  price: 100,
  discount: 0.7,
};
const testItem2 = {
  description: "Lorem ipsum dolor sit amet.",
  price: 200,
  discount: 0.9,
};

const cart = [
  { item: testItem, quantity: 3 },
  { item: testItem2, quantity: 5 },
  { item: testItem, quantity: 3 },
  { item: testItem2, quantity: 5 },
];

export default function Checkout() {
  const total = cart.reduce(
    (acc, item) =>
      (acc += item.quantity * item.item.price * item.item.discount),
    0
  );

  const subTotal = cart.reduce(
    (acc, item) => (acc += item.quantity * item.item.price),
    0
  );

  const discount = subTotal - total;
  return (
    <main className={styles.checkout}>
      <div className={styles["cart-items"]}>
        {cart &&
          cart.map((item) => (
            <Item item={item.item} quantity={item.quantity} />
          ))}
      </div>

      <div className={styles.summary}>
        <h2>Summary</h2>
        <div>Sub-total: {subTotal}</div>
        <div>Discount: {discount}</div>
        <hr />
        <div>Total: {total}</div>
        <div>
          <button>Clear cart</button>
          <button>Checkout</button>
        </div>
      </div>
    </main>
  );
}
