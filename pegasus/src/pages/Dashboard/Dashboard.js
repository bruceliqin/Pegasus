import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';
export default class Dashboard extends Component {
  render() {
    return (
      <div className="body">
      <div className={styles.mainSection}>
        <div className = {styles.center}>
            <div className="container text-center py-5">
                    <h1 className={styles.text2}> Dashboard</h1>
                    <div className="mt-4">
                    </div>
            </div>
        </div>
      </div>
      </div>
    )
  }
}