import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const NavBar = () => {
  return (
    <div>
      <AppBar color="primary" position="relative">
        <Toolbar>
          <Typography variant="h6">About</Typography>
          <Typography variant="h6">Contact</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
