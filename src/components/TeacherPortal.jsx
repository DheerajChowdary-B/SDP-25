import React from "react";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
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
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import InsightsIcon from "@mui/icons-material/Insights";
import ForumIcon from "@mui/icons-material/Forum";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate, Outlet } from "react-router-dom";

const quickStats = [
  { label: "Graded (30 days)", value: "342" },
  { label: "Total Students", value: "42" },
  { label: "Total Courses", value: "6" },
  { label: "Pending to Grade", value: "45%" }
];

const TeacherPortal = () => {
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
      {/* Left sidebar */}
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
          <ListItem button onClick={() => navigate("/teacher")}>
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

          <ListItem button onClick={() => navigate("/teacher/assignments")}>
            <ListItemIcon sx={{ color: "#9ca3af" }}>
              <AssignmentTurnedInIcon />
            </ListItemIcon>
            <ListItemText primary="Assignments" />
          </ListItem>

          <ListItem button onClick={() => navigate("/teacher/create")}>
            <ListItemIcon sx={{ color: "#9ca3af" }}>
              <NoteAddIcon />
            </ListItemIcon>
            <ListItemText primary="Create Assignment" />
          </ListItem>

          <ListItem button onClick={() => navigate("/teacher/gradebook")}>
            <ListItemIcon sx={{ color: "#9ca3af" }}>
              <LeaderboardIcon />
            </ListItemIcon>
            <ListItemText primary="Gradebook" />
          </ListItem>

          <ListItem button onClick={() => navigate("/teacher/analytics")}>
            <ListItemIcon sx={{ color: "#9ca3af" }}>
              <InsightsIcon />
            </ListItemIcon>
            <ListItemText primary="Analytics" />
          </ListItem>

          <ListItem button onClick={() => navigate("/teacher/communication")}>
            <ListItemIcon sx={{ color: "#9ca3af" }}>
              <ForumIcon />
            </ListItemIcon>
            <ListItemText primary="Communication" />
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
            bgcolor: "#f9735b",
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
              Add your first assignment
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 500, mb: 3 }}>
              to get started
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
              onClick={() => navigate("/teacher/create")}
            >
              Add Assignment
            </Button>
          </Box>
          <Box
            sx={{ width: 160, height: 120, bgcolor: "#fbb5a2", borderRadius: 2 }}
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

        {/* Nested route outlet */}
        <Box sx={{ mt: 2 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default TeacherPortal;
