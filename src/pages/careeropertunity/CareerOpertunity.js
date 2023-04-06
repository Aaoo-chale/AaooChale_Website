import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React from "react";
import Navbar from "../../component/navbar/Navbar";
// import "./about.css";
import LooterFooter from "../../component/lowerfooter/LooterFooter";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CareerOpertunity = () => {
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
            <h1 className="about_heading">Career Opertunity</h1>
          </Item>
        </Grid>

        <Grid item xs={12}>
          <Item
            style={{
              boxShadow: "none",
              backgroundColor: "aliceblue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={10}>
              <Item
                style={{
                  boxShadow: "none",
                  backgroundColor: "white",
                  marginTop: "6%",
                  marginBottom: "6%",
                }}
              >
                <p>
                  Career Opertunity
                </p>
              </Item>
            </Grid>
          </Item>
          <LooterFooter ht="100vh" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default  CareerOpertunity ;
