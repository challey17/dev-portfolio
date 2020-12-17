import React from "react";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Technologies from "./Technologies";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bodyStyles: {
    backgroundColor: "#121212",
    color: "#ffffff",
  },
});
const App = () => {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.bodyStyles} container direction="column">
        <Grid item>
          <NavBar />
        </Grid>

        {/* all body content container*/}

        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            {/* Personal info, photo on left, blurb on right  */}
            <Grid item container></Grid>
            {/* Technologies */}
            <Grid item>
              <Technologies />
            </Grid>
            {/* Projects */}
            <Grid item>
              <Projects />
            </Grid>
          </Grid>

          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
