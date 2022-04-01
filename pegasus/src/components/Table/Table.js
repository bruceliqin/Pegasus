import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { getModalUtilityClass } from '@mui/material';
import styles from './Table.module.css';
import { Link } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const rows = [];

function createData(ID, Status, Address, Time) {
  return { ID, Status, Address, Time };
}

export default class CustomizedTables extends React.Component {
  constructor() {
    super();
    this.state = {
      mail : []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  async handleSubmit(event) {
    const refresh = [];
    event.preventDefault();
    console.log("refresh");
    const api = 'https://q9hhz3z4p7.execute-api.us-east-1.amazonaws.com/dev/getmails';

    axios
      .get(api)
      .then((response) => {
        Object.values(response.data.body).forEach((item, i) => {
          refresh.push(createData(item.ID, item.Status, item.Address, item.Time));
        })
        this.setState({mail : refresh})
        console.log(this.state.mail);
      })
      .catch((error) => {
        console.log(error);
      });
    }

    async handleSchedule(mailID, time) {
      console.log("refresh");
      const api = 'https://q9hhz3z4p7.execute-api.us-east-1.amazonaws.com/dev/schedule';
      const data = {'MailID': mailID, 'Time': time};
      console.log(data)

      axios
      .post(api, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    }


  componentDidMount() {
    const api = 'https://q9hhz3z4p7.execute-api.us-east-1.amazonaws.com/dev/getmails';

    axios
      .get(api)
      .then((response) => {
        Object.values(response.data.body).forEach((item, i) => {
          rows.push(createData(item.ID, item.Status, item.Address, item.Time));
        })
        console.log(typeof rows);
        this.setState({mail : rows})
        console.log(this.state.mail);
      })
      .catch((error) => {
        console.log(error);
      });
  }

   render() {
    return (
      <div>
      <TableContainer component={Paper}>
        <Table 
        sx={{
          minWidth: '90vh',
          minHeight: '50vh',
          '& .MuiTableCell-root.MuiTableCell-head': {color: '#2f2a26', backgroundColor:'#c3c3c1'},
  
        }}
        aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center"> Mail ID</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Status&nbsp;</StyledTableCell>
              <StyledTableCell align="center">Time&nbsp;</StyledTableCell>
              <StyledTableCell align="center">To Schedule&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.mail.map((row) => (
              <StyledTableRow key={row.ID}>
                <StyledTableCell align="center" component="th" scope="row">
                  {row.ID}
                </StyledTableCell>
                <StyledTableCell align="center">{row.Status}</StyledTableCell>
                <StyledTableCell align="center">{row.Address}</StyledTableCell>
                <StyledTableCell align="center">{row.Time}</StyledTableCell>
                {(() => {
                  if (row.Status === "Logged") {
                    return <StyledTableCell align="center">
                        <Link to={{ pathname: `/schedule`, state: { mailID: row.ID } }}>
                        <p className={styles.text3}> Schedule </p>
                        </Link>
                      </StyledTableCell>
                  } else {
                    return <StyledTableCell align="center">{"-"}</StyledTableCell>
                  }
                })()}
              </StyledTableRow>
            ))}
          </TableBody>
          
        </Table>
      </TableContainer>
      <form className={styles.refresh} onSubmit={this.handleSubmit} align ="center"><button type="submit">Refresh</button></form>
    </div>
    );
   } 
}
