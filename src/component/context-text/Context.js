import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./context.css";

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

function Context(props) {
  const { classes } = props;

  return (
    <div className={classes.root} style={{ marginTop: "2%" }}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{ boxShadow: "none" }}>
            <p className="context_paragraph">IMPORTANT OPINION</p>
            <h1 className="context_heading">What the Experts Say!</h1>
            <p className="context_paragraph1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            </p>
            <p className="context_paragraph2">
            ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Context.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Context);
