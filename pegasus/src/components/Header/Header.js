import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

export default function Header() {
  return (
    <div className='body'>
    <Box sx={{ flexGrow: 1}}>
      <AppBar sx={{ backgroundColor:'#afaba2', color:"#2f2a26"}} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pegasus
          </Typography>
          <Link className="btn px-5" to="/">Logout</Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}