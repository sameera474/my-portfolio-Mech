import React from "react";
import { Box, Typography, Button, Avatar, Grid } from "@mui/material";
import profilePic from "../assets/images/profile-pic.png"; // Profile Image

// Import both versions of the icons
import linkedInLight from "../assets/icons/linkedin-light.svg"; // White LinkedIn for dark mode
import linkedInDark from "../assets/icons/linkedin-dark.svg"; // Dark LinkedIn for light mode
import githubLight from "../assets/icons/github-light.svg"; // White GitHub for dark mode
import githubDark from "../assets/icons/github-dark.svg"; // Dark GitHub for light mode

import cvFile from "../assets/CV/CV-Sameera-Wagaarachchige-FD.pdf"; // CV File

export default function Home({ darkMode }) {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "70vh", // ✅ Reduced height to prevent extra bottom space
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 8 },
        pt: { xs: 0, sm: 0, md: 0 }, // ✅ Reduced top padding
        pb: { xs: 3, sm: 5, md: 6 }, // ✅ Reduced bottom padding
        textAlign: "center",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <Grid
        container
        spacing={3} // ✅ Reduced spacing between elements
        alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: "1200px",
          transition: "all 0.5s ease-in-out",
          flexDirection: { xs: "column", md: "row" }, // ✅ Switches to vertical on small screens
          "@media (max-width: 1270px)": {
            flexDirection: "column",
            pt: "30px", // ✅ Reduced spacing further at 1270px
          },
        }}
      >
        {/* Profile Picture Section */}
        <Grid item xs={12} md={4} textAlign="center">
          <Avatar
            src={profilePic}
            sx={{
              width: { xs: 200, sm: 250, md: 280, lg: 320 }, // ✅ Optimized size
              height: { xs: 200, sm: 250, md: 280, lg: 320 },
              mx: "auto",
              mt: { xs: 0, sm: 1, md: 0 }, // ✅ Slight margin to balance layout
              boxShadow: darkMode
                ? "0px 0px 15px rgba(255,255,255,0.2)"
                : "0px 0px 15px rgba(0,0,0,0.2)",
            }}
          />
        </Grid>

        {/* Introduction Section */}
        <Grid item xs={12} md={6} textAlign="center">
          <Typography
            variant="h6"
            sx={{
              color: "secondary.main",
              letterSpacing: 2,
              fontWeight: "bold",
            }}
          >
            Mechanical Designer & Materials Engineer
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "24px", sm: "30px", md: "40px" },
              transition: "color 0.3s ease-in-out",
              color: darkMode ? "white" : "black",
            }}
          >
            Sameera
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 1,
              fontSize: { xs: "24px", sm: "30px", md: "40px" },
              transition: "color 0.3s ease-in-out",
              color: darkMode ? "white" : "black",
            }}
          >
            Wagaarachchige
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "500px",
              color: darkMode ? "white" : "black",
              mx: "auto",
            }}
          >
            I'm a <b>Mechanical Designer</b> specializing in CAD/CAM, 3D
            modeling, and manufacturing processes. With expertise in{" "}
            <b>Materials Science</b>, I work with metals, polymers, and ceramics
            to optimize product performance in engineering applications.
          </Typography>

          {/* Social Media Links with Dynamic Icons */}
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <a
              href="https://www.linkedin.com/in/sameera-chaturanga-wagaarachchige/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={darkMode ? linkedInLight : linkedInDark}
                alt="LinkedIn"
                style={{ width: 28, transition: "all 0.3s ease-in-out" }}
              />
            </a>
            <a
              href="https://github.com/sameera474"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={darkMode ? githubLight : githubDark}
                alt="GitHub"
                style={{ width: 28, transition: "all 0.3s ease-in-out" }}
              />
            </a>
          </Box>
        </Grid>

        {/* CV Download Button Section */}
        <Grid item xs={12} textAlign="center">
          <Button
            variant="contained"
            color="secondary"
            href={cvFile}
            download="CV-Sameera-Wagaarachchige.pdf"
            sx={{
              px: { xs: 3, md: 5 },
              py: 1.2,
              fontSize: { xs: "13px", md: "15px" },
              fontWeight: "bold",
              borderRadius: "50px",
              width: { xs: "85%", sm: "auto" }, // ✅ Reduced width for small screens
              transition: "all 0.3s ease-in-out",
            }}
          >
            Download CV
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
// import React from "react";
// import { Box, Typography, Avatar, Grid, Button } from "@mui/material";
// import profilePic from "../assets/images/profile-pic.png";
// import graphicProfilePic from "../assets/images/profile-pic.png";
// import cvFullStack from "../assets/CV/CV-Sameera-Wagaarachchige-FD.pdf";
// import cvGraphic from "../assets/CV/CV-Sameera-Wagaarachchige-FD.pdf";

// export default function Home({ darkMode, profile }) {
//   return (
//     <Box
//       sx={{
//         minHeight: "80vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         px: { xs: 2, sm: 4, md: 8 },
//         textAlign: "center",
//         transition: "all 0.5s ease-in-out",
//       }}
//     >
//       <Grid
//         container
//         spacing={4}
//         alignItems="center"
//         justifyContent="center"
//         sx={{
//           maxWidth: "1200px",
//           transition: "all 0.5s ease-in-out",
//           flexDirection: { xs: "column", md: "row" },
//         }}
//       >
//         <Grid item xs={12} md={4} textAlign="center">
//           <Avatar
//             src={profile === "fullstack" ? profilePic : graphicProfilePic}
//             sx={{
//               width: { xs: 250, sm: 280, md: 310, lg: 350 },
//               height: { xs: 250, sm: 280, md: 310, lg: 350 },
//               mx: "auto",
//               boxShadow: darkMode
//                 ? "0px 0px 15px rgba(255,255,255,0.2)"
//                 : "0px 0px 15px rgba(0,0,0,0.2)",
//             }}
//           />
//         </Grid>

//         <Grid item xs={12} md={6} textAlign="center">
//           <Typography variant="h6" color="secondary.main">
//             {profile === "fullstack"
//               ? "Full-Stack Web Developer"
//               : "Graphic Designer"}
//           </Typography>
//           <Typography variant="h2" sx={{ fontWeight: "bold" }}>
//             Sameera Wagaarachchige
//           </Typography>
//           <Typography variant="body1" sx={{ mb: 2 }}>
//             I'm a{" "}
//             <b>
//               {profile === "fullstack"
//                 ? "Full-Stack Developer"
//                 : "Graphic Designer"}
//             </b>{" "}
//             based in Finland, creating{" "}
//             {profile === "fullstack" ? "web applications" : "digital arts"} with
//             passion.
//           </Typography>

//           <Button
//             variant="contained"
//             color="secondary"
//             href={profile === "fullstack" ? cvFullStack : cvGraphic}
//             download
//           >
//             Download CV
//           </Button>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
