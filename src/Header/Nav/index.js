import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item nav__item--active">
          <Link to="/alphabet">Alphabet</Link>
        </li>
        <li className="nav__item">
          <Link to="/reading">Reading</Link>
        </li>
        <li className="nav__item">
          <Link to="/phrasebook">Phrasebook</Link>
        </li>
        <li className="nav__item"> 
          <Link to="/admin">+</Link>
        </li>
      </ul>
    </nav>
  );
};
