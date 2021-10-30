import React from "react";
import css from "./Product.module.scss";

type propsType = {
  icon: string;
  plan: string;
  price: string;
};

const Product = ({ icon, plan, price }: propsType) => {
  return (
    <div className={css.product}>
      <img className={css.icon} src={icon} alt="music icon" />
      <div className={css.description}>
        <div className={css.title}>{plan} Plan</div>
        <div className={css.price}>{price}</div>
      </div>
      <a href="/" className={css.link}>
        Change
      </a>
    </div>
  );
};

export default Product;
