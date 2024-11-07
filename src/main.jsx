import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { useState, createContext } from "react";

export const LanguageContext = createContext();

const Main = () => {
  const [language, setLanguage] = useState("de");

  return (
    <StrictMode>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <App />
      </LanguageContext.Provider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Main />);