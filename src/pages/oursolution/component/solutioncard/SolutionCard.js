import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./solutioncard.css";

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

function SolutionCard(props) {
  const { classes } = props;

  return (
    <div
      className={classes.root}
      style={{
        backgroundColor: "white",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        marginTop: "5%",
      }}
    >
      <Grid container spacing={2} style={{width:"90%"}} className='ourmain_container'>
        <Grid item xs style={{ width: "100%" }}>
          <Paper
            className={classes.paper}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "none",
              border: "1px solid lightgrey",
            }}
          >
            <Grid
              style={{
                width: "90%",
                alignSelf: "center",
                marginTop: "30px",
              }}
            >
              <img src="icon1.png" />
              <h2 className="heading_head">Cost Savings</h2>
              <p className="paragraph_para">
                Carpooling helps to reduce transportation costs, including fuel
                and parking expenses, which can save individuals and businesses
                a significant amount of money.
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
              boxShadow: "none",
              border: "1px solid lightgrey",
            }}
          >
            <Grid
              style={{
                width: "90%",
                alignSelf: "center",
                marginTop: "30px",
              }}
            >
              <img src="icon2.png" />
              <h2 className="heading_head">Improved Productivity</h2>
              <p className="paragraph_para">
                Carpooling can help to reduce stress and fatigue associated with
                driving alone, allowing individuals to arrive at their
                destination more relaxed and refreshed.
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
              boxShadow: "none",
              border: "1px solid lightgrey",
            }}
          >
            <Grid
              style={{
                alignSelf: "center",
                marginTop: "25px",
              }}
            >
              <img src="icon3.png" />
              <h2 className="heading_head">Sustainable Transportation</h2>
              <p className="paragraph_para">
                Join the carpooling revolution, enjoy cost-effective and
                sustainable transportation with Aaoo Chale's innovative
                ride-sharing platform
              </p>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

SolutionCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SolutionCard);
