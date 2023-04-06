import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import './solutioncard7.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SolutionCard7() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item
            style={{ boxShadow: "none",  marginTop: "5%" }}
          >
            <p className="soiution7para1">IMPORTANT OPINION</p>
            <h1 className="soiution7heading">Frequently Asked Question</h1>
            <p className="soiution7para">
              New to Aaoo Chale? Don't worry, we're here to help! As you embark
              on your carpool journey,
            </p>
            <p className="soiution7para">
              we've put together some FAQs to help make your experience
              seamless.
            </p>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
