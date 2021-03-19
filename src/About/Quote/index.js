import "./Quote.css";

export const Quote = ({ speech, speaker }) => {
  return (
    <div className="quote">
      <div className="quote__text">{`"${speech}"`}</div>
      <div className="quote__speaker">{`- ${speaker}.`}</div>
    </div>
  );
};
