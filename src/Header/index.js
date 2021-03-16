import { Logo } from "./Logo";
import { Nav } from "./Nav";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Nav />
    </header>
  );
};
