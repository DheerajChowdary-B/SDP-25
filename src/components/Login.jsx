import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // password state
  const [role, setRole] = useState(""); // "teacher" or "student"
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication and role selection logic.
    // You can add password checking here!
    if (role === "teacher") {
      navigate("/teacher");
    } else if (role === "student") {
      navigate("/student");
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="90vh">
      <Paper elevation={3} sx={{ padding: 5, width: 350 }}>
        <Typography variant="h5" gutterBottom>Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            select
            label="Role"
            value={role}
            onChange={e => setRole(e.target.value)}
            SelectProps={{ native: true }}
            fullWidth
            margin="normal"
            required
          >
            <option value="">Select Role</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </TextField>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
        <Button onClick={() => navigate("/signup")} sx={{ mt: 2 }} fullWidth>
          Don't have an account? Sign Up
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
