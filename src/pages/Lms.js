import React from "react";
import classes from "./Lms.module.scss";
import LoginForm from "./LoginForm";

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
      <div className={`${classes.circleRing} ${classes.yellowRing}`}></div>
      <div className={`${classes.circleRing} ${classes.blueRing}`}></div>
      <div className={classes.insideFlexLeft}>
        <div className={classes.formBox}>
          <h1 className={classes.formHeading}>LOGIN</h1>
          <LoginForm classes={classes}/>
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
