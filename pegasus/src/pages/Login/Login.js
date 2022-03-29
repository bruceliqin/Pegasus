import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from './Login.module.css';

export default class Login extends Component {

  render() {
    return (
        <form
          className="mt-5 py-5 px-5"
          autoComplete="off"
        >
        <div className={styles.logInBox}>
          <h1 className={styles.text1}>
            Login to 
            <Link className="title ml-2" to="/">
              <h1 className={styles.text2}>Pegasus</h1>
            </Link>
          </h1>
          </div>
          <div className={styles.logInBox}>
          <p className={styles.text}>
            Fill in the form below to login to your account.
          </p>
          </div>
          <div className={styles.logInBox}>
            <input
              className={styles.formcontrol2}
              placeholder="Email"
              name="email"
              type="email"
            />
          </div>
          <div className={styles.logInBox}>
            <input
              className={styles.formcontrol2}
              placeholder="Password"
              name="password"
              type="password"
            />
          </div>
          <div className="form-group">
            <div className={styles.logInBox}>
                <Link to="/dashboard">
                <button className={styles.logInButton} type="submit">
                    Log In
                </button>
                </Link>
            </div>
          </div>
        </form>
    );
  }
}