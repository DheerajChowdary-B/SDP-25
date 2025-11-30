import React from "react";
import { Box, Typography, Chip, Stack, Paper } from "@mui/material";

const dummyBadges = [
  { label: "On-time Submitter", color: "success" },
  { label: "Top Scorer", color: "primary" },
  { label: "Consistency Star", color: "warning" }
];

const Badges = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        Your Badges
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          {dummyBadges.map((b) => (
            <Chip
              key={b.label}
              label={b.label}
              color={b.color}
              variant="outlined"
              sx={{ mb: 1 }}
            />
          ))}
        </Stack>
      </Paper>
    </Box>
  );
};

export default Badges;
