import React from "react";
import { Toolbar, AppBar, Button } from "@mui/material";

function HorizontalMenu() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default HorizontalMenu;
