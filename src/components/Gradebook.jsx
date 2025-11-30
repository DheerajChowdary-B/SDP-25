import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Button,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  Box
} from "@mui/material";
import { Visibility } from "@mui/icons-material";

const initialGrades = [
  {
    id: 1,
    student: "Alice",
    assignment: "Math HW1",
    grade: "A",
    feedback: "Great work!",
    submittedFile: "math_hw1_alice.pdf",
    submittedAt: "2025-11-28"
  },
  {
    id: 2,
    student: "Bob",
    assignment: "Math HW1",
    grade: "B+",
    feedback: "Good effort, revise question 3.",
    submittedFile: "math_hw1_bob.pdf",
    submittedAt: "2025-11-27"
  }
];

const Gradebook = () => {
  const [grades, setGrades] = useState(initialGrades);
  const [editGrade, setEditGrade] = useState({});
  const [editFeedback, setEditFeedback] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const handleGradeChange = (id, value) => {
    setEditGrade((prev) => ({ ...prev, [id]: value }));
  };

  const handleFeedbackChange = (id, value) => {
    setEditFeedback((prev) => ({ ...prev, [id]: value }));
  };

  const handleSave = (id) => {
    setGrades((prev) =>
      prev.map((g) =>
        g.id === id
          ? {
              ...g,
              grade: editGrade[id] !== undefined ? editGrade[id] : g.grade,
              feedback:
                editFeedback[id] !== undefined ? editFeedback[id] : g.feedback
            }
          : g
      )
    );
    setEditGrade({});
    setEditFeedback({});
  };

  const handleViewAssignment = (assignment) => {
    setSelectedAssignment(assignment);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedAssignment(null);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 4, p: 2 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
          Gradebook
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student</TableCell>
              <TableCell>Assignment</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell>Update Grade</TableCell>
              <TableCell>Feedback</TableCell>
              <TableCell>Update Feedback</TableCell>
              <TableCell>Submitted File</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {grades.map((g) => (
              <TableRow key={g.id} hover>
                <TableCell>{g.student}</TableCell>
                <TableCell>{g.assignment}</TableCell>
                <TableCell>
                  <Chip label={g.grade} color="primary" size="small" />
                </TableCell>
                <TableCell>
                  <TextField
                    size="small"
                    placeholder="e.g. A+"
                    value={editGrade[g.id] ?? ""}
                    onChange={(e) => handleGradeChange(g.id, e.target.value)}
                    sx={{ mr: 1, width: 80 }}
                  />
                </TableCell>
                <TableCell sx={{ maxWidth: 260 }}>{g.feedback}</TableCell>
                <TableCell>
                  <TextField
                    size="small"
                    placeholder="Write feedback"
                    value={editFeedback[g.id] ?? ""}
                    onChange={(e) =>
                      handleFeedbackChange(g.id, e.target.value)
                    }
                    sx={{ mr: 1, width: 220 }}
                  />
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleSave(g.id)}
                  >
                    Save
                  </Button>
                </TableCell>
                <TableCell>
                  {g.submittedFile ? (
                    <Chip 
                      label={g.submittedFile} 
                      variant="outlined" 
                      size="small"
                      color="success"
                    />
                  ) : (
                    "No file"
                  )}
                  <Typography variant="caption" display="block" color="text.secondary">
                    {g.submittedAt}
                  </Typography>
                </TableCell>
                <TableCell>
                  {g.submittedFile && (
                    <IconButton 
                      color="primary" 
                      onClick={() => handleViewAssignment(g)}
                      title="View Submission"
                    >
                      <Visibility />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* View Assignment Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>
          {selectedAssignment?.student}'s Submission - {selectedAssignment?.assignment}
        </DialogTitle>
        <DialogContent sx={{ p: 4 }}>
          <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            <Typography variant="h6" gutterBottom>
              {selectedAssignment?.submittedFile}
            </Typography>
            <Box
              sx={{
                width: 400,
                height: 500,
                border: '2px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
                bgcolor: 'grey.100',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
              }}
            >
              <Typography variant="body1" color="text.secondary" textAlign="center">
                📄 Assignment Preview
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Submitted: {selectedAssignment?.submittedAt}
              </Typography>
              <Button 
                variant="contained" 
                sx={{ mt: 2 }}
                onClick={() => window.open(`/files/${selectedAssignment?.submittedFile}`, '_blank')}
              >
                Download Full File
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gradebook;
