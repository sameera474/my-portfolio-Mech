import React from "react";
import { Box, Button } from "@mui/material";

export default function ProfileSwitcher({ profile, setProfile }) {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 14,
        mb: 3,
        display: "flex",
        justifyContent: "center",
        gap: 3,
      }}
    >
      <Button
        onClick={() => setProfile("mechanical")}
        variant={profile === "mechanical" ? "contained" : "outlined"}
        color="secondary"
      >
        Mechanical Designer
      </Button>
      <Button
        onClick={() => setProfile("materials")}
        variant={profile === "materials" ? "contained" : "outlined"}
        color="secondary"
      >
        Materials Engineer
      </Button>
    </Box>
  );
}
