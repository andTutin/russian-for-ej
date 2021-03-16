import { Quote } from "./Quote";
import "./About.css";

export const About = () => {
  return (
    <section className="section home">
      <h1 className="section__title">hullo</h1>
      <div className="quotes">
        <ul className="quotes__list">
          <li className="quotes__item">
            <Quote
              speech="We choose to teach EJ russian in this decade not because it's easy,
          but because it's hard"
              speaker="Few russians in CHET"
            />
          </li>
          <li className="quotes__item">
            <Quote speech="...and do the other things" speaker="Same guys" />
          </li>
          <li className="quotes__item">
            <Quote speech="What a hell?" speaker="John F. Kennedy" />
          </li>
        </ul>
      </div>
      <p>
        This page uses WebSpeech API, which is experimental and works norminal
        only in Google Chrome.
      </p>
      <p>Click the word if cursor has changed.</p>
    </section>
  );
};
