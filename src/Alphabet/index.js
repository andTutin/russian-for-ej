import { alphabet } from "./alphabet";
import { useSpeaker } from "../Speaker";
import "./Alphabet.css";

export const Alphabet = () => {
  const sayit = useSpeaker();

  return (
    <section className="alphabet" onClick={sayit}>
      {console.log("рендер алфабэт")}
      <h1 className="section__title">Alphabet</h1>
      <ul className="alphabet__list">
        {alphabet.map((l) => (
          <li key={l} className="alphabet__item">
            <div className="letter" data-say={l}>
              <span className="listenable" data-say={l}>
                {l.toUpperCase()}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className="letters-block">
        <div className="letters-block__title">
          А, К, М, О, Т. These letters look and sound basically the same
        </div>
        <div className="letters-block__description">
          There is nothing else to say
        </div>
      </div>
      <div className="letters-block">
        <div className="letters-block__title">
          В, Е, Н, Р, С, У, Х. These letters look familiar but sound different
        </div>
        <div className="letters-block__description">
          <ul className="examples-list">
            <li className="example">
              <div className="example__letter">В:</div>
              <div className="example__sound">[v]</div>
              <div className="example__words">
                <span className="listenable" data-say="Водка">
                  Vodka
                </span>
                ,{" "}
                <span className="listenable" data-say="из рашен планэт">
                  Venus
                </span>
                , Vladimir *RULE8*
              </div>
            </li>
            <li className="example">
              <div className="example__letter">Е:</div>
              <div className="example__sound">[ye]</div>
              <div className="example__words">
                Yeah (James Hetfield pretty good at this)
              </div>
            </li>
            <li className="example">
              <div className="example__letter">Н:</div>
              <div className="example__sound">[n]</div>
              <div className="example__words">Nasa, Niel Armstrong</div>
            </li>
            <li className="example">
              <div className="example__letter">Р:</div>
              <div className="example__sound">[r]</div>
              <div className="example__words">
                RRRAAAAA-TATATA RRRAAAAA-TATATATA
              </div>
            </li>
            <li className="example">
              <div className="example__letter">С:</div>
              <div className="example__sound">[s]</div>
              <div className="example__words">
                Saturn 5,{" "}
                <span className="listenable" data-say="Снорт">
                  Снорт
                </span>
              </div>
            </li>
            <li className="example">
              <div className="example__letter">У:</div>
              <div className="example__sound">[oo]</div>
              <div className="example__words">Oops</div>
            </li>
            <li className="example">
              <div className="example__letter">Х:</div>
              <div className="example__sound">[h kh]</div>
              <div className="example__words">
                <span className="listenable" data-say="Хард басс">
                  Hard Bass
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="letters-block">
        <div className="letters-block__title">
          Б, Г, Д, З, И, Й, Л, П, Ф, Э, Ю, Я. These letters sounds familiar but
          look different
        </div>
        <div className="letters-block__description">
          <ul className="examples-list">
            <li className="example">
              <div className="example__letter">Б:</div>
              <div className="example__sound">[b]</div>
              <div className="example__words">
                <span className="listenable" data-say="Буран">
                  Buran
                </span>
                {", "}
                <span className="listenable" data-say="Байконур">
                  Baikonur
                </span>{" "}
              </div>
            </li>
            <li className="example">
              <div className="example__letter">Г:</div>
              <div className="example__sound">[g]</div>
              <div className="example__words">
                <span className="listenable" data-say="Гагарин">
                  Gagarin,
                </span>{" "}
                Glenn
              </div>
            </li>
            <li className="example">
              <div className="example__letter">Д:</div>
              <div className="example__sound">[d]</div>
              <div className="example__words">Discovery, Docking</div>
            </li>
            <li className="example">
              <div className="example__letter">З:</div>
              <div className="example__sound">[z]</div>
              <div className="example__words">
                <span className="listenable" data-say="Звезда">
                  Zvezda
                </span>
              </div>
            </li>
            <li className="example">
              <div className="example__letter">И:</div>
              <div className="example__sound">[ee]</div>
              <div className="example__words">Eagle (has landed)</div>
            </li>
            <li className="example">
              <div className="example__letter">Й:</div>
              <div className="example__sound">[y]</div>
              <div className="example__words">Deploy</div>
            </li>
            <li className="example">
              <div className="example__letter">Л:</div>
              <div className="example__sound">[l]</div>
              <div className="example__words">Launch</div>
            </li>
            <li className="example">
              <div className="example__letter">П:</div>
              <div className="example__sound">[p]</div>
              <div className="example__words">
                Perceverance,{" "}
                <span className="listenable" data-say="Прогресс">
                  Progress
                </span>
              </div>
            </li>
            <li className="example">
              <div className="example__letter">Ф:</div>
              <div className="example__sound">[f]</div>
              <div className="example__words">Falcon 9, Ford</div>
            </li>
            <li className="example">
              <div className="example__letter">Э:</div>
              <div className="example__sound">[a]</div>
              <div className="example__words">
                <span className="listenable" data-say="Энергия">
                  Energia
                </span>
                {", "}
                Eric Johnson
              </div>
            </li>
            <li className="example">
              <div className="example__letter">Ю:</div>
              <div className="example__sound">[you]</div>
              <div className="example__words">
                <span className="listenable" data-say="Союз">
                  Soyuz
                </span>
              </div>
            </li>
            <li className="example">
              <div className="example__letter">Я:</div>
              <div className="example__sound">[ya]</div>
              <div className="example__words">YAAA MAAAAAAN!!!</div>
            </li>
            <li className="example">
              <div className="example__letter"></div>
              <div className="example__sound"></div>
              <div className="example__words"></div>
            </li>
          </ul>
        </div>
      </div>
      <div className="letters-block">
        <div className="letters-block__title">
          Ё, Ж, Ц, Ч, Щ, Ш, Ы. Because God loves russians
        </div>
        <div className="letters-block__description">
          <ul className="examples-list">
            <li className="example">
              <div className="example__letter">Ё:</div>
              <div className="example__sound">[yo]</div>
              <div className="example__words">Yoda, Yoghurt</div>
            </li>
            <li className="example">
              <div className="example__letter">Ж:</div>
              <div className="example__sound">[zh]</div>
              <div className="example__words">
                Looks like bug sound like{" "}
                <span className="listenable" data-say="жук">
                  bug
                </span>
              </div>
            </li>
            <li className="example">
              <div className="example__letter">Ц:</div>
              <div className="example__sound">[ts, tz]</div>
              <div className="example__words">
                USS Nimitz,{" "}
                <span className="listenable" data-say="Циолковский">
                  Tsiolkovsky
                </span>
              </div>
            </li>
            <li className="example">
              <div className="example__letter">Ч:</div>
              <div className="example__sound">[ch]</div>
              <div className="example__words">Challenger, Chet</div>
            </li>
            <li className="example">
              <div className="example__letter">Щ:</div>
              <div className="example__sound">[sh]</div>
              <div className="example__words">Shuttle, Ship</div>
            </li>
            <li className="example">
              <div className="example__letter">Ш:</div>
              <div className="example__sound">[??]</div>
              <div className="example__words">??</div>
            </li>
            <li className="example">
              <div className="example__letter">Ы:</div>
              <div className="example__sound">[??]</div>
              <div className="example__words">??</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="letters-block">
        <div className="letters-block__title">Ъ, Ь. Have no sound</div>
        <div className="letters-block__description">
          Hard sign and soft sign.
        </div>
      </div>
    </section>
  );
};

export * from "./alphabet";
