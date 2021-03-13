import { alphabet, alphaBetter } from "./alphabet";
import { useSpeaker } from "../Speaker";

export const Alphabet = () => {
  const sayit = useSpeaker();

  return (
    <article onClick={sayit}>
      <header>
        <h2>Alphabet</h2>
      </header>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}
      >
        {alphaBetter.map((a) => (
          <div
            key={a.letter}
            data-say={a.letter}
            className="letter-card"
            style={{
              width: "15%",
              minWidth: "100px",
              height: "200px",
              background: `url(${a.bg}) center center  / cover`,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              borderRadius: "15px",
              overflow: "hidden",
              margin: "10px"
            }}
          >
            <div
              data-say={a.letter}
              style={{
                fontSize: "50px",
                fontWeight: "700",
                color: "#fff",
                zIndex: "100"
              }}
            >
              {a.letter.toUpperCase()}
            </div>
            <div
              data-say={a.word.rus}
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#fff",
                zIndex: "100"
              }}
            >
              {a.word.translit}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {alphabet.slice(6).map((l) => (
          <a href="/" key={l}>
            <i data-say={l}>{l.toUpperCase()}</i>
          </a>
        ))}
      </div>
      <aside>
        <p>А, К, М, О, Т. These letters look and sound basically the same</p>
      </aside>
      <p>There is nothing else to say</p>
      <aside>
        <p>
          В, Е, Н, Р, С, У, Х. These letters look familiar but{" "}
          <i>sound different</i>
        </p>
      </aside>
      <ul>
        <li>
          В: like [v] - <b>V</b>odka,
          <span data-say="из рашн">
            <b>V</b>enus
          </span>
          , <b>V</b>ladimir *<b>RULE8</b>*
        </li>
        <li>
          Е: like [ye] - <b>Ye</b>ah (James Hetfield pretty good at this)
        </li>
        <li>
          Н: like [n] - <b>N</b>asa, <b>N</b>iel Armstrong
        </li>
        <li>
          Р: like [r] - <b>RRR</b>AAAAA-TATATA <b>RRR</b>AAAAA-TATATATA
        </li>
        <li>
          С: like [s] - <b>S</b>aturn 5, <b>S</b>oyuz, auto<b>S</b>nort
        </li>
        <li>
          У: like [oo] - <b>Oo</b>ps
        </li>
        <li>
          Х: like [h, kh] - <b>H</b>ard Bass
        </li>
      </ul>
      <aside>
        <p>
          Б, Г, Д, З, И, Й, Л, П, Ф, Э, Ю, Я. These letters sounds familiar but{" "}
          <i>look different</i>
        </p>
      </aside>
      <ul>
        <li>
          Б: like [b] - <b>B</b>uran, <b>B</b>aikonur,
        </li>
        <li>
          Г: like [g] - <b>G</b>agarin, <b>G</b>lenn
        </li>
        <li>
          Д: like [d] - <b>D</b>iscovery, <b>D</b>ocking
        </li>
        <li>
          З: like [z] - <b>Z</b>vezda
        </li>
        <li>
          И: like [e] - <b>Ea</b>gle (has landed)
        </li>
        <li>
          Й: like [y] - Deplo<b>y</b>
        </li>
        <li>
          Л: like [l] - <b>L</b>aunch
        </li>
        <li>
          П: like [p] - <b>P</b>erceverance, <b>P</b>rogress,
        </li>
        <li>
          Ф: like [f] - <b>F</b>alcon 9, <b>F</b>ord
        </li>
        <li>
          Э: like [a] - <b>E</b>nergia, <b>E</b>ric Johnson
        </li>
        <li>
          Ю: like [u, you] - so<b>You</b>z
        </li>
        <li>
          Я: like [ya] - <b>YAAA</b> MAAAAAAN!!!
        </li>
      </ul>
      <aside>
        <p>Ё, Ж, Ц, Ч, Щ, Ш, Ы. Because God loves russians</p>
      </aside>
      <ul>
        <li>
          Ё: like [yo] - <b>Yo</b>da, <b>Yo</b>ghurt
        </li>
        <li>Ж: like [zh?] - looks like bug sound like bug</li>
        <li>
          Ц: like [ts or tz] - USS Nimi<b>tz</b>, <b>Ts</b>iolkovsky, i
          <b>t's</b>
        </li>
        <li>
          Ч: like [ch] - <b>Ch</b>allenger, <b>Ch</b>et
        </li>
        <li>
          Щ: like [sh] - <b>Sh</b>uttle, <b>Sh</b>ip
        </li>
        <li>
          Ш: its like Щ but hard. move tongue back when you say <b>Щ</b>
        </li>
        <li>
          Ы: its like И but hard. move tongue back when you say <b>И</b>
        </li>
      </ul>
      <aside>
        <p>Ъ, Ь. Have no sound</p>
      </aside>
      <ul>
        <li>Hard sign and soft sign.</li>
        {/*
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
        <div data-say="семья">семья</div>*/}
      </ul>
    </article>
  );
};

export * from "./alphabet";
