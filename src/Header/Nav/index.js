import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../Store/actions";
import "./Nav.css";

const navLinks = [
  {
    text: "alphabet",
    to: "/alphabet",
  },
  {
    text: "reading",
    to: "/reading",
  },
  {
    text: "phrasebook",
    to: "/phrasebook",
  },
  {
    text: "+",
    to: "/admin",
  },
];

export const Nav = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state);
  const clickHandler = (e) => {
    e.preventDefault();

    if (!e.target.parentElement.classList.contains("nav__item")) return;
    dispatch(setCurrentPage(e.target.innerText));
  };

  return (
    <nav className="nav">
      <ul className="nav__list" onClick={clickHandler}>
        {navLinks.map((link) =>
          link.text === currentPage ? (
            <li key={link.text} className="nav__item nav__item--active">
              <Link to={link.to}>{link.text}</Link>
            </li>
          ) : (
            <li key={link.text} className="nav__item">
              <Link to={link.to}>{link.text}</Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};
