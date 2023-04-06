import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React from "react";
import Navbar from "../../component/navbar/Navbar";
import "./blogs.css";
import LooterFooter from "../../component/lowerfooter/LooterFooter";
import Blog1 from "./component/blog1/Blog1";
import Blog2 from "./component/blog2/Blog2";
import { NavLink } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Blogs = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12}>
          <Item style={{ boxShadow: "none", backgroundColor: "#d4e4e5" }}>
            <Navbar />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item
            style={{
              boxShadow: "none",
              backgroundColor: "#d4e4e5",
              height: "25vh",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <h1 className="about_heading">Blog</h1>
          </Item>
        </Grid>

        <Grid item xs={12} className='blogs_content'>
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
                }}
              >
                <Grid>
                  <img src="carpool1.png" className="blog_img1" />
                </Grid>
                <p className="blog_head">
                  Benefits of Carpooling That You May Not Know About
                </p>

                <p className="blog_para">
                  Carpooling, also known as ride-sharing or car-sharing, has
                  become increasingly popular in recent years. This is due to
                  the growing awareness of the negative impact of carbon
                  emissions on the environment, as well as the need to reduce
                  traffic congestion and save money. Carpooling is a simple and
                  effective way to achieve these goals, allowing people to share
                  their cars with others...
                </p>

                <NavLink to="/readmore" className="nav_list">
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
                }}
              >
                <Grid>
                  <img src="carpool2.png" className="blog_img1" />
                </Grid>
                <p className="blog_head">
                  How to Save Money by Carpooling: A Comprehensive Guide
                </p>

                <p className="blog_para">
                  If you are looking to save money on your daily commute,
                  carpooling is an excellent solution. Carpooling is a shared
                  ride where people who are traveling in the same direction and
                  at the same time come together and share a ride in one car.
                  Carpooling not only saves you money but also helps reduce
                  traffic congestion and lowers carbon emissions. In this article, we will guide you through the benefits…
                </p>
                <NavLink className="nav_list" to="/readmore4">
                  <p className="blog_read">READ MORE</p>
                </NavLink>
              </Item>
            </Grid>
          </Item>
          <Blog1 />
          <Blog2 />

          <LooterFooter ht="100vh" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Blogs;
