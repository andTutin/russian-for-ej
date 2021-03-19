import { Splitter } from "../Splitter";
import { vowels, consonants } from "../Alphabet";
import { useSpeaker } from "../Speaker";
import "./Reading.css";

export const Reading = () => {
  const sayit = useSpeaker();

  return (
    <section className="reading">
      <h1 className="section__title">Reading</h1>
      <p>
        Reading russian is kinda WYSIWYG. letter = sound. There are some
        exeptions, but it's not like french.
      </p>
      <p>This is a consonant + vowel letter combinations table</p>
      <div className="table-wrapper">
        <table className="syllables-table" onClick={sayit}>
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
      </div>
      <p>
        There are probably combos that never used irl or break the rules of
        language, but there was a loop in the script, and i am too lazy to
        handle exceptions (you won't meet them anyway right?)
      </p>
      <div className="letters-block" onClick={sayit}>
        <div className="letters-block__title">Hard sign and soft sign.</div>
        <div className="letters-block__description">
          <ul className="examples-list">
            <li className="example__words">
              <div>Ь (soft sign) make previuos consonant letter soft</div>
              <div className="letters-block__description">
                <div>
                  <span className="listenable" data-say="кон">
                    кон
                  </span>
                </div>
                <div>
                  <span className="listenable" data-say="конь">
                    конь
                  </span>
                </div>
              </div>
            </li>
            <li className="example__words">
              <div>
                Both often used as sound devider. It doesn't want you to connect
                letters that it devides.
              </div>
              <div className="letters-block__description">
                <div>
                  <span className="listenable" data-say="семя">
                    семя
                  </span>
                </div>
                <div>
                  <span className="listenable" data-say="семья">
                    семья
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="letters-block" onClick={sayit}>
        <div className="letters-block__title">
          Lets read word{" "}
          <span className="listenable" data-say="Вдохновение">
            'Вдохновение'
          </span>{" "}
          (inspiration)
        </div>
        <div className="letters-block__description">
          <ul className="examples-list">
            <li className="example__words">
              Split on syllables вдо-хно-ве-ни-е
            </li>
            <li className="example__words">
              Split on singles and combos. Like this в [до]-х [но]-[ве]-[ни]- е
            </li>
            <li className="example__words">
              Read single letters and combos (check how it sound in the table)
            </li>
            <li className="example__words">???</li>
            <li className="example__words">
              Congratulatios. Your russian is perfect!
            </li>
          </ul>
        </div>
      </div>
      <p>
        Here is the happy little helper. Press button to split, then click
        result to listen the word.
      </p>
      <Splitter sayit={sayit} />
    </section>
  );
};
