/* eslint-disable react/prop-types */

import classes from "../styles/Form.module.css";

const Form = ({ children, className, ...rest }) => {
  return (
    <form className={`${classes.form} ${className}`} action="#" {...rest}>
      {children}
    </form>
  );
};

export default Form;
