import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

function WecomeNav() {
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar
            maxWidth="xs"
            variant="regular"
            sx={{ py: 1 }} //paddingTop: 1, paddingBottom: 1
          >
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              sx={{
                flexGrow: 1,
                fontSize: '1.2rem',
                '@media (min-width:600px)': {
                  fontSize: '1.5rem',
                },
              }}
            >
              <NavLink
                to="/"
                style={{ color: '#FEFEFE', textDecoration: 'none' }}
              >
                BUDGET MASTER
              </NavLink>
            </Typography>

            <Stack spacing={{ sm: 4, xs: 1 }} direction="row">
              <NavLink to="/login">
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<LoginOutlinedIcon />}
                  sx={{ borderRadius: '2rem' }}
                >
                  Login
                </Button>
              </NavLink>
              <NavLink to="/register" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<PersonAddAltOutlinedIcon />}
                  sx={{ borderRadius: '2rem' }}
                >
                  Register
                </Button>
              </NavLink>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default WecomeNav;
