import Checkbox from "./Checkbox";

import classes from "../styles/Answers.module.css";

const Answers = () => {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="test answer" />
    </div>
  );
};

export default Answers;
