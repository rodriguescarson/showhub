// App.js
import React from 'react';
import { Link, useNavigate, Outlet } from "react-router-dom";
import { Box,Button,AppBar, Toolbar} from '@mui/material';
import { useAuth} from '../Providers/Auth';

function Layout() {
    const auth = useAuth();
    const navigate = useNavigate();
  
    if (!auth.user) {
      return  <div>
      <AppBar position="static">
        <Toolbar>
          <span>ShowHub</span>
          <Box sx={{ flexGrow: 1 }} /> {/* Create a flexible space */}
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
        </Toolbar>
      </AppBar>
      <div>
        <Outlet />
      </div>
    </div>;
    }
  
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <span>ShowHub</span>
            <Box sx={{ flexGrow: 1 }} /> {/* Create a flexible space */}
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/search">Search</Button>
            <div>
          {/* <p>
            Welcome {auth.user}!
              </p> */}
              </div>
            <Button
              color="inherit"
              onClick={() => {
                auth.signout(() => navigate("/"));
              }}
            >
              Sign out
            </Button>
          </Toolbar>
        </AppBar>
        <Outlet />
      </div>
    );
}
export default Layout;