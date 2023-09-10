import { Link } from "react-router-dom";
import classNames from "../styles/Account.module.css";

import { useAuth } from "../contexts/AuthContext";

const Account = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div className={classNames.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="logout"
            onClick={logout}
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">login</Link>
        </>
      )}
    </div>
  );
};

export default Account;
