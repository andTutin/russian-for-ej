export const Quote = ({ speech, speaker }) => {
  return (
    <blockquote>
      {`"${speech}"`}
      <footer>{`- ${speaker}.`}</footer>
    </blockquote>
  );
};
