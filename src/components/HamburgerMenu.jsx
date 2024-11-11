import React, { useState } from "react";
import { Drawer, List, ListItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  
  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer}>
        <List>
          <ListItem button>Home</ListItem>
          <ListItem button>About</ListItem>
          <ListItem button>Contact</ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default HamburgerMenu;
