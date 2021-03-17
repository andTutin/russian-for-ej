import russian from "./russian.png";
import _for from "./for.png";
import ej from "./ej.png";
import { Link } from "react-router-dom";
import "./Logo.css";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../Store/actions";

export const Logo = () => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(setCurrentPage("about"));
  };

  return (
    <div className="logo">
      <Link to="/" onClick={clickHandler}>
        <img alt="Russian" src={russian} />
        <img alt="for" src={_for} />
        <img alt="EJ" src={ej} />
      </Link>
    </div>
  );
};
