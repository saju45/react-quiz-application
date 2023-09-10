import Account from "./Account";

import { Link } from "react-router-dom";
import logo from "../assets/images/logo-bg.png";
import classNames from "../styles/Nav.module.css";
const Nav = () => {
  return (
    <nav className={classNames.nav}>
      <ul>
        <li>
          <Link to="/" className={classNames.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Shanawaj Hossain</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
