import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
// import { createSubmission } from "../api"; // make sure this import exists

const SubmissionForm = () => {
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const { id: assignmentId } = useParams();

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0] || null;
    setFile(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!assignmentId) return alert("Missing assignment id");

    // Example payload – adapt when you connect real backend / FormData
    const payload = {
      assignment_id: Number(assignmentId),
      content,
      // In real app you’d send `file` with FormData instead of raw object
      file,
    };

    console.log("Submitting:", payload);

    // Demo only – keep your existing API call if available
    // const formData = new FormData();
    // formData.append("assignment_id", Number(assignmentId));
    // formData.append("content", content);
    // if (file) formData.append("file", file);

    createSubmission(payload)
      .then(() => {
        alert("Submitted successfully");
        navigate("/student");
      })
      .catch((err) => alert(err.message || "Submit failed"));
  };

  return (
    <Box display="flex" justifyContent="center" minHeight="60vh">
      <Paper elevation={3} sx={{ padding: 4, width: 640 }}>
        <Typography variant="h5" gutterBottom>
          Submit Assignment
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Submission Text / Notes"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          {/* File upload section */}
          <Box sx={{ mt: 2, mb: 3 }}>
            <Typography variant="subtitle2" gutterBottom color="text.secondary">
              Upload Assignment File (PDF, DOCX, ZIP)
            </Typography>
            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{ justifyContent: "flex-start" }}
            >
              {file ? `📎 ${file.name}` : "Choose file"}
              <input
                type="file"
                hidden
                accept=".pdf,.doc,.docx,.zip"
                onChange={handleFileChange}
              />
            </Button>
            {file && (
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", mt: 0.5 }}
              >
                Selected: {file.name}
              </Typography>
            )}
          </Box>

          <Button type="submit" variant="contained" color="secondary" fullWidth>
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default SubmissionForm;
