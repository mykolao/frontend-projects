import React from "react";
import css from "./index.module.scss";

import heroImage from "./img/illustration-hero.svg";
import musicIcon from "./img/icon-music.svg";
import Summary from "./components/Summary";
import Product from "./components/Product";
import Button from "./components/Button";

const orderData = {
  description:
    "You can now listen to millions of\n songs, audiobooks and podcasts on\nany device anywhere you like",
  plan: "Annual",
  price: "$59.99/year",
};

const OrderSummary = () => {
  const { description, plan, price } = orderData;

  return (
    <div className={css.order_summary}>
      <div className={css.body}>
        <img className={css.hero} src={heroImage} alt="hero" />
        <Summary description={description} />
        <Product icon={musicIcon} plan={plan} price={price} />
        <Button type="filled" value="Proceed to payment" />
        <Button type="empty" value="Cancel Order" />
        <br />
      </div>
    </div>
  );
};

export default OrderSummary;
