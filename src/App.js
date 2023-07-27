import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import RegistrationPage from './components/RegistrationPage';
import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0b286e',
    },
    secondary: {
      main: '#e61939',
    },
    background: {
      default: '#121212',
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    fontSize: 16,
    button: {
      textTransform: 'none',
      fontSize: '1rem',
    },
  },
  spacing: 4,
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
};

export default App;
