import * as React from 'react';
import AlarmIcon from '@mui/icons-material/Alarm';
import SnoozeIcon from '@mui/icons-material/Snooze';
import TextField from '@mui/material/TextField';
import ClockIcon from '@mui/icons-material/AccessTime';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import Stack from '@mui/material/Stack';
import styles from './Scheduler.module.css';

export default function Scheduler() {
  const [clearedDate, setClearedDate] = React.useState(null);
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={2}>
        <MobileDateTimePicker
          disablePast
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            setValue(newValue);
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