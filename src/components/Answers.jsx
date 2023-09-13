/* eslint-disable react/prop-types */
import Checkbox from "./Checkbox";

import { Fragment } from "react";
import classes from "../styles/Answers.module.css";

const Answers = ({ options = [], handleChanged, input }) => {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        // eslint-disable-next-line react/jsx-key
        <Fragment key={index}>
          {input === true ? (
            <Checkbox
              className={classes.answer}
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChanged(e, index)}
            />
          ) : (
            <Checkbox
              className={`${classes.answer} ${
                option.correct
                  ? classes.correct
                  : option.checked
                  ? classes.wrong
                  : null
              }`}
              text={option.title}
              value={index}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Answers;
