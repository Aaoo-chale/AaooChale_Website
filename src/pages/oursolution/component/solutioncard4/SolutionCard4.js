import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./solutioncard4.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SolutionCard4() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item   className='Hassle_content'>
          <Item
            style={{
              boxShadow: "none",
              backgroundColor: "white",
              borderRadius: "none",
            }}
          >
            <img src="corpool.jpg" className="feature3_img" />
          </Item>
        </Grid>
        <Grid item   className='Hassle_container'>
          <Item
            style={{
              boxShadow: "none",
              backgroundColor: "white",
              borderRadius: "none",
            }}
          >
            <Grid  className='Hassletext_container' >
              <p className="card1para">EASE OF USE</p>
              <h1 className="card1heading">Fast Start-up without Hassle</h1>
              <p className="card1para1">
                Aaoo Chale's carpooling platform offers a fast and hassle-free
                start-up experience, allowing users to quickly and easily create
                and book rides without any delays or complications. The platform
                is optimized for speed and convenience, making it easy for users
                to get started with carpooling.
              </p>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
