import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/alphabet">Alphabet</Link>
      </li>
      <li>
        <Link to="/reading">How to read</Link>
      </li>
      <li>
        <Link to="/phrasebook">Phrasebook</Link>
      </li>
      <li>
        <Link to="/admin">+</Link>
      </li>
    </ul>
  );
};
