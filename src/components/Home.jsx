import React from "react";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import homeBg from "./homeph1.jpg";

// Decorative background shapes
const bgShapeStyle = {
  position: "absolute",
  zIndex: 0,
  width: 180,
  height: 180,
  background: "linear-gradient(135deg, #000000ff 60%, #000000ff 100%)",
  borderRadius: "50%",
  top: "-40px",
  left: "60px",
  opacity: 0.7
};

const bgShapeStyle2 = {
  position: "absolute",
  zIndex: 0,
  width: 120,
  height: 120,
  background: "linear-gradient(135deg, #f1f8e9 60%, #ffe0b2 100%)",
  borderRadius: "50%",
  bottom: "60px",
  right: "30px",
  opacity: 0.7
};

const roleOptions = [
  {
    role: "Teacher",
    description:
      "Manage assignments, grade students, monitor analytics & communicate.",
    icon: <SchoolIcon sx={{ fontSize: 44, color: "#1976d2" }} />,
    color: "#e3f2fd",
    path: "/login"
  },
  {
    role: "Student",
    description:
      "Track deadlines, submit assignments, view feedback and analytics.",
    icon: <PersonIcon sx={{ fontSize: 44, color: "#43a047" }} />,
    color: "#f1f8e9",
    path: "/login"
  }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${homeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden"
      }}
    >
      <Box sx={bgShapeStyle} />
      <Box sx={bgShapeStyle2} />

      <Typography
        variant="h3"
        sx={{
          mb: 2,
          fontWeight: 700,
          color: "#000000ff",
          textAlign: "center",
          zIndex: 1
        }}
      >
        Welcome to EduSubmit
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          mb: 4,
          textAlign: "center",
          color: "#000000ff",
          zIndex: 1
        }}
      >
        Select your role to proceed with the Assignment Submission System.
      </Typography>

      <Grid
        container
        spacing={5}
        justifyContent="center"
        alignItems="center"
        sx={{ zIndex: 1, px: 2, pb: 4 }}
      >
        {roleOptions.map((option) => (
          <Grid item xs={12} sm={6} md={4} key={option.role}>
            <Card
              sx={{
                bgcolor: option.color,
                borderRadius: 4,
                boxShadow: 6,
                transition: "transform 0.25s",
                ":hover": { transform: "scale(1.05)", boxShadow: 12 }
              }}
              onClick={() =>
                navigate(option.path, {
                  state: { role: option.role.toLowerCase() }
                })
              }
            >
              <CardActionArea>
                <CardContent sx={{ textAlign: "center", py: 4 }}>
                  {option.icon}
                  <Typography
                    variant="h5"
                    sx={{ mt: 2, fontWeight: 600, color: "#102027" }}
                  >
                    {option.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 2, textAlign: "center", color: "#6d787d" }}
                  >
                    {option.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
