import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  Card,
} from '@mui/material';

const News = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className="row-header">
              <TableCell>
                <b>Customers</b>
              </TableCell>
              <TableCell>
                <b>News</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Baja</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Halawani</TableCell>
              <TableCell>4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Riyadh Food</TableCell>
              <TableCell>1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Abisco</TableCell>
              <TableCell>2</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default News;
