import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./componentcard.css";

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

function ComponentCard(props) {
  const { classes } = props;

  return (
    <div
      className={classes.root}
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Grid
        container
        spacing={2}
        style={{ width: "90%" }}
        className="card_component"
      >
        <Grid item xs style={{ width: "100%" }}>
          <Paper
            className={classes.paper}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "",
              border: "1px solid lightgrey",
            }}
          >
            <Grid
              style={{
                width: "90%",
                marginTop: "20px",
              }}
              className="card_hover"
            >
              <Grid style={{ height: "8vh" }}>
                <img src="icon5.png" className="component_img" />
              </Grid>
              <h2 className="component_heading">Monitoring</h2>
              <p className="component_paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs>
          <Paper
            className={classes.paper}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "",
              border: "1px solid lightgrey",
            }}
          >
            <Grid
              style={{
                width: "90%",
                alignSelf: "center",
                marginTop: "20px",
                // height: "35vh",
              }}
            >
              <Grid style={{ height: "8vh" }}>
                <img src="icon6.png" className="component_img" />
              </Grid>
              <h2 className="component_heading">Asset Management</h2>
              <p className="component_paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper
            className={classes.paper}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "",
              border: "1px solid lightgrey",
            }}
          >
            <Grid
              style={{
                width: "90%",
                alignSelf: "center",
                marginTop: "20px",
                // height: "35vh",
              }}
            >
              <Grid style={{ height: "8vh" }}>
                <img src="icon7.png" className="component_img" />
              </Grid>
              <h2 className="component_heading">Digital Twins</h2>
              <p className="component_paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

ComponentCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComponentCard);
