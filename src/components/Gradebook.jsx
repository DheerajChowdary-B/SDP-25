import React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const grades = [
  { student: "Alice", assignment: "Math HW1", grade: "A" },
  { student: "Bob", assignment: "Math HW1", grade: "B+" }
];

const Gradebook = () => (
  <TableContainer component={Paper}>
    <Typography variant="h6" align="center" sx={{ m: 2 }}>Gradebook</Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Student</TableCell>
          <TableCell>Assignment</TableCell>
          <TableCell>Grade</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {grades.map((g, idx) => (
          <TableRow key={idx}>
            <TableCell>{g.student}</TableCell>
            <TableCell>{g.assignment}</TableCell>
            <TableCell>{g.grade}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
export default Gradebook;
