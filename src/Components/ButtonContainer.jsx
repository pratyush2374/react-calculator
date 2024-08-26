import React from "react";
import styles from "./ButtonContainer.module.css";

function ButtonContainer({ onButtonClick }) {
  let buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles.buttonContainer}>
        {buttons.map((item) => (
          <button className={styles.btn} onClick={() => onButtonClick(item)} key={item}>
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default ButtonContainer;
