import { Logo } from "./Logo";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header>
      <nav>
        <Logo />
        <Nav />
      </nav>
    </header>
  );
};
