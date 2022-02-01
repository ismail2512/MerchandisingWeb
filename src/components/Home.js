import React from 'react';
import {
  CardHeader,
  Grid,
  Card,
  CardContent,
  Typography,
  Toolbar,
  Paper,
} from '@mui/material';
import Appbar from './Appbar';
import DamageChart from './admin_charts/DamageChart';
import ExpiredChart from './admin_charts/ExpiredChart';
import OutOfStock from './admin_charts/OutOfStock';
import News from './admin_charts/News';
import OSA from './admin_charts/OSA';
import Visits from './admin_charts/Visits';
import ProbableLost from './admin_charts/ProbableLost';
import Deliveries from './admin_charts/Deliveries';
import Footer from './Footer';
const Home = () => {
  const headerSpace = {
    textAlign: 'center',
  };
  const margin = {
    paddingTop: '20px',
    paddingLeft: '15px',
    paddingRight: '15px',
  };
  const width = 4;
  return (
    <>
      <Appbar />

      <Grid container spacing={2} style={margin}>
        <Grid item xs={10} sm={10} md={width} lg={width}>
          <Card>
            <CardHeader title="Damage" style={headerSpace} />

            <CardContent>
              <DamageChart />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={10} sm={10} md={width} lg={width}>
          <Card>
            <CardHeader title="Expired" style={headerSpace} />

            <CardContent>
              <ExpiredChart />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sm={10} md={width} lg={width}>
          <Card>
            <CardHeader title="Out Of Stock" style={headerSpace} />

            <CardContent>
              <OutOfStock />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={margin}>
        <Grid item xs={10} sm={10} md={7} lg={7}>
          <Card>
            <CardHeader title="On Shelf Availability" style={headerSpace} />
          </Card>
          <Paper>
            <OSA />
          </Paper>
        </Grid>
        <Grid item xs={10} sm={10} md={5} lg={5}>
          <Card>
            <CardHeader
              title="Probable Lost Sales Opportunity"
              style={headerSpace}
            />
            <Paper>
              <ProbableLost />
            </Paper>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={margin}>
        <Grid item xs={10} sm={10} md={5} lg={5}>
          <Paper>
            <Visits />
          </Paper>
        </Grid>

        <Grid item xs={10} sm={10} md={4} lg={4}>
          <Paper>
            <Deliveries />
          </Paper>
        </Grid>
        <Grid item xs={10} sm={10} md={3} lg={3}>
          <Card>
            <CardHeader title="Challanges" style={headerSpace} />
          </Card>
          <News />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
