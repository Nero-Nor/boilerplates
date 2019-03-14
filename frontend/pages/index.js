import React from "react";
import ReactDOM from "react-dom";
import Skjema1 from "./skjema1";
import Liste1 from "./liste1";
import useEleState from "./useEleState";
import "./styles.css";

const App = () => {
  const { element1, addEle, delEle } = useEleState([]);

  return (
    <div class="topp-container">
      <Skjema1
        lagre1={tekst1 => {
          const trimmedText = tekst1.trim();
          if (trimmedText.length > 0) {
            addEle(trimmedText);
          }
        }}
      />

      <li className="data-head-green">Spesial</li>
      <li className="data-whiteholder">/ digital/senior</li>

      <li className="data-head-blue">Sesong</li>
      <li className="data-whiteholder">/ digital/påske</li>
      <li className="data-whiteholder">/ total/sommer</li>

      <Liste1 element1={element1} delEle={delEle} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
