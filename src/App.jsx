import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./Components/ButtonContainer";
import NumInput from "./Components/NumInput";

function App() {
  let [forCalculator, setForCalculator] = useState("");

  const onButtonClick = (buttonName) => {
    if (buttonName === "C") {
      setForCalculator("");
    } else if (buttonName === "=") {
      try {
        let result = eval(forCalculator);
        setForCalculator(result);
      } catch (error) {
        setForCalculator("Error");
        console.log(error);
      }
    } else {
      let newstr = forCalculator + buttonName;
      setForCalculator(newstr);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <NumInput forCalculator={forCalculator}></NumInput>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
