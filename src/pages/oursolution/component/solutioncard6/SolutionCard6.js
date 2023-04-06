import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./solutioncard6.css";

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

function SolutionCard6({
  heading1,
  heading2,
  heading3,
  paragraph1,
  paragraph2,
  paragraph3,
}) {
  // const { classes } = props;

  return (
    <div
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Grid
        container
        spacing={4}
        style={{ width: "90%", marginBottom:"2%", marginTop:"2%"}}
        className="userfriendly_content"
      >
        {/* first card */}

        <Grid item xs style={{ width: "100%" }}>
          <Paper
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "",
              border: "1px solid lightgrey",
              height: "50vh",
            }}
          >
            <Grid
              style={{
                width: "88%",
              }}
              className="card_hover"
            >
              <Grid style={{ height: "8vh" }}>
                <img src="icon5.png" className="component_img" />
              </Grid>
              <h2 className="component_heading">{heading1}</h2>
              <p className="component_paragraph">{paragraph1}</p>
            </Grid>
          </Paper>
        </Grid>

        {/* second card */}

        <Grid item xs>
          <Paper
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "",
              border: "1px solid lightgrey",
              height: "50vh",
            }}
          >
            <Grid
              style={{
                width: "80%",
                alignSelf: "center",
              }}
            >
              <Grid style={{ height: "8vh" }}>
                <img src="icon6.png" className="component_img" />
              </Grid>
              <h2 className="component_heading">{heading2}</h2>
              <p className="component_paragraph">{paragraph2}</p>
            </Grid>
          </Paper>
        </Grid>

        {/* third card */}
        <Grid item xs>
          <Paper
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "",
              border: "1px solid lightgrey",
              height: "50vh",
            }}
          >
            <Grid
              style={{
                width: "80%",
                alignSelf: "center",
              }}
            >
              <Grid style={{ height: "8vh" }}>
                <img src="icon7.png" className="component_img" />
              </Grid>
              <h2 className="component_heading">{heading3}</h2>
              <p className="component_paragraph">{paragraph3}</p>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

SolutionCard6.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SolutionCard6);
