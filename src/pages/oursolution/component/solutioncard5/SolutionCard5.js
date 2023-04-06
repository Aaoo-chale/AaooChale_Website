import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./solutioncard5.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SolutionCard5() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item className="features_content">
          <Item
            style={{ boxShadow: "none", backgroundColor: "", marginTop: "5%" }}
          >
            <p className="soiution5para1">IMPORTANT OPINION</p>
            <h1 className="soiution5heading">All Features</h1>
            <p className="soiution5para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec
              <br /> ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
