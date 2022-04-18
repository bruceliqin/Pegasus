import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './UPS.module.css';
import Header from '../../components/Header/Header';
import axios from 'axios';

function UPS(props) {
  const [deliveryInfo, setDeliveryInfo] = useState({ mailID: null, address: null });

  function handleChange(event) {
    let newDeliveryInfo = { ...deliveryInfo };
    newDeliveryInfo[event.target.name] = event.target.value
    setDeliveryInfo(newDeliveryInfo);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const api = 'https://q9hhz3z4p7.execute-api.us-east-1.amazonaws.com/dev/submitmail'
    const data = { 'MailID': deliveryInfo.mailID, 'Address': deliveryInfo.address }

    axios
      .post(api, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <Header></Header>

      <form className="mt-5 py-5 px-5" onSubmit={(e) => { handleSubmit(e) }}>
        <div className={styles.logInBox}>
          <p className={styles.text}>Fill in the form below to submit a mail.</p>
        </div>
        <div className={styles.logInBox}>
          <input className={styles.formcontrol2} placeholder="Mail ID" name="mailID" type="mailID" onChange={(e) => { handleChange(e) }} value={deliveryInfo.mailID}></input>
        </div>
        <div className={styles.logInBox}>
          <input className={styles.formcontrol2} placeholder="Address" name="address" type="address" onChange={(e) => { handleChange(e) }} value={deliveryInfo.address}></input>
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

export default UPS;
