import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Card,
  CardHeader,
  Divider,
} from '@mui/material';

const Deliveries = () => {
  return (
    <>
      <Card>
        <CardHeader title="Deliveries Detail" style={{ textAlign: 'center' }} />
      </Card>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow className="row-header">
              <TableCell>
                <b>Customers</b>
              </TableCell>
              <TableCell>
                <b>Planned</b>
              </TableCell>
              <TableCell>
                <b>Completed</b>
              </TableCell>
              <TableCell>
                <b>Remaining</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Baja</TableCell>
              <TableCell>400</TableCell>
              <TableCell>390</TableCell>
              <TableCell>10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Halawani</TableCell>
              <TableCell>400</TableCell>
              <TableCell>390</TableCell>
              <TableCell>10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Riyadh Food</TableCell>
              <TableCell>400</TableCell>
              <TableCell>390</TableCell>
              <TableCell>10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Abisco</TableCell>
              <TableCell>400</TableCell>
              <TableCell>390</TableCell>
              <TableCell>10</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Deliveries;
