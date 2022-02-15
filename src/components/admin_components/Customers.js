import React, { useState } from 'react';
import Appbar from '../Appbar';
import {
  Grid,
  Paper,
  Fab,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  tableCellClasses,
  styled,
  Button,
  TextField,
  Toolbar,
  IconButton,
} from '@mui/material';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CreateIcon from '@mui/icons-material/Create';
import InfoIcon from '@mui/icons-material/Info';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
const Customers = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [showDialog, setshowDialog] = useState(false);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const dialog = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this customer!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('Poof! Your imaginary file has been deleted!', {
          icon: 'success',
        });
      } else {
        swal('Your imaginary file is safe!');
      }
    });
  };
  return (
    <>
      <Appbar name="Customers Detail" />
      <Toolbar />
      <Grid container style={{ padding: '2%', marginTop: '0%' }}>
        <Grid
          item
          xs={11}
          sm={11}
          md={12}
          lg={12}
          component={Paper}
          style={{ padding: '9px' }}
        >
          <Fab
            area-aria-label="add"
            color="secondary"
            onClick={() => navigate('/Add-Customer')}
          >
            <PersonAddIcon fontSize="large" />
          </Fab>
          <TextField
            variant="outlined"
            placeholder="Search Customers"
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchOutlined />
                </IconButton>
              ),
            }}
            style={{ marginLeft: '2%', width: '50%' }}
          ></TextField>
        </Grid>
        <Grid item xs={11} sm={11} md={12} lg={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>
                    <b>Customer Name</b>
                  </StyledTableCell>
                  <StyledTableCell>
                    <b>Username</b>
                  </StyledTableCell>
                  <StyledTableCell>
                    <b>Password</b>
                  </StyledTableCell>
                  <StyledTableCell>
                    <b>Contact Number</b>
                  </StyledTableCell>
                  <StyledTableCell>
                    <b>Detail</b>
                  </StyledTableCell>
                  <StyledTableCell>
                    <b>Actions</b>
                  </StyledTableCell>
                  <StyledTableCell>
                    <b>Status</b>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>Baja</StyledTableCell>
                  <StyledTableCell>baja@daaem.com</StyledTableCell>
                  <StyledTableCell>Baja1122</StyledTableCell>
                  <StyledTableCell>09876323</StyledTableCell>
                  <StyledTableCell>
                    <InfoIcon style={{ color: 'orange', fontSize: '35px' }} />
                  </StyledTableCell>
                  <StyledTableCell>
                    <Fab
                      color="secondary"
                      size="small"
                      aria-label="delete"
                      style={{ backgroundColor: '#c62828' }}
                      onClick={() => dialog()}
                    >
                      <DeleteForeverIcon />
                    </Fab>

                    <Fab
                      color="primary"
                      size="small"
                      aria-label="update"
                      style={{ marginLeft: '5px', backgroundColor: '#1565c0' }}
                    >
                      <CreateIcon />
                    </Fab>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: '#4caf50' }}
                    >
                      Active
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell>Halawani</StyledTableCell>
                  <StyledTableCell>halawani@daaem.com</StyledTableCell>
                  <TableCell>halawani122</TableCell>
                  <StyledTableCell>09876323</StyledTableCell>
                  <StyledTableCell>
                    <InfoIcon
                      style={{
                        color: 'orange',
                        fontSize: '35px',
                        cursor: 'pointer',
                      }}
                    />
                  </StyledTableCell>
                  <StyledTableCell>
                    <Fab
                      color="secondary"
                      size="small"
                      aria-label="delete"
                      style={{ backgroundColor: '#c62828' }}
                    >
                      <DeleteForeverIcon />
                    </Fab>

                    <Fab
                      color="primary"
                      size="small"
                      aria-label="update"
                      style={{ marginLeft: '5px', backgroundColor: '#1565c0' }}
                    >
                      <CreateIcon />
                    </Fab>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: '#4caf50' }}
                    >
                      Active
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>Dr Schar</StyledTableCell>
                  <StyledTableCell>schar@daaem.com</StyledTableCell>
                  <StyledTableCell>schar112</StyledTableCell>
                  <StyledTableCell>09876323</StyledTableCell>
                  <StyledTableCell>
                    <InfoIcon style={{ color: 'orange', fontSize: '35px' }} />
                  </StyledTableCell>
                  <StyledTableCell>
                    <Fab
                      color="secondary"
                      size="small"
                      aria-label="delete"
                      style={{ backgroundColor: '#c62828' }}
                    >
                      <DeleteForeverIcon />
                    </Fab>

                    <Fab
                      color="primary"
                      size="small"
                      aria-label="update"
                      style={{ marginLeft: '5px', backgroundColor: '#1565c0' }}
                    >
                      <CreateIcon />
                    </Fab>
                  </StyledTableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: '#d50000' }}
                    >
                      Inactive
                    </Button>
                  </TableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};
export default Customers;
//https://www.youtube.com/watch?v=5KC5yfmpc1s
