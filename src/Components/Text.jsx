import React, { useContext, useState } from "react";
import { LanguageContext } from "../main";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_KEY } from "../../private";

const Text = () => {
  const { language } = useContext(LanguageContext);
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = async () => {
    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Translate the following text to ${language}: ${inputText}`;
      const result = await model.generateContent(prompt);
      setTranslatedText(result.response.text());
    } catch (error) {
      console.error("Error translating text:", error);
    }
  };

  const handlePrompt = async () => {
    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `bitte in ${language} antworten, promt: ${inputText}`;
      const result = await model.generateContent(prompt);
      setTranslatedText(result.response.text());
    } catch (error) {
      console.error("Error processing prompt:", error);
    }
  };

  return (
    <>
      <textarea
        name="Input"
        id="ToTranslate"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Geben Sie hier Ihren Text ein..."
      ></textarea>
      <h2>Übersetzter Text</h2>
      <div className="result">{translatedText}</div>
      <button id="translatebtn" onClick={handleTranslate}>
        Übersetzen
      </button>
      <button id="promptbtn" onClick={handlePrompt}>
        Prompt
      </button>
     
    </>
  );
};

export default Text;