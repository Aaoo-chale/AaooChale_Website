import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./card.css";

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

function Card(props) {
  const { classes } = props;

  return (
    <div
      style={{
        backgroundColor: "",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        marginTop: "5%",
      }}
    >
      <Grid
        container
        spacing={2}
        style={{ width: "90%" }}
        className="main_container"
      >
        {/* first card*/}
        <Grid item xs>
          <Paper
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "",
              boxShadow: "none",
              border: "1px solid lightgrey",
              height:"37vh"
            }}
          >
            <Grid
              style={{
                width: "70%",
                alignSelf: "center",
                marginTop: "30px",
              }}
            >
              <img src="icon3.png" />
              <h2 className="heading_head">Easily Book Rides</h2>
              <p className="paragraph_para">
              Use Aaoo Chale's app to quickly find and book rides with other
              </p>
            </Grid>
          </Paper>
        </Grid>


        {/* second card*/}
        <Grid item xs>
        <Paper
        
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "",
            boxShadow: "none",
            border: "1px solid lightgrey",
            height:"37vh"

          }}
        >
          <Grid
            style={{
              width: "90%",
              alignSelf: "center",
              marginTop: "30px",
            }}
          >
            <img src="icon3.png" />
            <h2 className="heading_head">Manage Your Schedule</h2>
            <p className="paragraph_para">
            Keep track of your carpooling schedule and make adjustments as
            needed with our app.
            </p>
          </Grid>
        </Paper>
      </Grid>
        {/* third card*/}
        <Grid item xs>
          <Paper
            
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "",
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
              <img src="icon3.png" />
              <h2 className="heading_head">Instant Ride Alert</h2>
              <p className="paragraph_para">
                Get real-time notifications about your carpooling activity,
                including ride confirmations, updates, and cancellations.
              </p>
            </Grid>
          </Paper>
        </Grid>

        
      </Grid>
    </div>
  );
}

Card.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Card);
