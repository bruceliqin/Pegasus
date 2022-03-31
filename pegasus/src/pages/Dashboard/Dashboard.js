import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import CustomizedTables from '../../components/Table/Table';
import Header from '../../components/Header/Header';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="body">
      <Header></Header>
      <div className={styles.mainSection}>
        <div className = {styles.center}>
          <CustomizedTables />
        </div>
      </div>
      </div>
    )
  }
}