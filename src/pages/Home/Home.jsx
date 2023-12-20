import React from "react";
import NavBar from "../../components/layout/NavBar/NavBar";
import Footer from "../../components/layout/Footer/Footer";
import styles from "./Home.module.scss";
import Card from "./Card";
import stockImg from "../../assets/stockimage.jpg";

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <section>
        <div className={`${styles["top-categories"]} d-grid`}>
          <Card>
            <h1 className={styles["categories-title"]}>Top Categories</h1>
          </Card>
          <Card>
            <div>category 1</div>
            <img src={stockImg} alt="" />
            <span>Shop now</span>
          </Card>
          <Card>
            <div>category 2</div>
            <img src={stockImg} alt="" />
            <span>Shop now</span>
          </Card>
          <Card>
            <div>category 3</div>
            <img src={stockImg} alt="" />
            <span>Shop now</span>
          </Card>
          <Card>
            <div>category 4</div>
            <img src={stockImg} alt="" />
            <span>Shop now</span>
          </Card>
          <Card>
            <div>category 5</div>
            <img src={stockImg} alt="" />
            <span>Shop now</span>
          </Card>
        </div>
      </section>

      <section className={`${styles.deals} pad-s`}>
        <h2>DEALS</h2>
        <div className={styles["deal-products"]}>
          <a href="">
            <img src={stockImg} alt="" />
            <div className={styles.discount}>50%</div>
          </a>
          <a href="">
            <img src={stockImg} alt="" />
            <div className={styles.discount}>50%</div>
          </a>
          <a href="">
            <img src={stockImg} alt="" />
            <div className={styles.discount}>50%</div>
          </a>
          <a href="">
            <img src={stockImg} alt="" />
            <div className={styles.discount}>50%</div>
          </a>
          <a href="">
            <img src={stockImg} alt="" />
            <div className={styles.discount}>50%</div>
          </a>
        </div>
      </section>
      <section className={styles["best-sellers"]}>
        <h2>Best sellers</h2>
        <div>
          <a href="">
            <img src={stockImg} alt="" />
          </a>
          <a href="">
            <img src={stockImg} alt="" />
          </a>
          <a href="">
            <img src={stockImg} alt="" />
          </a>
          <a href="">
            <img src={stockImg} alt="" />
          </a>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}
