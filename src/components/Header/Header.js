import "./Header.css";
import logo from "../../images/logo.svg";

function Header(props) {
  return(
    <div className="header">
      <img className="header__logo"
        src={logo}
        alt="FoodSpin logo"
      />
      <nav className="header__nav">
        <a className="header__link" href="#">Breakfast</a>
        <a className="header__link" href="#">Lunch</a>
        <a className="header__link" href="#">Dinner</a>
      </nav>
      <button className="header__cart"
        type="button"
      />
    </div>
  );
}

export default Header;