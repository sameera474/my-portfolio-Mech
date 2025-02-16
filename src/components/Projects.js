import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
// import { GitHub } from "@mui/icons-material";

const projects = [
  {
    title: "3D Modeled Robotic Arm",
    img: "/projects/robotic-arm.png",
    ScreenShots: "#",
    live: "#",
  },
  {
    title: "CNC Machined Part Design",
    img: "/projects/cnc-part.png",
    ScreenShots: "#",
    live: "#",
  },
  {
    title: "Metallurgical Analysis - XRD",
    img: "/projects/metallurgy.png",
    ScreenShots: "#",
    live: "#",
  },
  {
    title: "Polymer Composites Research",
    img: "/projects/polymers.png",
    ScreenShots: "#",
    live: "#",
  },
  {
    title: "Ceramic Coating for Heat Resistance",
    img: "/projects/ceramics.png",
    ScreenShots: "#",
    live: "#",
  },
  {
    title: "G-code Optimization for CNC",
    img: "/projects/gcode.png",
    ScreenShots: "#",
    live: "#",
  },
  {
    title: "Finite Element Analysis (FEA)",
    img: "/projects/fea.png",
    ScreenShots: "#",
    live: "#",
  },
  {
    title: "Steel Alloy Characterization",
    img: "/projects/steel.png",
    ScreenShots: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <Box sx={{ p: 5 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", textTransform: "uppercase" }}
      >
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                boxShadow: 3,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "15px",
              }}
            >
              <CardMedia component="img" image={project.img} height="140" />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                  <Button
                    size="small"
                    variant="outlined"
                    href={project.ScreenShots}
                    target="_blank"
                  >
                    ScreenShots
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    href={project.live}
                    target="_blank"
                  >
                    Live
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
