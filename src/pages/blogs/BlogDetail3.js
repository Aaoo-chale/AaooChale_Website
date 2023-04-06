import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React from "react";
import "./blogs.css";
import LooterFooter from "../../component/lowerfooter/LooterFooter";
import Navbar from "../../component/navbar/Navbar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const BlogDetai3 = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12}>
          <Item style={{ boxShadow: "none", backgroundColor: "#d4e4e5" }}>
            <Navbar />
          </Item>
        </Grid>
        <Grid item xs={12} style={{}}>
          <img src="carpool2.png" style={{ width: "100%", height: "70vh" }} />
        </Grid>

        <Grid item xs={12}>
          <Item
            style={{
              boxShadow: "none",
              backgroundColor: "aliceblue",

              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid className="blogdetail3_content">
              <Item
                style={{
                  boxShadow: "none",
                  backgroundColor: "white",
                  marginTop: "-3%",
                }}
              >
                <p className="blogdetail3_heading">
                  How to Save Money by Carpooling: A Comprehensive Guide
                </p>
                <p>By akhilesh | November 6, 2020</p>
                <h2 className="blogdetail3_heading1">Introduction</h2>
                <p className="blogdetai3_paragraph">
                  If you are looking to save money on your daily commute,
                  carpooling is an excellent solution. Carpooling is a shared
                  ride where people who are traveling in the same direction and
                  at the same time come together and share a ride in one car.
                  Carpooling not only saves you money but also helps reduce
                  traffic congestion and lowers carbon emissions. In this
                  article, we will guide you through the benefits of carpooling
                  and the steps you can take to start carpooling today.
                </p>
                <img src="feature2.png" className="blogdeatils_img" />
                <h2 className="blogdetail3_heading1">Benefits of Carpooling</h2>
                <p className="blogdetai3_paragraph">
                  1. Saves Money: Carpooling allows you to split the cost of
                  gas, tolls, and parking with other passengers. This means you
                  can save money on your daily commute and use it for other
                  important things.
                  <br />
                  <br />
                  2. Reduces Traffic Congestion: Carpooling helps reduce traffic
                  congestion on the roads, especially during peak hours. This
                  means less time stuck in traffic and more time for you to do
                  other things.
                  <br />
                  <br />
                  3. Lowers Carbon Emissions: Carpooling reduces the number of
                  cars on the road, which means fewer carbon emissions and a
                  healthier environment.
                  <br />
                  <br />
                  4. Social Benefits: Carpooling can be a great way to meet new
                  people and make friends. You can also use the time in the car
                  to catch up on work or relax and read a book.
                </p>
                <h2 className="blogdetail3_heading1">
                  Steps to Start Carpooling
                </h2>
                <p className="blogdetai3_paragraph">
                  1. Find Carpooling Partners: The first step to start
                  carpooling is to find people who are traveling in the same
                  direction and at the same time as you. You can ask your
                  colleagues, and neighbors, or use a carpooling app like Aaoo
                  Chale to find carpooling partners.
                  <br />
                  <br />
                  2. Set Ground Rules: Before starting carpooling, it's
                  essential to set some ground rules with your carpooling
                  partners. This includes things like punctuality, smoking, food
                  and drinks in the car, and music preferences.
                  <br />
                  <br />
                  3. Determine the Route and Schedule: Once you have found your
                  carpooling partners, you need to determine the route and
                  schedule. This includes deciding on pickup and drop-off
                  locations, departure and arrival times, and how often you will
                  carpool.
                  <br />
                  <br />
                  4. Share the Cost: It's important to decide how you will split
                  the cost of gas, tolls, and parking. This can be done by
                  dividing the total cost equally among all passengers or by
                  using a mileage tracker app like Splitwise or Venmo.
                  <br />
                  <br />
                  5. Be Safe and Comfortable: When carpooling, it's essential to
                  ensure your safety and comfort. This includes wearing your
                  seatbelt, keeping your belongings secure, and adjusting the
                  temperature and music to your preference.
                </p>
                <h2 className="blogdetail3_heading1">
                  Tips for Successful Carpooling
                </h2>
                <p className="blogdetai3_paragraph">
                  1. Be Punctual: Being on time is crucial when carpooling. Make
                  sure you are ready to leave at the designated time and inform
                  your carpooling partners if you are running late.
                  <br />
                  <br />
                  2. Be Flexible: Carpooling may require some flexibility in
                  your schedule and route. Be open to adjusting your schedule or
                  route if it's more convenient for your carpooling partners.
                  <br />
                  <br />
                  3.Be Respectful: Respect your carpooling partners and their
                  preferences. This includes being considerate of their music
                  and temperature preferences, and not smoking or eating in the
                  car without their consent.
                  <br />
                  <br />
                  4 .Communicate: Communication is key when carpooling. Keep
                  your carpooling partners informed of any changes in your
                  schedule, route, or payment arrangements.
                  <br />
                  <br />
                  5. Have Fun: Carpooling can be a great way to socialize and
                  meet new people. Enjoy the ride, and use the time in the car
                  to catch up on work, relax, or have a conversation.
                </p>
                <h2 className="blogdetail3_heading1">Conclusion</h2>
                <p className="blogdetai3_paragraph">
                  In conclusion, carpooling is an easy and effective way to save
                  money on your daily commute while also reducing traffic
                  congestion and carbon emissions. By finding carpooling
                  partners, setting ground rules, and sharing the cost, you can
                  enjoy a safe and comfortable ride to work or school. Remember
                  to be punctual, respectful, and communicative, and have fun
                  while carpooling. With these tips and guidelines, by using
                  Aaoo Chale App you can start carpooling today and enjoy the
                  benefits of a more efficient and sustainable commute.
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

export default BlogDetai3;
