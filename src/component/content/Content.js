import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./content.css";
import { NavLink } from "react-router-dom";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    // textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

const Content = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root} style={{ backgroundColor: "aliceblue" }}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} >
          <Paper
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              boxShadow: "none",
              backgroundColor: "aliceblue",
            }}
          >
            <Grid
              style={{ width: "70%", alignSelf: "center", marginTop: "30px" }}
              className="corpool_text"
            >
              <p className="para-head">MADE FOR HUMANS, JUST TO SAVE EARTH</p>
              <h1 className="carpool">
                Carpool
                <br /> with Aaoo Chale,
                <br /> Without fikar
              </h1>

              <p className="carpool-text">
                Carpooling made simple with Aaoo Chale - book rides and save
                money with real-time ride-sharing on our app
              </p>
            
                <NavLink to="https://play.google.com/store/apps/details?id=com.aaoochale">
                  <img src="playStore.png" className="store_img" />
                </NavLink>
                <NavLink to='https://www.youtube.com/watch?v=VpINzgNw4sU'>
                <button className="btn2">Watch Demo</button>
                </NavLink>
              </Grid>
            
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            className={classes.paper}
            style={{
              boxShadow: "none",
              backgroundColor: "aliceblue",
              marginTop: "30px",
            }}
          >
            <Grid style={{ alignSelf: "center" }}>
              <img src="phone (3).png" className="phone-img" />
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
