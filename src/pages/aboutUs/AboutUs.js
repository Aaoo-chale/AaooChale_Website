import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React from "react";
import Navbar from "../../component/navbar/Navbar";
import "./about.css";
import LooterFooter from "../../component/lowerfooter/LooterFooter";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AboutUs = () => {
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
            <h1 className="about_heading">About Us</h1>
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
            <Grid item className="about_content">
              <Item
                style={{
                  boxShadow: "none",
                  backgroundColor: "white",
                  marginTop: "4%",
                  marginBottom: "4%",
                }}
              >
                <p className="about_para">
                  Welcome to Dream Platforms Pvt Ltd, the creators of AAOO CHALE
                  - a revolutionary mobile application designed to help people
                  travel immediately, securely, economically, and comfortably.
                  We understand that traveling in public transport can be a
                  nightmare due to long waiting times, crowded spaces, and lack
                  of comfort. That's why we've created AAOO CHALE, which offers
                  an innovative solution that connects private vehicle owners
                  and passengers who depend on public transport. <br />
                  <br />
                  Our goal is to help both vehicle owners and passengers by
                  reducing traffic on the roads, lowering travel costs, and
                  contributing to a cleaner environment by reducing the number
                  of solo travelers. With AAOO CHALE, we aim to provide a
                  platform where people can book rides and travel with the
                  comfort of a private vehicle.
                  <br />
                  <br />
                  We've identified two types of travelers - those who own a
                  private vehicle and those who rely on public transport.
                  Private vehicle owners often travel solo, resulting in higher
                  travel costs. With AAOO CHALE, we want to help them decrease
                  their travel costs by sharing rides with fellow travelers. On
                  the other hand, people who depend on public transport also
                  want to travel with the comfort of a private vehicle. AAOO
                  CHALE enables them to book rides in the vehicles of
                  ride-sharers who own private vehicles.
                  <br />
                  <br />
                  Our mobile application accurately matches two different people
                  in the same city who want to travel to the same destination on
                  the same date and time. They can communicate with each other
                  on our mobile application and travel together, helping each
                  other out. P2P car sharing is a type of vehicle sharing that
                  we promote, where people share their cars with co-travelers.
                  The P2P model has the owner in the car while the ride is
                  taking place, which ensures safety and security.
                  <br />
                  <br />
                  We're proud to state that AAOO CHALE is India's best mobile
                  application that helps both vehicle owners and passengers. Our
                  service is legal as per the Motor Vehicles Act, of 1988, which
                  allows ride-sharing as long as it involves cost-sharing and
                  the owner/driver of the car is not flouting the law to make a
                  profit. We act as a service provider and charge a service fee
                  from our users.
                  <br />
                  <br />
                  Our innovative solution can help the 97.1% of the total
                  population in our country who do not own private vehicles and
                  depend on public transport. Public transport is mostly
                  pre-occupied, leaving people who need to travel in emergency
                  situations with no options. With AAOO CHALE, people with the
                  same set of interests are connected digitally and can
                  communicate in real time. By sharing their resources and
                  contributing, both types of people can complement each other.
                  <br />
                  Thank you for choosing AAOO CHALE. We're excited to help you
                  travel immediately, securely, economically, and comfortably.
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

export default AboutUs;
