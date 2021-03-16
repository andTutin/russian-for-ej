import russian from "./russian.png";
import _for from "./for.png";
import ej from "./ej.png";
import { Link } from "react-router-dom";
import "./Logo.css";

export const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img alt="Russian" src={russian} />
        <img alt="for" src={_for} />
        <img alt="EJ" src={ej}  />
      </Link>
    </div>
  );
};
