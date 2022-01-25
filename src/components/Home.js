import React from 'react';
import {
  CardHeader,
  Grid,
  Card,
  CardContent,
  Typography,
  Toolbar,
} from '@mui/material';
import Appbar from './Appbar';

const Home = () => {
  return (
    <>
      <Appbar />

      <Grid
        container
        spacing={2}
        style={{ paddingTop: '20px', paddingLeft: '20px' }}
      >
        <Grid item xs={10} sm={10} md={4} lg={4}>
          <Card>
            <CardHeader title="Welcome" />

            <CardContent>This is content</CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
