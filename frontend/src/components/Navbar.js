import React, { useContext } from 'react';
import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ThemeContext } from '../ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="static" color={isDarkMode ? 'primary' : 'inherit'}>
      <Toolbar>
        {/* Navigation Links */}
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/resources">Resources</Button>
        <Button color="inherit" component={Link} to="/tracker">Tracker</Button>
        <Button color="inherit" component={Link} to="/forum">Forum</Button>
        
        {/* Dark Mode Toggle */}
        <IconButton
          color="inherit"
          onClick={toggleTheme}
          edge="end"
          style={{ marginLeft: 'auto' }}
        >
          {isDarkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
