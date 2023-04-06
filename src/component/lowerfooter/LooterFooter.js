import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./lowerfooter.css";
import HeaderFooter from "../headerfooter/HeaderFooter";
import { NavLink } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function LooterFooter({ mT, ht }) {
  return (
    <Grid
      style={{
        backgroundColor: "#051e30",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: ht,
        borderBottom: "1px solid #b3d8f2",
        marginTop: mT,
      }}
    >
      <Grid
        container
        spacing={3}
        style={{
          justifyContent: "space-around",
          width: "80%",
        }}
      >
        <Grid item xs={4}>
          <Item style={{ boxShadow: "none", backgroundColor: "#051e30" }}>
            <h2 className="lowerfooter_heading">About Aaoo Chale</h2>
          
              <img src="Aaoochale.png" className="aaochale_img" />
            
            <p className="lowerfooter_paragraph">
              Aaoo chale is a carpool mobile application, which helps people
              book or share rides conveniently In realtime. Aaoo chale is
              coiotinuesly engaged in developing and maintaining technology
              solution to reduce the emission and consumption of fossils, just
              to make earth even more cleaner.
            </p>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item
            style={{
              boxShadow: "none",
              backgroundColor: "#051e30",
              paddingLeft: "40%",
            }}
          >
            <h2 className="lowerfooter_heading">Company</h2>
            <Grid className="lower_list">
              <p>Security</p>
             <NavLink to='/privacypolicy' className="nav_list"> <p>Privacy Policy</p></NavLink>
             <NavLink to='/termcondition' className="nav_list" ><p>Terms of Use</p></NavLink> 
              <p>Careers</p>
              <NavLink to='/contact' className="nav_list"><p>Contact Us</p></NavLink>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item style={{ boxShadow: "none", backgroundColor: "#051e30" }}>
            <h2 className="lowerfooter_heading">Resources</h2>
            <Grid className="lower_list">
            <NavLink to='/blogs' className="nav_list"><p>Blog</p></NavLink>
              <p>Help Center</p>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item style={{ boxShadow: "none", backgroundColor: "#051e30" }}>
            <h2 className="lowerfooter_heading">Resources</h2>
            <Grid
              style={{
                width: "60%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img src="facebook.png" className="icon_img" />
              <img src="twitter.png" className="icon_img" />
              <img src="instagram.png" className="icon_img" />
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item style={{ boxShadow: "none", backgroundColor: "#051e30" }}>
            <p style={{ color: "#b3d8f2" }}>
              © 2023 Aaoo Chale Designed by Dream Platforms Pvt Ltd
            </p>
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
}
