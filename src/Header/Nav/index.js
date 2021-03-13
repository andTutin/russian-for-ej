import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/abc">Alphabet</Link>
      </li>
      <li>
        <Link to="/reading">How to read</Link>
      </li>
      <li>
        <Link to="/vocabulary">Phrasebook</Link>
      </li>
    </ul>
  );
};
