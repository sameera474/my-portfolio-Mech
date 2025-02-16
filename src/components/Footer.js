import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme(); // Get theme (Light/Dark Mode)

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.paper, // Adapts to Light/Dark Mode
        color: theme.palette.text.primary, // Ensures text is visible in all themes
        py: 2,
        textAlign: "center",
        transition: "all 0.3s ease-in-out", // Smooth effect
      }}
    >
      <Typography variant="body2">
        © 2025 Sameera Wagaarachchige | All Rights Reserved
      </Typography>
    </Box>
  );
}
