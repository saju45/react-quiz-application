import Account from "./Account";

import logo from "../assets/images/logo-bg.png";
import classNames from "../styles/Nav.module.css";
const Nav = () => {
  return (
    <nav className={classNames.nav}>
      <ul>
        <li>
          <a href="index.html" className={classNames.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
