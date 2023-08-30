import React, { useState } from 'react';
import {
    useNavigate,
    useLocation,
} from "react-router-dom";
import { TextField,Button,Snackbar } from '@mui/material';
  import { useAuth } from "../Providers/Auth";
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
  
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();
  
    let from = location.state?.from?.pathname || "/";
  
    function handleLogin(event) {
        event.preventDefault();
  
      auth.signin(email, password, () => {
        navigate(from, { replace: true });
      });
    }
  
    return (
        <div>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            // Add validation and props
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            // Add validation and props
          />
          <Button type="submit" variant="contained" color="primary">Login</Button>
        </form>
        <Snackbar
          // Show snackbar for success/error notifications
        />
      </div>
    );
  }
export default Login;