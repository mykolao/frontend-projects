import React from "react";
import css from "./index.module.scss";

import heroImage from "./img/illustration-hero.svg";
import musicIcon from "./img/icon-music.svg";

const orderData = {
  description:
    "You can now listen to millions of\n songs, audiobooks and podcasts on\nany device anywhere you like",
  plan: "Annual",
  price: "$59.99/year",
};

const OrderSummary = () => {
  const { description, plan, price } = orderData;

  const descriptionPara = description
    .split("\n")
    .map((p, i) => <p key={i}>{p}</p>);

  return (
    <div className={css.order_summary}>
      <div className={css.body}>
        <img className={css.hero} src={heroImage} alt="hero" />
        <div className={css.summary}>
          <h1 className={css.header}>Order Summary</h1>
          <div className={css.paragraph}>{descriptionPara}</div>
        </div>
        <div className={css.product}>
          <img className={css.icon} src={musicIcon} alt="music icon" />
          <div className={css.description}>
            <div className={css.title}>{plan} Plan</div>
            <div className={css.price}>{price}</div>
          </div>
          <a href="/" className={css.link}>
            Change
          </a>
        </div>
        <div className={css.button}>
          <button className={css.filled}>Proceed to Payment</button>
        </div>
        <div className={css.button}>
          <button className={css.empty}>Cancel Order</button>
        </div>
        <br />
      </div>
    </div>
  );
};

export default OrderSummary;
