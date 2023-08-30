import React, { useState } from 'react';
import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import { TextField, Button, Snackbar,Container, Box } from '@mui/material';
import { useAuth } from "../Providers/Auth";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  const handleLogin = async (event) => {
    event.preventDefault();

    // Basic email format validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setSnackbarMessage("Invalid email format");
      setSnackbarOpen(true);
      return;
    }

    // Password validation: min 8, max 16 characters, alphanumeric
    if (!/^[A-Za-z0-9]{8,16}$/.test(password)) {
      setSnackbarMessage("Password must be 8-16 characters long and alphanumeric");
      setSnackbarOpen(true);
      return;
    }

    const success = await auth.signin(email, password);

    if (success) {
      navigate(from, { replace: true });
    } else {
      setSnackbarMessage("Login failed. Please check your credentials.");
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="xs">
    <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </Box>
  </Container>
  );
}

export default Login;
