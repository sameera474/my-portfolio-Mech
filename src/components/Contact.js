import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid, Paper } from "@mui/material";
import emailjs from "emailjs-com"; // Import email.js for sending emails

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        "service_sam1988", // Replace with your EmailJS service ID
        "template_0pnfiaq", // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "eOGjURxTVYaviYEvC" // Replace with your EmailJS user ID (public key)
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setSuccessMessage("Your message has been sent successfully!");
          setIsSending(false);
          setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
        },
        (error) => {
          console.log("Failed to send email:", error);
          setSuccessMessage("Failed to send message. Try again later.");
          setIsSending(false);
        }
      );
  };

  return (
    <Box sx={{ p: 5, display: "flex", justifyContent: "center" }}>
      <Paper
        elevation={6}
        sx={{
          p: 5,
          width: "100%",
          maxWidth: "600px",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "15px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "white",
          textAlign: "center",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            color: "white",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: 2,
            color: "text.primary",
          }}
        >
          Contact Me
        </Typography>

        {successMessage && (
          <Typography sx={{ color: "lightgreen", mb: 2 }}>
            {successMessage}
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
            sx={{
              bgcolor: "background.paper", // Ensure proper contrast
              input: { color: "text.primary" }, // Text input follows theme
              label: { color: "text.primary" }, // Label follows theme
            }}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
            sx={{
              bgcolor: "background.paper", // Ensure proper contrast
              input: { color: "text.primary" }, // Text input follows theme
              label: { color: "text.primary" }, // Label follows theme
            }}
          />

          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            sx={{
              bgcolor: "background.paper", // Ensure proper contrast
              input: { color: "text.primary" }, // Text input follows theme
              label: { color: "text.primary" }, // Label follows theme
            }}
          />

          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
            sx={{
              bgcolor: "background.paper", // Ensure proper contrast
              input: { color: "text.primary" }, // Text input follows theme
              label: { color: "text.primary" }, // Label follows theme
            }}
          />

          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 3, width: "100%" }}
            type="submit"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Submit"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
