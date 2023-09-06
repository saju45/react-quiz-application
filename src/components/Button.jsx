/* eslint-disable react/prop-types */
import classes from "../styles/Button.module.css";

const Button = ({ children }) => {
  return <div className={classes.button}>{children}</div>;
};

export default Button;
