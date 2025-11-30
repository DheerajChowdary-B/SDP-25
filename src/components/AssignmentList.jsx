import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Chip
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const demoAssignments = [
  {
    id: 1,
    title: "Math HW1",
    due_date: "2025-12-05",
    description: "Complete exercises 1–10 from chapter 3.",
    submitted: true
  },
  {
    id: 2,
    title: "OS Lab",
    due_date: "2025-12-10",
    description: "Implement producer–consumer using semaphores.",
    submitted: false
  }
];

const getStatusInfo = (assignment) => {
  const today = new Date();
  const due = assignment.due_date ? new Date(assignment.due_date) : null;

  let statusLabel = "Not submitted";
  let statusColor = "default";

  if (assignment.submitted) {
    statusLabel = "Submitted";
    statusColor = "success";
  } else if (due && due < today) {
    statusLabel = "Overdue";
    statusColor = "error";
  } else {
    statusLabel = "Pending";
    statusColor = "warning";
  }

  let deadlineText = "No deadline";
  if (due) {
    const diffMs = due - today;
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays > 0) {
      deadlineText = `Due in ${diffDays} day${diffDays > 1 ? "s" : ""} (${assignment.due_date})`;
    } else if (diffDays === 0) {
      deadlineText = `Due today (${assignment.due_date})`;
    } else {
      deadlineText = `Was due ${Math.abs(diffDays)} day${Math.abs(diffDays) > 1 ? "s" : ""} ago (${assignment.due_date})`;
    }
  }

  return { statusLabel, statusColor, deadlineText };
};

const AssignmentList = ({ type }) => {
  const [assignments, setAssignments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // no backend: just load demo data
    setAssignments(demoAssignments);
  }, []);

  return (
    <Box display="flex" justifyContent="center">
      <Grid container spacing={3} maxWidth={800} justifyContent="center">
        {assignments.map((a) => {
          const { statusLabel, statusColor, deadlineText } = getStatusInfo(a);

          return (
            <Grid item xs={12} md={6} key={a.id}>
              <Card>
                <CardContent>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={1}
                  >
                    <Typography variant="h6" color="primary">
                      {a.title}
                    </Typography>
                    <Chip
                      label={statusLabel}
                      color={statusColor}
                      size="small"
                      variant={statusColor === "default" ? "outlined" : "filled"}
                    />
                  </Box>

                  <Typography variant="body2" color="text.secondary">
                    {deadlineText}
                  </Typography>

                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {a.description}
                  </Typography>

                  {/* You can still keep teacher-specific actions if needed */}
                  {type === "teacher" && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="caption" color="text.secondary">
                        Teacher view: connect to gradebook or submissions here.
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default AssignmentList;
