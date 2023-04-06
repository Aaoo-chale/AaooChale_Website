import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./solutioncard1.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SolutionCard1() {
  return (
    <Box sx={{}}>
      <Grid container xs={24} className="function_content">
        <Grid
          item
        
          className="images_content"
        >
          <img src="carpool4.png" className="feature_img" />
        </Grid>

        <Grid item  className="function_text_content">
          <Item
            style={{
              boxShadow: "none",
              backgroundColor: "",
              borderRadius: "none",
            }}
          >
            <Grid  className="function_text_container" >
              <p className="card1para">USABILITY</p>
              <h1 className="card1heading">
                Functional
                <br />
                Dashboard
              </h1>
              <p className="card1para1">
                Aaoo Chale's dashboard is designed to provide users with easy
                access to important information such as upcoming rides,
                notifications, and inbox messages. The dashboard is highly
                functional and user-friendly, allowing users to quickly and
                easily manage their carpooling experience
              </p>
            </Grid>
            <Grid style={{ width: "100%"}} className='number_content'>
              <Grid style={{ display: "flex" }}>
                <img
                  src="check.png"
                  style={{ height: "15px", width: "15px" }}
                />
                <p>User-Friendly Interface</p>
              </Grid>

              <Grid style={{ display: "flex" }}>
                <img
                  src="check.png"
                  style={{ height: "15px", width: "15px" }}
                />
                <p>Customizable Settings:</p>
              </Grid>

              <Grid style={{ display: "flex" }}>
                <img
                  src="check.png"
                  style={{ height: "15px", width: "15px" }}
                />
                <p>Real-Time Analytics</p>
              </Grid>

              <Grid style={{ display: "flex" }}>
                <img
                  src="check.png"
                  style={{ height: "15px", width: "15px" }}
                />
                <p>
                  User-Friendly Interface: Simple and intuitive design for easy
                  navigation.
                </p>
              </Grid>
              <Grid style={{ display: "flex" }}>
                <img
                  src="check.png"
                  style={{ height: "15px", width: "15px" }}
                />
                <p>Trip Management</p>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
