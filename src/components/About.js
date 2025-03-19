import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Modal,
  Backdrop,
  Fade,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SchoolIcon from "@mui/icons-material/School";

// Import images
import profilePic from "../assets/images/profile pic 2.gif";

// Import certificates
import certFullStack from "../assets/certificates/Certificate of Completion - Full Stack Development.png";
import certPython from "../assets/certificates/Python-1.png";
import certMBA from "../assets/certificates/MBA.png";
import certBSc from "../assets/certificates/UOM-Degree.png";

export default function About() {
  // State for modal (popup)
  const [open, setOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  // Function to open modal
  const handleOpen = (cert) => {
    setSelectedCert(cert);
    setOpen(true);
  };

  // Function to close modal
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ p: 5 }}>
      {/* About Me Title */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: 2,
        }}
      >
        About Me
      </Typography>

      {/* Profile Image and Education Section */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4} textAlign="center">
          <img
            src={profilePic}
            alt="Profile"
            style={{
              width: "100%",
              maxWidth: "250px",
              borderRadius: "15px",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "15px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              textAlign: "left",
            }}
          >
            <Typography
              variant="h5"
              sx={{ display: "flex", alignItems: "center", mb: 2 }}
            >
              <SchoolIcon
                sx={{ mr: 1, fontSize: 30, color: "secondary.main" }}
              />
              Education
            </Typography>
            <ul>
              <li>
                2025 - Mechanical Engineering and Production Technology, Tampere
                Adult Education Centre, Nirva Campus, Finland
              </li>
              <li>
                2025 - Master of Computer Science Jamk University of Applied
                Sciences, Finland
              </li>

              <li>2022 - MBA, University of Suffolk, United Kingdom</li>
              <li>2015 - BSc in Materials Science, University of Moratuwa</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>

      {/* Certifications Section */}
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h5" sx={{ color: "text.primary", mb: 3 }}>
          Certifications
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            { title: "Full-Stack Development", img: certFullStack },
            { title: "Python Program", img: certPython },
            { title: "Master of Business Administration", img: certMBA },
            { title: "BSc in Materials Science & Engineering", img: certBSc },
          ].map((cert, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={6}
                sx={{
                  p: 3,
                  backdropFilter: "blur(10px)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={() => handleOpen(cert.img)} // Opens modal on click
              >
                <Typography variant="h6">{cert.title}</Typography>
                <img
                  src={cert.img}
                  alt="Certificate"
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginTop: "10px",
                    transition: "transform 0.3s",
                  }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Modal for Fullscreen Preview */}
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
              maxHeight: "90vh", // Ensures it doesn't exceed screen size
              overflow: "hidden",
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
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Image Preview (scales correctly) */}
            <img
              src={selectedCert}
              alt="Certificate Preview"
              style={{
                maxWidth: "100%",
                maxHeight: "85vh", // Adjusted to fit screen
                objectFit: "contain",
                userSelect: "none", // Prevents selection
                pointerEvents: "none", // Prevents downloading via drag
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
