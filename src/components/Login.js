import React from 'react';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import {
  Paper,
  Grid,
  Stack,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const paperStyle = {
    padding: 30,
    height: '70vh',
    width: 480,
    margin: '40px auto',
  };

  return (
    <>
      <Grid container justify="center" wrap="wrap">
        <Paper elevation={15} style={paperStyle}>
          <Stack spacing={5}>
            <Typography
              variant="h5"
              align="center"
              component="h3"
              color={'primary'}
            >
              Welcome
            </Typography>
            <Grid item align="center">
              <AdminPanelSettingsIcon color="primary" sx={{ fontSize: 150 }} />
            </Grid>
            <TextField
              type="text"
              label="username"
              variant="outlined"
              placeholder="username"
              required
            />
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              placeholder="Password"
              required
            />

            <Button
              type="submit"
              color="primary"
              fullWidth
              variant="contained"
              onClick={() => navigate('/Home')}
            >
              Sign In
            </Button>
            <Grid align="center">
              <FormControlLabel
                align="center"
                control={<Checkbox name="checkedB" color="primary" />}
                label="Remember Me"
              />
            </Grid>
            <Grid align="right">
              <span style={{ cursor: 'pointer' }}>Forgot Password?</span>
            </Grid>
          </Stack>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;
