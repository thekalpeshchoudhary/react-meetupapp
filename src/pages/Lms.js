import React from "react";
import classes from "./Lms.module.scss";

const Lms = () => {
  return (
    <div className={classes.flexContainer}>
      <img
        src="/lightBlueCircle.svg"
        alt="lightBlueCircle"
        className={classes.lightBlueCircle}
      />
      <img
        src="/yellowCircle.svg"
        alt="yellowCircle"
        className={classes.yellowCircle}
      />
      <div className={classes.insideFlexLeft}>
        <div className={classes.formBox}>
          <h1 className={classes.formHeading}>LOGIN</h1>
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
              <input type="checkbox" checked="checked" />
              <span>Remember Me</span>
            </div>
            <div className={`${classes.formControl} ${classes.formAction} `}>
              <button className={classes.loginBtn}>Sign In</button>
              <button className={classes.linkBtn}>Forgot Password?</button>
            </div>
          </form>
        </div>
      </div>
      <div className={classes.insideFlexRight}>
        <div className={classes.blueBox}>
          <h1 className={classes.mainHeading}>WELCOME TO</h1>
          <img
            className={classes.logo}
            src="/dotWiseLogo.svg"
            alt="dotWise Logo"
          />
          <p className={classes.subHead}>Driven by Data, Inspired by Design</p>
        </div>
      </div>
    </div>
  );
};

export default Lms;
