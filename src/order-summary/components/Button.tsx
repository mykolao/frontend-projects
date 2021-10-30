import React from "react";
import css from "./Button.module.scss";

type propsType = {
  type: "filled" | "empty";
  value: string;
};

const Button = ({ type, value }: propsType) => {
  return (
    <div className={css.button}>
      <button className={css[type]}>{value}</button>
    </div>
  );
};

export default Button;
