import React from 'react';
import { Link, useNavigate, Outlet } from "react-router-dom";
import { Box, Button, AppBar, Toolbar, Typography, Container } from '@mui/material';
import { useAuth } from '../Providers/Auth';

function Layout() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            
                    <Typography variant="h6">ShowHub</Typography>
                    <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Box sx={{ flexGrow: 1 }} />
          </Toolbar>
        </AppBar>
        <Container>
          <Outlet />
        </Container>
      </div>
    );
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
                  <Typography variant="h6">ShowHub</Typography>
                  <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/search">Search</Button>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1">
              Welcome {auth.user}!
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                auth.signout(() => navigate("/"));
              }}
            >
              Sign out
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default Layout;
