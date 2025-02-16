import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ScienceIcon from "@mui/icons-material/Science";
import StarIcon from "@mui/icons-material/Star";

export default function Experience() {
  const mechanicalSkills = [
    { name: "SolidWorks", rating: 5 },
    { name: "AutoCAD", rating: 4 },
    { name: "Mastercam", rating: 5 },
    { name: "CNC Programming", rating: 4 },
    { name: "G-code/M-code", rating: 5 },
  ];

  const materialsSkills = [
    { name: "Metallography (SEM, XRD, FTIR)", rating: 5 },
    { name: "Polymers & Composites", rating: 4 },
    { name: "Ceramic Materials", rating: 5 },
    { name: "Material Testing & Analysis", rating: 5 },
    { name: "Manufacturing Processes", rating: 5 },
  ];

  const renderStars = (rating) => (
    <Box sx={{ display: "flex", flexWrap: "nowrap", gap: 0.3 }}>
      {Array.from({ length: rating }, (_, i) => (
        <StarIcon key={i} sx={{ color: "gold", fontSize: "18px" }} />
      ))}
    </Box>
  );

  return (
    <Box sx={{ p: { xs: 2, md: 5 } }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", textTransform: "uppercase" }}
      >
        Experience
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Mechanical Design Section */}
        <Grid item xs={12} sm={6} md={5}>
          <Paper
            elevation={6}
            sx={{
              p: { xs: 3, md: 4 },
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "15px",
              textAlign: "left",
            }}
          >
            <Typography
              variant="h5"
              sx={{ display: "flex", alignItems: "center", mb: 2 }}
            >
              <EngineeringIcon
                sx={{ mr: 1, fontSize: 30, color: "secondary.main" }}
              />
              Mechanical Design & CAD/CAM
            </Typography>
            <List>
              {mechanicalSkills.map((skill, index) => (
                <ListItem
                  key={index}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <ListItemText primary={skill.name} />
                  {renderStars(skill.rating)}
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Materials Engineering Section */}
        <Grid item xs={12} sm={6} md={5}>
          <Paper
            elevation={6}
            sx={{
              p: { xs: 3, md: 4 },
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "15px",
              textAlign: "left",
            }}
          >
            <Typography
              variant="h5"
              sx={{ display: "flex", alignItems: "center", mb: 2 }}
            >
              <ScienceIcon
                sx={{ mr: 1, fontSize: 30, color: "secondary.main" }}
              />
              Materials Engineering & Testing
            </Typography>
            <List>
              {materialsSkills.map((skill, index) => (
                <ListItem
                  key={index}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <ListItemText primary={skill.name} />
                  {renderStars(skill.rating)}
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
