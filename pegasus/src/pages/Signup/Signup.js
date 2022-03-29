import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Signup.module.css';
import axios from 'axios';

export default class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      email: '',
      address: '',
      password: '',
      zipcode: '',
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
    const api = 'https://q9hhz3z4p7.execute-api.us-east-1.amazonaws.com/dev/usersignup'
    const data = {'Email': this.state.email, 'Address': this.state.address, 'Password': this.state.password, 'Zipcode': this.state.zipcode}
    console.log("check", this.state.email);

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

        <form className="mt-5 py-5 px-5" onSubmit={this.handleSubmit}>
        <div className={styles.logInBox}>
        <h1 className={styles.text1}>
            Sign Up to
            <Link className="title ml-2" to="/">
              <h1 className={styles.text3}>Pegasus</h1>
            </Link>
          </h1>
        </div>
        <div className={styles.logInBox}>
          <p className={styles.text}>Fill in the form below to create an account.</p>
          </div>
          <div className={styles.logInBox}>
            <input className={styles.formcontrol2} placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
          </div>
          <div className={styles.logInBox}>
            <input className={styles.formcontrol2} placeholder="Address" name="address" type="address" onChange={this.handleChange} value={this.state.address}></input>
          </div>
          <div className={styles.logInBox}>
            <input className={styles.formcontrol2} placeholder="Password" name="password" type="password" onChange={this.handleChange} value={this.state.password}></input>
          </div>
          <div className={styles.logInBox}>
            <input className={styles.formcontrol2} placeholder="Zipcode" name="zipcode" type="zipcode" onChange={this.handleChange} value={this.state.zipcode}></input>
          </div>
          <div className={styles.logInBox}>
          <div className="form-group">
            <button className={styles.signUpButton} type="submit">Sign up</button>
          </div>
          </div>
          <div className={styles.logInBox}>
          <p className={styles.text1}>Already have an account? <Link to="/login"><p className={styles.text3}>Login</p></Link></p>
          </div>
        </form>

    )
  }
}