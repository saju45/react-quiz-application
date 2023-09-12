/* eslint-disable react/prop-types */
import Checkbox from "./Checkbox";

import classes from "../styles/Answers.module.css";

const Answers = ({ options = [], handleChanged }) => {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        // eslint-disable-next-line react/jsx-key
        <Checkbox
          className={classes.answer}
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(e) => handleChanged(e, index)}
        />
      ))}
    </div>
  );
};

export default Answers;
