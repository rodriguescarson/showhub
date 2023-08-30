// Home.js
import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <span>Home</span>
          <Button color="inherit" component={Link} to="/login">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Home;
