import React, { useState } from 'react';
import Appbar from '../Appbar';
import { styled } from '@mui/material/styles';
import {
  Paper,
  TextField,
  Toolbar,
  Grid,
  Typography,
  Divider,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Avatar,
  Button,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SaveIcon from '@mui/icons-material/Save';
const AddCustomer = () => {
  const maxWidth = 12;
  const marginT = 4;
  const textBoxDecoration = {
    width: '40%',
    marginLeft: '2%',
  };
  const textBoxSmall = {
    width: '20%',
    marginLeft: '2%',
  };
  const Input = styled('input')({
    display: 'none',
  });
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const [city, setCity] = useState();
  return (
    <>
      <Appbar name="Add New Customer" />
      <Toolbar />

      <Paper
        elevation={10}
        style={{
          padding: '2%',
          marginTop: '2%',
          width: '70%',
          marginLeft: '10%',
        }}
      >
        <Grid container marginTop={marginT}>
          <Grid item xs={12} sm={12} md={maxWidth} lg={maxWidth}>
            <Typography variant="h5">Add Customer Details</Typography>
            <Divider />
          </Grid>
          <Grid
            container
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '1%',
            }}
          >
            <Avatar>
              <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </Avatar>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={maxWidth}
            lg={maxWidth}
            marginTop={marginT}
          >
            <TextField
              type="text"
              variant="outlined"
              placeholder="Customer name english"
              label="Customer Name"
              style={textBoxDecoration}
            />
            <TextField
              type="text"
              variant="outlined"
              placeholder="اسم العميل بالعربية"
              label="اسم العميل"
              style={textBoxDecoration}
            />
          </Grid>
        </Grid>

        <Grid container marginTop={marginT}>
          <Grid item xs={12} sm={12} lg={maxWidth} md={maxWidth}>
            <FormControl fullWidth style={{ marginLeft: '2%', width: '20%' }}>
              <InputLabel>Select Country</InputLabel>
              <Select label="Select Country" onChange={handleCityChange}>
                <MenuItem value={1}>Saudi Arabia</MenuItem>
                <MenuItem value={2}> UAE</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth style={{ marginLeft: '1%', width: '19%' }}>
              <InputLabel>Select City</InputLabel>
              <Select label="Select City" onChange={handleCityChange}>
                <MenuItem value={1}>Abha</MenuItem>
                <MenuItem value={2}> Riyadh</MenuItem>
              </Select>
            </FormControl>
            <TextField
              type="email"
              variant="outlined"
              placeholder="Email"
              label="Email"
              style={textBoxSmall}
            />
            <TextField
              type="number"
              variant="outlined"
              placeholder="Contact Number"
              label="Contact Number"
              style={{ width: '19%', marginLeft: '1%' }}
            />
          </Grid>
        </Grid>
        <Grid container marginTop={marginT}>
          <Grid item xs={12} sm={12} lg={maxWidth} md={maxWidth}>
            <TextField
              type="number"
              variant="outlined"
              placeholder="Visits"
              label="Number of Visits"
              style={{ marginLeft: '2%', width: '20%' }}
            />
            <TextField
              type="number"
              variant="outlined"
              placeholder="Users"
              label="Number of Users"
              style={{ width: '19%', marginLeft: '1%' }}
            />

            <TextField type="date" variant="outlined" style={textBoxSmall} />
            <TextField
              type="date"
              variant="outlined"
              style={{ width: '19%', marginLeft: '1%' }}
            />
          </Grid>
        </Grid>
        <Grid container marginTop={marginT}>
          <Grid align="center" item xs={12} sm={12} md={maxWidth} lg={maxWidth}>
            <Button variant="contained" endIcon={<SaveIcon />}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default AddCustomer;
