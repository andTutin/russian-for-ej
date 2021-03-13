import { useState } from "react";
import { vowels, consonants } from "../Alphabet";
import { useSpeaker } from "../Speaker";
import { syllabify } from "syllables-ru";

export const Reading = () => {
  const sayit = useSpeaker();
  const [syllables, setSyllables] = useState("");

  return (
    <article>
      <header>
        <h2>This is a Syllables table</h2>
      </header>
      <p>
        Reading russian is kinda WYSIWYG. letter = sound. There are some
        exeptions, but it's not like french.
      </p>
      <p>This is a consonant + vowel letter combinations table</p>
      <table onClick={sayit}>
        <thead>
          <tr>
            <th></th>
            {consonants.map((l) => (
              <th key={l} data-say={l}>
                {l}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {vowels.map((v) => (
            <tr key={v}>
              <th data-say={v}>{v}</th>
              {consonants.map((c) => (
                <th key={c} data-say={c + v}>
                  {c + v}
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        There are probably combos that never used irl or break the rules of
        language, but there was a loop in the script, and i am too lazy to
        handle exceptions (you won't meet them anyway right?)
      </p>
      <p>
        So you take the word, split in on syllables, read single letters and
        these combos
      </p>
      <aside>
        <p>
          for example lets read word '
          <span onClick={sayit} data-say="вдохновение">
            Вдохновение
          </span>
          ' (inspiration)
        </p>
      </aside>
      <ul>
        <li>split on syllables вдо-хно-ве-ни-е</li>
        <li>
          then split on singles and combos. Like this в [до]-х [но]-[ве]-[ни]- е
        </li>
        <li>
          read single letters as is and combos (check how it sound in the table)
        </li>
        <li>Congratulatios. Your russian is perfect!</li>
      </ul>
      <p>
        Here is the happy little helper. Press button to split, then click
        result to listen the word.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
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
        <div data-say={syllables.split("-").join("")} onClick={sayit}>
          {syllables}
        </div>
        <button type="submit">get help</button>
      </form>
      <br />
      <aside>
        <p>Hard sign and soft sign.</p>
      </aside>
      <ul onClick={sayit}>
        <li>Ь (soft sign) make previuos consonant letter soft</li>
        listen this
        <div data-say="кон">кон</div>
        <div data-say="конь">конь</div>
        <li>
          Both often used as sound devider. like they want you not to connect
          letters that it devides.{" "}
        </li>
        listen this
        <div data-say="семя">семя</div>
        <div data-say="семья">семья</div>
      </ul>
    </article>
  );
};
