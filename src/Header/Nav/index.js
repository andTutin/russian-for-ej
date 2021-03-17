import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../Store/actions";
import "./Nav.css";

export const Nav = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector(state=>state);
  const setClass = (page) => {
    return page === currentPage ? "nav__item nav__item--active" : "nav__item";
  };
  const clickHandler = (page) => {
    dispatch(setCurrentPage(page))
  }

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className={setClass("alphabet")}>
          <Link to="/alphabet" onClick={() => clickHandler('alphabet')}>Alphabet</Link>
        </li>
        <li className={setClass("reading")}>
          <Link to="/reading" onClick={() => clickHandler('reading')}>Reading</Link>
        </li>
        <li className={setClass("phrasebook")}>
          <Link to="/phrasebook" onClick={() => clickHandler('phrasebook')}>Phrasebook</Link>
        </li>
        <li className={setClass("admin")}>
          <Link to="/admin" onClick={() => clickHandler('admin')}>+</Link>
        </li>
      </ul>
    </nav>
  );
};
