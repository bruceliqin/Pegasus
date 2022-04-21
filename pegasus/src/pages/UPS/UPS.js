import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './UPS.module.css';
import Header from '../../components/Header_Home/Header_Home';
import axios from 'axios';

export default class UPS extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      mailID: '',
      address: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const api = 'https://q9hhz3z4p7.execute-api.us-east-1.amazonaws.com/dev/submitmail'
    const data = {'MailID': this.state.mailID, 'Address': this.state.address}

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
        <Header></Header>

        <form className="mt-5 py-5 px-5" onSubmit={this.handleSubmit}>
        <div className={styles.logInBox}>
          <p className={styles.text}>Fill in the form below to submit a mail.</p>
          </div>
          <div className={styles.logInBox}>
            <input className={styles.formcontrol2} placeholder="Mail ID" name="mailID" type="mailID" onChange={this.handleChange} value={this.state.email}></input>
          </div>
          <div className={styles.logInBox}>
            <input className={styles.formcontrol2} placeholder="Address" name="address" type="address" onChange={this.handleChange} value={this.state.address}></input>
          </div>
          <div className={styles.logInBox}>
          <div className="form-group">
            <button className={styles.signUpButton} type="submit">Submit</button>
          </div>
          </div>
        </form>
        </div>

    )
  }
}