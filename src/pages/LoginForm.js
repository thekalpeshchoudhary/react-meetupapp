import React from "react";

const LoginForm = ({ classes }) => {
  return (
    <form className={classes.form}>
      <input
        className={`${classes.formControl} ${classes.formInput}  ${classes.userNameIcon}`}
        type="text"
        placeholder="Email"
        id="email"
      />
      <input
        className={`${classes.formControl} ${classes.formInput}  ${classes.passIcon}`}
        type="text"
        placeholder="Password"
        id="password"
      />
      <div className={classes.formControl}>
        <label className={classes.checkContainer}>
          Remember Me
          <input type="checkbox" defaultChecked={true} />
          <span className={classes.checkmark}></span>
        </label>
      </div>
      <div className={`${classes.formControl} ${classes.formAction} `}>
        <button className={classes.loginBtn}>Sign In</button>
        <button className={classes.linkBtn}>Forgot Password?</button>
      </div>
    </form>
  );
};

export default LoginForm;
