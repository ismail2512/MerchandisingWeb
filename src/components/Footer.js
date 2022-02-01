import React from 'react';
import { Paper, Typography } from '@mui/material';

const Footer = () => {
  return (
    <div>
      <footer
        style={{
          marginTop: '20px',
          textAlign: 'center',
          padding: '10px',
          marginBottom: '0px',
        }}
      >
        <Paper elevation={15}>
          {/* <Typography variant="h5" component="h5">
            Da'aem Al-Mutawarah
          </Typography> */}
          <Typography component="p">
            2022 All right reserved by Daaem Al-Mutawarah
          </Typography>
        </Paper>
      </footer>
    </div>
  );
};

export default Footer;
