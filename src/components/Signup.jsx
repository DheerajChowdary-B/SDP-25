import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
  Stack,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");      // "teacher" | "student"
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    if (!agree) {
      alert("Please accept the terms to continue");
      return;
    }
    // call backend signup
    signup({ name, email, password, role })
      .then((res) => {
        if (res && res.token) {
          setToken(res.token);
          if (res.user && res.user.role === 'teacher') navigate('/teacher');
          else navigate('/student');
        }
      })
      .catch((err) => {
        alert(err.message || 'Signup failed');
      });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        bgcolor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 6,
        py: 5
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 700,
          minHeight: 520,
          display: "flex",
          flexDirection: "column"
        }}
      >
        {/* Brand / header */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, mb: 4, color: "#4f46e5" }}
        >
          EduSubmit
        </Typography>

        <Box sx={{ maxWidth: 480 }}>
          <Typography
            variant="h5"
            sx={{ mb: 1.5, fontWeight: 700, color: "#111827" }}
          >
            Create your account
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 3, color: "text.secondary" }}
          >
            Sign up as a teacher or student to start managing assignments.
          </Typography>

          <Divider sx={{ mb: 2 }} />

          <form onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
              size="small"
              required
            />
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
              size="small"
              required
            />
            <TextField
              select
              label="Select Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              SelectProps={{ native: true }}
              fullWidth
              margin="normal"
              size="small"
              required
            >
              <option value="">Select Role</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </TextField>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
                size="small"
                required
              />
              <TextField
                label="Confirm Password"
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                fullWidth
                margin="normal"
                size="small"
                required
              />
            </Stack>

            <FormControlLabel
              sx={{ mt: 1 }}
              control={
                <Checkbox
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  size="small"
                />
              }
              label={
                <Typography variant="caption">
                  I agree to the Terms and Privacy Policy.
                </Typography>
              }
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                py: 1.1,
                borderRadius: 999,
                textTransform: "none",
                bgcolor: "#4f46e5"
              }}
            >
              Sign up
            </Button>
          </form>

          <Button
            onClick={() => navigate("/login")}
            fullWidth
            sx={{
              mt: 2,
              textTransform: "none",
              color: "#4f46e5",
              fontSize: 14
            }}
          >
            Already have an account? Log in
          </Button>
        </Box>

        <Box
          sx={{
            mt: "auto",
            pt: 4,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 12,
            color: "text.secondary"
          }}
        >
          <span>© EduSubmit 2025</span>
          <span>Terms · Privacy · Help</span>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
