import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./discription.css";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

const Content = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root} style={{ marginTop: "5%" }}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Paper
            className={classes.paper}
            style={{
              boxShadow: "none",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div style={{ width: "100%" }}>
              <img src="corpool2.jpg" className="gallery-img" />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            className={classes.paper}
            style={{
              display: "flex",
              boxShadow: "none",
            }}
          >
            <Grid className="hassle_content">
              <p className="para-head">GET RESULTS</p>
              <h1 className="discription_heading">
                Hassle-Free
                <br /> Start-up
              </h1>

              <p className="discription_text">
                Easily get started with Aaoo Chale's hassle-free carpooling
                sign-up process. Find ride-sharing partners and plan trips
                effortlessly.
              </p>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
