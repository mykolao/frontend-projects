import React from "react";
import css from "./Summary.module.scss";

type propsType = {
  description: string;
}

const Summary = ({description}: propsType) => {
  const descriptionParagraphs = description
    .split("\n")
    .map((p, i) => <p key={i}>{p}</p>);
  return (
    <div className={css.summary}>
      <h1 className={css.header}>Order Summary</h1>
      <div className={css.paragraph}>{descriptionParagraphs}</div>
    </div>
  );
};

export default Summary;
