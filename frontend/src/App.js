import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import WelcomeNav from './components/WecomeNav';

import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import { Container } from '@mui/material';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#344955',
    },
    secondary: {
      main: '#F9AA33',
    },
    background: {
      default: '#E5E5E5',
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // fontSize: '1rem',
          text: 'secondary',
          // borderWidth: '5px',
        },
      },
      variants: [
        {
          props: { variant: 'reply_outlined' },
          style: {
            border: '3px solid #F9AA33',
            borderRadius: '2rem',
            color: '#F9AA33',
          },
        },
        {
          props: { variant: 'reply_contained' },
          style: {
            // border: '3px solid #F9AA33',
            borderRadius: '2rem',
            color: '#344955',
            background: '#F9AA33',
          },
        },
      ],
      defaultProps: {},
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <WelcomeNav></WelcomeNav>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
