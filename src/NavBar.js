import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  navStyles: {
    backgroundColor: "#181818",
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.navStyles} position="relative">
        <Toolbar>
          <Typography variant="h6">About</Typography>
          <Typography variant="h6">Contact</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
