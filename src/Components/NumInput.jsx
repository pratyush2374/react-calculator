import styles from "./NumInput.module.css";
import React from "react";

function NumInput({forCalculator}) {
  return (
    <>
        <input type="text" className={styles.numInput} value={forCalculator} readOnly/>
    </>
  );
}

export default NumInput;
