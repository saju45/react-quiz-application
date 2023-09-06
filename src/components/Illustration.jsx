import image from "../assets/images/signup.svg";
import classes from "../styles/Illustration.module.css";

const Illustration = () => {
  return (
    <div className={classes.illustration}>
      <img src={image} alt="Signup" />
    </div>
  );
};

export default Illustration;
