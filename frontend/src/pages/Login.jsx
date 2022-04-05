import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from '@mui/material';
import { useState } from 'react';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { toast } from 'react-toastify';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onGoogle = () => {
    console.log('Login with google');
  };

  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: 'calc(100vh - 100px)' }}
      >
        <Grid item xs={12}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: '1rem',
            }}
          >
            <LoginOutlinedIcon sx={{ fontSize: 32, marginRight: '1rem' }} />
            <Typography variant="h4" align="center" component="div">
              Login
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" mb={4}>
            Please enter your credentials
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form
            onSubmit={onSubmit}
            autoComplete="off"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: '1rem',
              gap: '2rem',
            }}
          >
            <TextField
              id="email"
              name="email"
              label="Email"
              value={email}
              onChange={onChange}
              fullWidth
              sx={{ width: '24rem' }}
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              value={password}
              type="password"
              onChange={onChange}
              fullWidth
              sx={{ width: '24rem' }}
            />
            <Button
              variant="contained"
              size="large"
              color="primary"
              sx={{ width: '24rem' }}
              type="submit"
            >
              Login
            </Button>
          </form>
          <Divider sx={{ mb: 2 }}>OR</Divider>
          <Button
            onClick={onGoogle}
            variant="contained"
            size="large"
            color="primary"
            startIcon={<GoogleIcon />}
            sx={{ width: '24rem' }}
          >
            Login with Google
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
