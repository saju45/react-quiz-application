import classNames from "../styles/Account.module.css";

const Account = () => {
  return (
    <div className={classNames.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <a href="signup.html">Signup</a>
    </div>
  );
};

export default Account;
