import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./main.css";

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

const Main = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root} style={{marginTop:"4%"}}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} >
          <Paper
            className={classes.paper}
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              boxShadow: "none",
            }}
          >
            <Grid
             
              className="insight_content"
            >
              <h1 className="get-more">
                <br />
               Get Insights from
                <br />
                Your Data
              </h1>

              <p className="ger-text">
                Gain valuable insights into your Aaoo Chale app. View your
                commute patterns and optimize your ride-sharing for maximum
                efficiency and convenience.
              </p>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "white", boxShadow: "none" }}
          >
            <Grid style={{ alignSelf: "center" }}>
              <img src="corpool1.jpg" className="dashboard-img" />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
