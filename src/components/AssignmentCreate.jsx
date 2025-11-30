import React, { useState } from "react";
import { Paper, Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AssignmentCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Title required");
      return;
    }
    // no backend: just show a message and go back to teacher portal
    alert("Assignment created (demo only, not saved)");
    navigate("/teacher");
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const removeFile = () => {
    setFile(null);
    setFileName("");
    document.getElementById('file-upload').value = '';
  };

  return (
    <Box display="flex" justifyContent="center">
      <Paper elevation={3} sx={{ padding: 4, width: 480 }}>
        <Typography variant="h5" gutterBottom>
          Create Assignment
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            label="Deadline"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          
          {/* File Upload Section */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" gutterBottom sx={{ color: 'text.secondary' }}>
              Questions File (PDF, DOC, DOCX, ZIP)
            </Typography>
            <Box
              sx={{
                border: '2px dashed #ccc',
                borderRadius: 1,
                p: 2,
                textAlign: 'center',
                bgcolor: 'grey.50',
                cursor: 'pointer',
                '&:hover': { borderColor: 'primary.main', bgcolor: 'primary.50' }
              }}
            >
              <input
                id="file-upload"
                type="file"
                accept=".pdf,.doc,.docx,.zip"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <label htmlFor="file-upload">
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {file ? `📎 ${fileName}` : 'Click to upload or drag & drop'}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 0.5 }}>
                  Max 10MB - PDF, DOC, DOCX, ZIP
                </Typography>
              </label>
            </Box>
            {file && (
              <Box sx={{ mt: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body2" color="success.main">
                  ✅ {fileName}
                </Typography>
                <Button size="small" onClick={removeFile} variant="outlined" color="error">
                  Remove
                </Button>
              </Box>
            )}
          </Box>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ mt: 3 }}
          >
            Create
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AssignmentCreate;
