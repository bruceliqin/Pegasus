import React, { Component } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import styles from './Schedule.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';


export default class Schedule extends Component {
    render() {
      return (
        <div className="body">
        <Header></Header>
        <div className={styles.mainSection}>
          <div className = {styles.center}>
           {this.props.match.params.mailID}
          </div>
        </div>
        </div>
      )
    }s
  }