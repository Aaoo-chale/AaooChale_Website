import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import "./headerfooter.css";
import { NavLink } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function HeaderFooter() {
  return (
        <Grid item  style={{width:'100%',alignItems:'center',justifyContent:'center',display:'flex', padding:"30px 0px "}}>
          <Item
            style={{
              boxShadow: "none",
              backgroundColor: "aliceblue",
              border: "1px solid #1488CC",
            }}
            className="headerfooter_card"
          >
            <h1 className="headerfooter_heading">Ready to Start?</h1>
            <p className="headerfooter_paragraph">
            Carpooling made simple with Aaoo Chale - book rides and save money with <br/>
            real-time ride-sharing on our app
            </p>

            <NavLink to="https://play.google.com/store/apps/details?id=com.aaoochale">
              <img src="playStore.png" className="store_img" />
            </NavLink>
          </Item>
        </Grid>
  );
}
