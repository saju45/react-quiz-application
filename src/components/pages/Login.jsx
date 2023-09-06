import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
const Login = () => {
  return (
    <div>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <Form className={` ${classes.login}`}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <Button>Submit now</Button>
          <div className="info">
            Dont have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;