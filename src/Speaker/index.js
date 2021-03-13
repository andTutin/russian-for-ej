import { createContext } from "react";

export const Speaker = createContext({});

export const SpeakerProvider = ({ children }) => {
  const u = new SpeechSynthesisUtterance();
  u.lang = "ru-Ru";
  u.rate = 0.9;

  u.voice = window.speechSynthesis
    .getVoices()
    .find((v) => v.name === "Russian");

  const sayit = (phrase) => {
    if (speechSynthesis.speaking) {
      return
    }
    
    u.text = phrase;
    speechSynthesis.speak(u);
  };

  return (
    <Speaker.Provider
      value={{
        sayit,
      }}
    >
      {children}
    </Speaker.Provider>
  );
};

export * from './useSpeaker'