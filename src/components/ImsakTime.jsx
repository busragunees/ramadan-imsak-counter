import * as React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./ImsakTime.scss"

function ImsakTime(props) {


  return (
    <TableContainer className="table-container" component={Paper}>
      <Table  sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="bold-cell" align="center">İmsak</TableCell>
            <TableCell align="center">Güneş</TableCell>
            <TableCell align="center">Öğle</TableCell>
            <TableCell align="center">İkindi</TableCell>
            <TableCell className="bold-cell" align="center">Akşam</TableCell>
            <TableCell align="center">Yatsı</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow
            //   key={} 
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell align="center">{props.imsak}</TableCell>
            <TableCell align="center">{props.gunes}</TableCell>
            <TableCell align="center">{props.ogle}</TableCell>
            <TableCell align="center">{props.ikindi}</TableCell>
            <TableCell align="center">{props.aksam}</TableCell>
            <TableCell align="center">{props.yatsi}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ImsakTime;
