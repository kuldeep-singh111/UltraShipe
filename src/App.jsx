import React from "react";
import HamburgerMenu from "./components/HamburgerMenu.jsx";
import HorizontalMenu from "./components/HorizontalMenu.jsx";
import Employee from "./components/Employee.jsx";
import { Container, Box } from "@mui/material";

function App() {
  return (
    <Container>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <HamburgerMenu />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'block' }, marginBottom: '20px'  }}>
        <HorizontalMenu />
      </Box>
      <Employee />
    </Container>
  );
}

export default App;
