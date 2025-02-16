// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
// } from "@mui/material";
// import { Link } from "react-scroll"; // ✅ Import react-scroll
// import MenuIcon from "@mui/icons-material/Menu";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";

// // Import both logos
// import logoWhite from "../assets/Logo/logo-white.png";
// import logoDark from "../assets/Logo/logo-dark.png";

// export default function Header({ darkMode, setDarkMode }) {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const navLinks = [
//     { text: "Home", to: "home" },
//     { text: "About", to: "about" },
//     { text: "Experience", to: "experience" },
//     { text: "Projects", to: "projects" },
//   ];

//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         backgroundColor: darkMode
//           ? "rgba(20, 20, 20, 0.9)"
//           : "rgba(255, 255, 255, 0.9)",
//         color: darkMode ? "#ffffff" : "#000000",
//         borderRadius: "40px",
//         boxShadow: darkMode
//           ? "1px 0px 5px rgb(167, 2, 185)"
//           : "1px 0px 5px rgba(0, 0, 0, 0.2)",
//         margin: "20px auto",
//         maxWidth: "80%",
//         height: "60px",
//         display: "flex",
//         justifyContent: "center",
//         left: "50%",
//         transform: "translateX(-50%)",
//         top: 0,
//         zIndex: 1200,
//         transition: "all 0.3s ease-in-out",
//       }}
//     >
//       <Toolbar
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           width: "100%",
//           alignItems: "center",
//           position: "relative",
//         }}
//       >
//         {/* Dark Mode Toggle - Stays on the Left */}
//         <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
//           {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//         </IconButton>

//         {/* Dynamic Logo - Moves to Center in Mobile */}
//         <Box
//           sx={{
//             position: "absolute",
//             left: { xs: "50%", md: "70px" }, // ✅ Moves to left in desktop, centers in mobile
//             transform: { xs: "translateX(-50%)", md: "none" },
//             textAlign: "center",
//           }}
//         >
//           <Link to="home" smooth={true} duration={500} offset={-60}>
//             <img
//               src={darkMode ? logoWhite : logoDark}
//               alt="SAMEERA"
//               style={{
//                 maxHeight: "40px",
//                 maxWidth: "160px",
//                 cursor: "pointer",
//                 transition: "all 0.3s ease-in-out",
//               }}
//             />
//           </Link>
//         </Box>

//         {/* Navigation Links - Hidden on Mobile */}
//         <Box sx={{ display: { xs: "none", md: "flex" }, gap: "25px" }}>
//           {navLinks.map((link, index) => (
//             <Link
//               key={index}
//               to={link.to}
//               smooth={true}
//               duration={500}
//               offset={-60} // Adjust based on header height
//               style={{
//                 textDecoration: "none",
//                 color: darkMode ? "white" : "black",
//                 padding: "8px 15px",
//                 borderRadius: "10px",
//                 transition: "all 0.3s ease-in-out",
//                 fontWeight: "bold",
//                 fontSize: "16px",
//                 cursor: "pointer",
//               }}
//               onMouseEnter={(e) =>
//                 (e.target.style.backgroundColor = darkMode
//                   ? "rgba(255, 255, 255, 0.2)"
//                   : "rgba(0, 0, 0, 0.1)")
//               }
//               onMouseLeave={(e) =>
//                 (e.target.style.backgroundColor = "transparent")
//               }
//             >
//               {link.text}
//             </Link>
//           ))}

//           {/* Contact Button (Styled like Download CV button) */}
//           <Button
//             variant="contained"
//             color="secondary"
//             sx={{
//               px: 3,
//               py: 1,
//               fontSize: "14px",
//               fontWeight: "bold",
//               borderRadius: "50px",
//               textTransform: "none",
//               transition: "all 0.3s ease-in-out",
//               "&:hover": {
//                 backgroundColor: darkMode ? "#FE54B8" : "#0E0D27",
//                 color: "white",
//               },
//             }}
//           >
//             <Link
//               to="contact"
//               smooth={true}
//               duration={500}
//               offset={-60}
//               style={{ color: "inherit", textDecoration: "none" }}
//             >
//               Contact
//             </Link>
//           </Button>
//         </Box>

//         {/* Mobile Navigation Drawer */}
//         <IconButton
//           edge="end"
//           color="inherit"
//           sx={{ display: { xs: "block", md: "none" } }}
//           onClick={toggleDrawer(true)}
//         >
//           <MenuIcon />
//         </IconButton>

//         <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
//           <Box sx={{ width: 250 }}>
//             <List>
//               {navLinks.map((link, index) => (
//                 <ListItem button key={index}>
//                   <Link
//                     to={link.to}
//                     smooth={true}
//                     duration={500}
//                     offset={-60}
//                     style={{
//                       textDecoration: "none",
//                       color: "black",
//                       width: "100%",
//                       display: "block",
//                       padding: "10px 20px",
//                       fontWeight: "bold",
//                     }}
//                     onClick={() => setDrawerOpen(false)}
//                   >
//                     {link.text}
//                   </Link>
//                 </ListItem>
//               ))}
//               {/* Contact Button in Mobile Menu */}
//               <ListItem button>
//                 <Link
//                   to="contact"
//                   smooth={true}
//                   duration={500}
//                   offset={-60}
//                   style={{
//                     textDecoration: "none",
//                     color: "black",
//                     width: "100%",
//                     display: "block",
//                     padding: "10px 20px",
//                     fontWeight: "bold",
//                   }}
//                   onClick={() => setDrawerOpen(false)}
//                 >
//                   Contact
//                 </Link>
//               </ListItem>
//             </List>
//           </Box>
//         </Drawer>
//       </Toolbar>
//     </AppBar>
//   );
// }

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  Button,
} from "@mui/material";
import { Link } from "react-scroll"; // ✅ Import react-scroll
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// Import both logos
import logoWhite from "../assets/Logo/logo-white.png";
import logoDark from "../assets/Logo/logo-dark.png";

export default function Header({ darkMode, setDarkMode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = [
    { text: "Home", to: "home" },
    { text: "About", to: "about" },
    { text: "Experience", to: "experience" },
    { text: "Projects", to: "projects" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: darkMode
          ? "rgba(20, 20, 20, 0.9)"
          : "rgba(255, 255, 255, 0.9)",
        color: darkMode ? "#ffffff" : "#000000",
        borderRadius: "40px",
        boxShadow: darkMode
          ? "1px 0px 5px rgb(167, 2, 185)"
          : "1px 0px 5px rgba(0, 0, 0, 0.2)",
        margin: "20px auto",
        maxWidth: "80%",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        left: "50%",
        transform: "translateX(-50%)",
        top: 0,
        zIndex: 1200,
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Dark Mode Toggle - Stays on the Left */}
        <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        {/* Dynamic Logo - Moves to Center in Mobile */}
        <Box
          sx={{
            position: "absolute",
            left: { xs: "50%", md: "70px" }, // ✅ Moves to left in desktop, centers in mobile
            transform: { xs: "translateX(-50%)", md: "none" },
            textAlign: "center",
          }}
        >
          <Link to="home" smooth={true} duration={500} offset={-60}>
            <img
              src={darkMode ? logoWhite : logoDark}
              alt="SAMEERA"
              style={{
                maxHeight: "40px",
                maxWidth: "160px",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
              }}
            />
          </Link>
        </Box>

        {/* Navigation Links - Hidden on Mobile */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: "25px" }}>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-60} // Adjust based on header height
              style={{
                textDecoration: "none",
                color: darkMode ? "white" : "black",
                padding: "8px 15px",
                borderRadius: "10px",
                transition: "all 0.3s ease-in-out",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = darkMode
                  ? "rgba(255, 255, 255, 0.2)"
                  : "rgba(0, 0, 0, 0.1)")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              {link.text}
            </Link>
          ))}

          {/* Contact Button */}
          <Link to="contact" smooth={true} duration={500} offset={-60}>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                px: 3,
                py: 1,
                fontSize: "14px",
                fontWeight: "bold",
                borderRadius: "50px",
                textTransform: "none",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: darkMode ? "#FE54B8" : "#0E0D27",
                  color: "white",
                },
              }}
            >
              Contact
            </Button>
          </Link>
        </Box>

        {/* Mobile Navigation Drawer */}
        <IconButton
          edge="end"
          color="inherit"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 250 }}>
            <List>
              {navLinks.map((link, index) => (
                <ListItem button component="div" key={index}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-60}
                    style={{
                      textDecoration: "none",
                      color: darkMode ? "white" : "black",
                      width: "100%",
                      display: "block",
                      padding: "10px 20px",
                      fontWeight: "bold",
                    }}
                    onClick={() => setDrawerOpen(false)}
                  >
                    {link.text}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
