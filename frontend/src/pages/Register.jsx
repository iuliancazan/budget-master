import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from '@mui/material';
import { useState } from 'react';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { toast } from 'react-toastify';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error('Passwords do not match.');
    }
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
            <PersonAddAltOutlinedIcon
              sx={{ fontSize: 32, marginRight: '1rem' }}
            />
            <Typography variant="h4" align="center" component="div">
              Register
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" mb={4}>
            Please create an account
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
              id="name"
              name="name"
              label="Name"
              value={name}
              onChange={onChange}
              fullWidth
              sx={{ width: '24rem' }}
            />
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
            <TextField
              id="password2"
              name="password2"
              label="Confirm Password"
              value={password2}
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
              Register
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
            Register with Google
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Register;
