import React from "react";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Technologies from "./Technologies";
import { Grid } from "@material-ui/core";

const App = () => {
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <NavBar />
        </Grid>

        {/* all body content container*/}

        <Grid item container>
          <Grid item xs={0} sm={2} />
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

          <Grid item xs={0} sm={2} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
