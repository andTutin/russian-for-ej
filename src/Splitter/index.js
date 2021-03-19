import { useState } from "react";
import { syllabify } from "syllables-ru";

export const Splitter = ({ sayit }) => {
  const [syllables, setSyllables] = useState("");

  return (
    <form
      className="split-form"
      onSubmit={(e) => {
        e.preventDefault();

        if (!e.target.word.value) return;

        setSyllables(syllabify(e.target.word.value).split("·").join("-"));
        e.target.word.value = "";
      }}
    >
      <input
        type="text"
        id="word"
        name="word"
        size="20"
        placeholder="split the word"
      />
      <span
        className="listenable"
        data-say={syllables.split("-").join("")}
        onClick={sayit}
      >
        {syllables}
      </span>
      <button type="submit">get help</button>
    </form>
  );
};
