import React, { Component } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import styles from './Schedule.module.css';
import Header from '../../components/Header/Header';
import axios from 'axios';


export default class Schedule extends Component {

    constructor() {
        super();
        this.state = {
          error: null,
          time: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount() {
        console.log(this.props.location.state.mailID);
      }

      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      async handleSubmit(event) {
        event.preventDefault();
        const api = 'https://q9hhz3z4p7.execute-api.us-east-1.amazonaws.com/dev/schedule'
        const data = {'MailID': this.props.location.state.mailID, 'Time': this.state.time}
    
        axios
          .post(api, data)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
        }
    
      render() {
        return (
            <div>
            <Header />
            <form className="mt-5 py-5 px-5" onSubmit={this.handleSubmit}>
              <div className={styles.logInBox}>
                <input className={styles.formcontrol2} placeholder="Time" name="time" type="t" onChange={this.handleChange} value={this.state.time}></input>
              </div>
              <div className={styles.logInBox}>
              <div className="form-group">
                <button className={styles.signUpButton} type="submit">Schedule</button>
              </div>
              </div>
            </form>
            </div>
        )
      }
  }