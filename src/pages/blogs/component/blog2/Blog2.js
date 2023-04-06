import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React from "react";
import { NavLink } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Blog2 = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12}>
          <Item
            style={{
              boxShadow: "none",
              backgroundColor: "aliceblue",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: "aliceblue",
              borderRadius: "none",
            }}
          >
            <Grid item xs={5}>
              <Item
                style={{
                  boxShadow: "none",
                  backgroundColor: "white",
                  marginTop: "8%",
                  marginBottom: "8%",
                }}
              >
                <Grid>
                  <img src="carpol3.png" className="blog_img1" />
                </Grid>
                <p className="blog_head">
                  People not caring enough about your product is your true
                  competition, not some other startup
                </p>

                <p className="blog_para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat…
                </p>

                <p className="blog_read">READ MORE</p>
              </Item>
            </Grid>

            <Grid item xs={5}>
              <Item
                style={{
                  boxShadow: "none",
                  backgroundColor: "white",
                  marginTop: "8%",

                  marginBottom: "8%",
                }}
              >
                <Grid>
                  <img src="carpool4.png" className="blog_img1" />
                </Grid>
                <p className="blog_head">
                  The single best decision we ever made was to make customer
                  service everyone’s job
                </p>

                <p className="blog_para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat…
                </p>

                <p className="blog_read">READ MORE</p>
              </Item>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Blog2;
