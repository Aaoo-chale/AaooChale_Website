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
const Blog1 = () => {
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
                  The Best Times and Routes for Carpooling and Taxi Sharing: How
                  to Maximize Your Savings and Minimize Your Commute Time
                </p>

                <p className="blog_para">
                  Commutes can be a significant drain on our time and finances.
                  However, with the rise of carpooling and taxi-sharing
                  services, there are now more options than ever before to make
                  our commutes more cost-effective and time-efficient. By
                  knowing the best times and routes for carpooling and taxi
                  sharing, you can save money and reduce…
                </p>

                <NavLink to="/readmore2" className="nav_list">
                  <p className="blog_read">READ MORE</p>
                </NavLink>
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
                  The Future of Carpooling and Taxi Sharing: Innovations and
                  Trends to Watch for in the Coming Years
                </p>

                <p className="blog_para">
                  Carpooling and taxi sharing have become popular modes of
                  transportation in recent years due to their cost-effectiveness
                  and convenience. With the emergence of technology and changing
                  consumer needs, these modes of transportation are expected to
                  evolve significantly in the coming years.This article will
                  explore the innovations...
                </p>

                <NavLink to="/readmore1" className="nav_list">
                  <p className="blog_read">READ MORE</p>
                </NavLink>
              </Item>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Blog1;
