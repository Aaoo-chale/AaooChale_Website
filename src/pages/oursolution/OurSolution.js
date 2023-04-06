import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React from "react";
import Navbar from "../../component/navbar/Navbar";
import "./oursolution.css";
import LooterFooter from "../../component/lowerfooter/LooterFooter";
import SolutionCard from "./component/solutioncard/SolutionCard";
import SolutionCard1 from "./component/solutioncard1/SolutionCard1";
import SolutionCard3 from "./component/solutioncard3/SolutionCard3";
import SolutionCard4 from "./component/solutioncard4/SolutionCard4";
import SolutionCard5 from "./component/solutioncard5/SolutionCard5";
import SolutionCard6 from "./component/solutioncard6/SolutionCard6";
import SolutionCard7 from "./component/solutioncard7/SolutionCard7";
import SolutionCard8 from "./component/solutioncard8/SolutionCard8";
import HeaderFooter from "../../component/headerfooter/HeaderFooter";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const OurSolution = () => {
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
            style={{ boxShadow: "none", backgroundColor: "#d4e4e5" }}
            className="our_content"
          >
            <p className="oursolution_paragraph1">FEATURES</p>
            <h1 className="oursolution_heading">
              A Global Solution to the
              <br />
              Management
            </h1>
            <p className="oursolution_paragraph2">
              Efficient and Sustainable Global Carpooling Solutions
            </p>
            <p
              className="oursolution_paragraph2"
              style={{ marginBottom: "50px" }}
            >
              to Reduce Costs and Traffic Congestion
            </p>
          </Item>
        </Grid>
      </Grid>
      <SolutionCard />
      <SolutionCard1 />
      <SolutionCard3 />
      <SolutionCard4 />
      <SolutionCard5 />
      <SolutionCard6
        heading1="User-Friendly Interface"
        heading2="Real-Time Updates"
        heading3="24/7 Support"
        paragraph1="The user-friendly interface of our platform features a simple and intuitive design,
         making it easy for users to navigate and access all the features they need."
        paragraph2="Get real-time updates on your carpool journey, including notifications for ride
         requests, route changes, and arrival times, keeping you informed every step of the way."
        paragraph3="Get assistance whenever you need it with our 24/7 customer support,
          always available to help you with any questions or concerns."
      />
      <SolutionCard6
        heading1="Cost-Effective"
        heading2="Instant Approval"
        heading3="Chat Platform"
        paragraph1="The Aaoo Chale app provides cost-effective ride-sharing options with affordable pricing, ensuring value and accessibility for users."
        paragraph2=" Get instant approval for ride-sharing requests, allowing you to quickly connect with carpooling partners and start your journey."
        paragraph3=" A built-in chat platform allows users to communicate with each other to coordinate ride details, including pickup and drop-off locations."
      />
      <SolutionCard7 />
      <SolutionCard8 />
      <HeaderFooter />
      <LooterFooter mT="-8%" ht="100vh" />
    </Box>
  );
};

export default OurSolution;
