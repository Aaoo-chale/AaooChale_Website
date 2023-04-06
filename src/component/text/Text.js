import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./text.css";

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

function Text(props) {
  const { classes } = props;

  return (
    <div className={classes.root} style={{ marginTop: "4%" }}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{ boxShadow: "none" }}>
            <p className="paragraph">HOW IT WORKS</p>
            <h1 className="heading">Create a Real-Time Control</h1>
            <p className="paragraph1">
              Take control of your carpooling with Aaoo Chale. Book rides,
              manage schedules, and stay updated with
            </p>
            <p className="paragraph2">
              real-time data for a hassle-free experience.
            </p>
            <Grid>
              <img src="corpool.jpg" className="home-img" />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Text.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Text);
