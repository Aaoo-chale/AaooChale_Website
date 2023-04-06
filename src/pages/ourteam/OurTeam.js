import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React from "react";
import Navbar from "../../component/navbar/Navbar";
import "./ourteam.css";
import LooterFooter from "../../component/lowerfooter/LooterFooter";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const OurTeam = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12}>
          <Item style={{ boxShadow: "none", backgroundColor: "#d4e4e5" }}>
            <Navbar />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item style={{ boxShadow: "none", backgroundColor: "#d4e4e5" }}>
            <h1 className="ourteam_heading">OurTeam</h1>
          </Item>
        </Grid>

        <Grid item xs={12}>
          <Item
            style={{
              boxShadow: "none",
              // height: "30vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={10}>
              <Item style={{ boxShadow: "none", backgroundColor: "aliceblue" }}>
                <p className="team_paragraph">The Team</p>
                <h1 className="team_heading">Meet our team of experts</h1>
                <p className="team_paragraph1">
                  To be the company our customers wantsus to be it, takes an
                  eletric group of <br />
                  passionate operators. Get to know the people leading the way
                  at Untitled{" "}
                </p>

                <Box sx={{ flexGrow: 1, marginTop: "70px" }}>
                  <Grid
                    container
                    spacing={2}
                    style={{ justifyContent: "space-around" }}
                    
                  >
                    <Grid item xs={3} >
                      <Item
                        style={{
                          boxShadow: "none",
                          backgroundColor: "aliceblue",
                        }}
                      >
                        <img src="ankit (3).jpg" className="team_img" />
                        <h1 className="team_name">Ankit Mishra</h1>
                        <p className="team_position">React Native Developer</p>
                      </Item>
                    </Grid>

                    <Grid item xs={3}>
                      <Item
                        style={{
                          boxShadow: "none",
                          backgroundColor: "aliceblue",
                        }}
                      >
                        <img src="ankit (2).jpg" className="team_img" />
                        <h1 className="team_name">Kishan Tripathi</h1>
                        <p className="team_position">Software Developer</p>
                      </Item>
                    </Grid>

                    <Grid item xs={3}>
                      <Item
                        style={{
                          boxShadow: "none",
                          backgroundColor: "aliceblue",
                        }}
                      >
                        <img src="ankit (2).jpg" className="team_img" />
                        <h1 className="team_name">Abhishek Jha</h1>
                        <p className="team_position">NodeJs Developer</p>
                      </Item>
                    </Grid>

                  </Grid>
                </Box>

                <Box
                  sx={{ flexGrow: 1, marginTop: "70px", marginBottom: "50px" }}
                >
                  <Grid
                    container
                    spacing={2}
                    style={{ justifyContent: "space-around" }}
                  >
                    <Grid item xs={3}>
                      <Item
                        style={{
                          boxShadow: "none",
                          backgroundColor: "aliceblue",
                        }}
                      >
                        <img src="ankit (3).jpg" className="team_img" />
                        <h1 className="team_name">Ankit Mishra</h1>
                        <p className="team_position">React Native Developer</p>
                      </Item>
                    </Grid>
                    <Grid item xs={3}>
                      <Item
                        style={{
                          boxShadow: "none",
                          backgroundColor: "aliceblue",
                        }}
                      >
                        <img src="ankit (2).jpg" className="team_img" />
                        <h1 className="team_name">Ankit Mishra</h1>
                        <p className="team_position">React Native Developer</p>
                      </Item>
                    </Grid>
                    <Grid item xs={3}>
                      <Item
                        style={{
                          boxShadow: "none",
                          backgroundColor: "aliceblue",
                        }}
                      >
                        <img src="ankit (2).jpg" className="team_img" />
                        <h1 className="team_name">Ankit Mishra</h1>
                        <p className="team_position">React Native Developer</p>
                      </Item>
                    </Grid>
                  </Grid>
                </Box>
              </Item>
            </Grid>
          </Item>
          <LooterFooter ht="100vh" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurTeam;
