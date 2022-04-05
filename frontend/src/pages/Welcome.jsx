import { Container, Grid, Typography } from '@mui/material';
import { blueGrey, red } from '@mui/material/colors';

function Welcome() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: 'calc(100vh - 100px)' }}
      >
        <Grid item xs={12} align="center">
          <img
            src="piggy-bank.png"
            alt=""
            style={{ opacity: '0.6', maxWidth: '50%' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            color="primary.dark"
            mt={10}
            fontSize={{
              sm: '2.125rem',
              xs: '1.5rem',
            }}
          >
            Money doesn’t have to be messy.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            color="primary.light"
            mt={1}
            fontSize={{
              sm: 24,
              xs: 18,
            }}
            fontWeight={{ xs: 300 }}
          >
            Budget tracker for the modern age.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Welcome;
