import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Schedule.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';

function Schedule(props) {
    console.log(props.location.state);
}

export default Schedule;