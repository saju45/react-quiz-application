import { Link } from "react-router-dom";
import classNames from "../styles/Account.module.css";

const Account = () => {
  return (
    <div className={classNames.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default Account;
