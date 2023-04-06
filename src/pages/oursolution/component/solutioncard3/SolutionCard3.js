import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./solutioncard.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",

  padding: theme.spacing(1),
  textAlign: "center",
}));

export default function SolutionCard3() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item   className='ourtrue_content'>
          <Item
            style={{
              boxShadow: "none",
              backgroundColor: "white",
              borderRadius: "none",
            }}
          >
            <Grid  className='ourtrue_container' >
              <p className="solucard3para">ENGINEERING</p>
              <h1 className="solucard3heading">True High Performance</h1>
              <p className="solucard3para1">
                Aaoo Chale's carpooling platform offers true high performance,
                with fast and reliable performance even during peak usage
                periods. The platform is designed to handle large volumes of
                traffic and provide a seamless user experience.
              </p>
            </Grid>
          </Item>
        </Grid>
        <Grid item  className='mainimage_container'>
          <Item
            style={{
              boxShadow: "none",
              backgroundColor: "white",
              borderRadius: "none",
            }}
          >
            <img src="carpool.png" className="carpool_img" />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
