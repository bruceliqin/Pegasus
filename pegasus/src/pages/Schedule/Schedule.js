import React, { Component } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import styles from './Schedule.module.css';
import Header from '../../components/Header/Header';
import Scheduler from '../../components/Scheduler/Scheduler';
import axios from 'axios';
import AlarmIcon from '@mui/icons-material/Alarm';
import SnoozeIcon from '@mui/icons-material/Snooze';
import TextField from '@mui/material/TextField';
import ClockIcon from '@mui/icons-material/AccessTime';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import Stack from '@mui/material/Stack';

var t;

function UseScheduler() {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={2}>
        <MobileDateTimePicker
          disablePast
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            setValue(newValue)
            t = newValue
          }}
          label="Mail Scheduler"
          onError={console.log}
          inputFormat="yyyy/MM/dd hh a"
          mask="___/__/__ __ _M"
          renderInput={(params) => <TextField {...params} />}
          minDateMessage="Cannot schedule in the past."
          maxDate="2022-12-31"
          views={["year", "month", "day", "hours"]}
        />
      </Stack>
    </LocalizationProvider>
  );
}

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
        const data = {'MailID': this.props.location.state.mailID, 'Time': t}
    
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
            <div className="mt-5 py-5 px-5">
              <div className={styles.schdBox}>
                <UseScheduler display={true}/>
              </div>
              <div className={styles.logInBox}>
              <form onSubmit={this.handleSubmit} className="form-group">
                <button className={styles.signUpButton} type="submit">Schedule</button>
              </form>
              </div>
            </div>
            </div>
        )
      }
  }