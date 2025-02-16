import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

import Header from "./components/Header";
import Home from "./components/Home"; // ✅ Added Home Section
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import darkBackgroundImage from "./assets/images/background-1.jpg";
import lightBackgroundImage from "./assets/images/background-2.jpg";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: darkMode ? "#ffffff" : "#0E0D27" },
          secondary: { main: "#54B8FE" },
          background: {
            default: darkMode ? "#121212" : "#ffffff",
            paper: darkMode ? "#1E1E1E" : "#f5f5f5",
          },
          text: {
            primary: darkMode ? "#ffffff" : "#000000",
          },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url(${
            darkMode ? darkBackgroundImage : lightBackgroundImage
          })`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          transition: "all 0.5s ease-in-out",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <Box sx={{ p: 3 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* ✅ Home Section is Back */}
            <Element name="home">
              <Home darkMode={darkMode} />
            </Element>

            <Element name="about">
              <About />
            </Element>

            <Element name="experience">
              <Experience />
            </Element>

            <Element name="projects">
              <Projects />
            </Element>
          </motion.div>

          <Element name="contact">
            <Contact />
          </Element>
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}
