import React, { useContext } from "react";
import { LanguageContext } from "../main.jsx";

const translations = [
  { name: "English", continent: "Europe" },
  { name: "German", continent: "Europe" },
  { name: "Spanish", continent: "Europe" },
  { name: "French", continent: "Europe" },
  { name: "Italian", continent: "Europe" },
  { name: "Dutch", continent: "Europe" },
  { name: "Polish", continent: "Europe" },
  { name: "Portuguese", continent: "Europe" },
  { name: "Russian", continent: "Europe" },
  { name: "Turkish", continent: "Europe" },
  { name: "Chinese", continent: "Asia" },
  { name: "Japanese", continent: "Asia" },
  { name: "Korean", continent: "Asia" },
  { name: "Arabic", continent: "Asia" },
  { name: "Hindi", continent: "Asia" },
  { name: "Bengali", continent: "Asia" },
  { name: "Urdu", continent: "Asia" },
  { name: "Indonesian", continent: "Asia" },
  { name: "Vietnamese", continent: "Asia" },
  { name: "Thai", continent: "Asia" },
  { name: "Swahili", continent: "Africa" },
  { name: "Amharic", continent: "Africa" },
  { name: "Yoruba", continent: "Africa" },
  { name: "Zulu", continent: "Africa" },
  { name: "Afrikaans", continent: "Africa" },
  { name: "Hausa", continent: "Africa" },
  { name: "Igbo", continent: "Africa" },
  { name: "Somali", continent: "Africa" },
  { name: "Xhosa", continent: "Africa" },
  { name: "French", continent: "Africa" },
  { name: "Spanish", continent: "South America" },
  { name: "Portuguese", continent: "South America" },
  { name: "Quechua", continent: "South America" },
  { name: "Guarani", continent: "South America" },
  { name: "Aymara", continent: "South America" },
  { name: "English", continent: "North America" },
  { name: "Spanish", continent: "North America" },
  { name: "French", continent: "North America" },
  { name: "Haitian Creole", continent: "North America" },
  { name: "Dutch", continent: "North America" },
  { name: "Greenlandic", continent: "North America" },
  { name: "Inuktitut", continent: "North America" },
  { name: "Maori", continent: "Oceania" },
  { name: "Samoan", continent: "Oceania" },
  { name: "Tongan", continent: "Oceania" },
  { name: "Fijian", continent: "Oceania" },
  { name: "Hawaiian", continent: "Oceania" },
  { name: "English", continent: "Oceania" },
  { name: "French", continent: "Oceania" },
];

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleChange = (input) => {
    setLanguage(input.target.value);
  };

  const continents = [...new Set(translations.map((t) => t.continent))];

  return (
    <div className="header">
      <h1>Please select language</h1>
      <label htmlFor="language-select">Bitte wählen Sie eine Sprache: </label>
      <select id="language-select" value={language} onChange={handleChange}>
        {continents.map((continent) => (
          <optgroup key={continent} label={continent}>
            {translations
              .filter((translation) => translation.continent === continent)
              .map((translation, index) => (
                <option key={index} value={translation.name.toLowerCase()}>
                  {translation.name}
                </option>
              ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
};

export default Header;