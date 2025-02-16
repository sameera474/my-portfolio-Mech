import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// ✅ Corrected Project Data (Using `public` folder for video)
const projects = [
  {
    title: "Grearbox",
    img: require("../assets/projects/screenshots/Grearbox/11.jpg"),
    screenshots: [
      require("../assets/projects/screenshots/Grearbox/1.jpg"),
      require("../assets/projects/screenshots/Grearbox/2.jpg"),
      require("../assets/projects/screenshots/Grearbox/3.jpg"),
    ],
    live: "#",
  },
  {
    title: "Air Pod",
    img: require("../assets/projects/screenshots/AirPod/1.jpg"),
    screenshots: [
      require("../assets/projects/screenshots/AirPod/1.jpg"),
      "/assets/projects/screenshots/AirPod/Part1.mp4", // ✅ Load video from `public/`
    ],
    live: "#",
  },
  {
    title: "Mould",
    img: require("../assets/projects/screenshots/Mould/1.jpg"),
    screenshots: [
      require("../assets/projects/screenshots/Mould/1.jpg"),
      require("../assets/projects/screenshots/Mould/2.jpg"),
      require("../assets/projects/screenshots/Mould/3.jpg"),
    ],
    live: "#",
  },
  {
    title: "Bearing",
    img: require("../assets/projects/screenshots/Bearing/1.jpg"),
    screenshots: [require("../assets/projects/screenshots/Bearing/1.jpg")],
    live: "#",
  },
  {
    title: "Gear Wheel",
    img: require("../assets/projects/screenshots/Gearwheel/1.jpg"),
    screenshots: [require("../assets/projects/screenshots/Gearwheel/1.jpg")],
    live: "#",
  },
  {
    title: "Pipe Bend",
    img: require("../assets/projects/screenshots/PipeBend/1.jpg"),
    screenshots: [require("../assets/projects/screenshots/PipeBend/1.jpg")],
    live: "#",
  },
];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedScreenshots, setSelectedScreenshots] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open Modal with Screenshots/Videos
  const handleOpen = (screenshots) => {
    if (screenshots.length > 0) {
      setSelectedScreenshots(screenshots);
      setCurrentIndex(0);
      setOpen(true);
    }
  };

  // Close Modal
  const handleClose = () => {
    setOpen(false);
    setSelectedScreenshots([]);
    setCurrentIndex(0);
  };

  // Navigate Previous Screenshot
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedScreenshots.length - 1 : prevIndex - 1
    );
  };

  // Navigate Next Screenshot
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === selectedScreenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

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
                  {/* Screenshot Button - Opens Modal */}
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => handleOpen(project.screenshots)}
                  >
                    Screenshots
                  </Button>
                  {/* Live Project Button */}
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

      {/* Modal for Screenshot & Video Preview */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", md: "80%" },
              maxHeight: "90vh",
              bgcolor: "background.paper",
              boxShadow: 24,
              borderRadius: "10px",
              textAlign: "center",
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Previous Button */}
            {selectedScreenshots.length > 1 && (
              <IconButton
                onClick={handlePrevious}
                sx={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
            )}

            {/* Conditional Rendering: Image or Video */}
            {selectedScreenshots.length > 0 &&
            selectedScreenshots[currentIndex] ? (
              selectedScreenshots[currentIndex].endsWith(".mp4") ? (
                <video
                  controls
                  autoPlay
                  style={{
                    maxWidth: "100%",
                    maxHeight: "85vh",
                    borderRadius: "10px",
                  }}
                >
                  <source
                    src={selectedScreenshots[currentIndex]}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={selectedScreenshots[currentIndex]}
                  alt="Project Screenshot"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "85vh",
                    objectFit: "contain",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                />
              )
            ) : (
              <Typography variant="h6">No media available</Typography>
            )}

            {/* Next Button */}
            {selectedScreenshots.length > 1 && (
              <IconButton
                onClick={handleNext}
                sx={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
