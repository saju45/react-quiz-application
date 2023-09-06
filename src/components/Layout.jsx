/* eslint-disable react/prop-types */
import classes from "../styles/Layout.module.css";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />

      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
