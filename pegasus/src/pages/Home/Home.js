import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import HeaderHome from '../../components/Header_Home/Header_Home';
export default class HomePage extends Component {
  render() {
    return (
      <div className="body">
        <HeaderHome />
      <div className={styles.mainSection}>
        <div className = {styles.center}>
            <div className="container text-center py-5">
                    <h1 className={styles.text1}>Welcome to</h1>
                    <h1 className={styles.text2}> Pegasus</h1>
                    <p className={styles.text}>A flexible mail delivery service.</p>
                    <div className="mt-4">
                      <div className={styles.btnBox}>
                      <div className={styles.btn}>
                      <Link className="btn px-5" to="/login">Log In</Link>
                      </div>
                      <div className={styles.btn2}>
                      <Link className="btn px-5" to="/signup">Sign Up</Link>
                      </div>
                      </div>
                    </div>
            </div>
        </div>
      </div>
      </div>
    )
  }
}