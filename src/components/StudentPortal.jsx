import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ReviewsIcon from "@mui/icons-material/Reviews";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate, Outlet } from "react-router-dom";

const quickStats = [
  { label: "Assignments due", value: "5" },
  { label: "Submitted", value: "18" },
  { label: "Graded", value: "12" },
  { label: "Badges earned", value: "3" }
];

const StudentPortal = () => {
  const navigate = useNavigate();
  const handleLogout = () => navigate("/");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        bgcolor: "#f5f5f7",
        display: "flex"
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: 260,
          bgcolor: "#111827",
          color: "#e5e7eb",
          display: "flex",
          flexDirection: "column",
          py: 2,
          px: 2
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 3,
            display: "flex",
            alignItems: "center",
            gap: 1
          }}
        >
          <DashboardIcon fontSize="small" />
          EduSubmit
        </Typography>

        <List dense>
          <ListItem button onClick={() => navigate("/student")}>
            <ListItemIcon sx={{ color: "#9ca3af" }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              primary="Overview"
              primaryTypographyProps={{
                fontSize: 14,
                fontWeight: 600,
                color: "#f9fafb"
              }}
            />
          </ListItem>

          <ListItem button onClick={() => navigate("/student/assignments")}>
            <ListItemIcon sx={{ color: "#9ca3af" }}>
              <AssignmentTurnedInIcon />
            </ListItemIcon>
            <ListItemText primary="Assignments" />
          </ListItem>

          <ListItem button onClick={() => navigate("/student/submit")}>
            <ListItemIcon sx={{ color: "#9ca3af" }}>
              <CloudUploadIcon />
            </ListItemIcon>
            <ListItemText primary="Submit" />
          </ListItem>

          <ListItem button onClick={() => navigate("/student/feedback")}>
            <ListItemIcon sx={{ color: "#9ca3af" }}>
              <ReviewsIcon />
            </ListItemIcon>
            <ListItemText primary="Feedback" />
          </ListItem>

          <ListItem button onClick={() => navigate("/student/badges")}>
            <ListItemIcon sx={{ color: "#9ca3af" }}>
              <EmojiEventsIcon />
            </ListItemIcon>
            <ListItemText primary="Badges" />
          </ListItem>
        </List>

        <Box sx={{ flexGrow: 1 }} />

        <Divider sx={{ borderColor: "#1f2933", my: 1 }} />

        <List dense>
          <ListItem button onClick={handleLogout}>
            <ListItemIcon sx={{ color: "#ef4444" }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Box>

      {/* Main content area */}
      <Box
        sx={{
          flexGrow: 1,
          px: 4,
          py: 3,
          overflowY: "auto"
        }}
      >
        {/* Hero banner */}
        <Box
          sx={{
            bgcolor: "#22c55e",
            borderRadius: 3,
            color: "#fff",
            p: 4,
            mb: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              Submit your next assignment
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 500, mb: 3 }}>
              stay on top of all your deadlines
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#fff",
                color: "#111827",
                textTransform: "none",
                px: 2.5,
                py: 0.75,
                borderRadius: 999
              }}
              onClick={() => navigate("/student/submit")}
            >
              Go to Submit
            </Button>
          </Box>
          <Box
            sx={{ width: 160, height: 120, bgcolor: "#4ade80", borderRadius: 2 }}
          />
        </Box>

        {/* Stats row */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {quickStats.map((s) => (
            <Grid item xs={12} sm={6} md={3} key={s.label}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: "none",
                  bgcolor: "#ffffff",
                  border: "1px solid #e5e7eb"
                }}
              >
                <CardContent>
                  <Typography
                    variant="caption"
                    sx={{ color: "#6b7280", textTransform: "uppercase" }}
                  >
                    {s.label}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ mt: 1, fontWeight: 700, color: "#111827" }}
                  >
                    {s.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Nested route outlet for assignments/submit/feedback/badges */}
        <Box sx={{ mt: 2 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default StudentPortal;
