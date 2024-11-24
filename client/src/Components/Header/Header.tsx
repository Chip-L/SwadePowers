import "./Header.css";
import Logo from "./SWADE_Logo.png";

/*
  This is a function because it has no local state. It will inherit all
  of the states from the parent. Ths should, at some point, include login
  buttons.
*/
export function Header() {
  return (
    <header role="presentation">
      <div className="header-content">
        <div className="imgContainer">
          <img
            src={Logo}
            alt="Savage Worlds Logo"
          />
        </div>
        <div className="MainText">
          <h1>Savage Worlds</h1>
          <h2 className="web-show">Adventure Edition</h2>
        </div>
      </div>
    </header>
  );
}
