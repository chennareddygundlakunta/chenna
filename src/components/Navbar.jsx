// src/components/Navbar.jsx
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar className="d-flex justify-content-between">
        <Typography variant="h6" component={Link} to="/" style={{ color: 'white', textDecoration: 'none' }}>
          CrowdFund
        </Typography>
        <Button color="inherit" component={Link} to="/login">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
