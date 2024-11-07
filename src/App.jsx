import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Text from "./components/Text.jsx";

function App() {
  const [isExplanationVisible, setExplanationVisible] = useState(false);

  const toggleExplanation = () => {
    setExplanationVisible(!isExplanationVisible);
  };

  return (
    <>
      <Header />
      <div className="wrap">
        <button onClick={toggleExplanation}>
          {isExplanationVisible ? "Erklärung verbergen" : "Erklärung anzeigen"}
        </button>
        {isExplanationVisible && (
          <div className="explanation">
            <h3>Wie man die App benutzt:</h3>
            <p>1. Wählen Sie eine Sprache aus dem Dropdown-Menü oben aus.</p>
            <p>
              2. Geben Sie den Text ein, den Sie übersetzen oder als Prompt verwenden möchten.
            </p>
            <p>
              3. Klicken Sie auf "Übersetzen", um den Text zu übersetzen, oder auf
              "Prompt", um eine Antwort auf Ihren Prompt in der gewählten Sprache zu erhalten.
            </p>
          </div>
        )}
        <Text />
      </div>
    </>
  );
}

export default App;
