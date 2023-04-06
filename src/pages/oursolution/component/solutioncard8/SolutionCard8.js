import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./solutioncard8.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SolutionCard8() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid>
        <Grid item xs={12} style={{ boxShadow: "none" }}>
          <Item
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
              boxShadow: "none",
            }}
          >
            <Grid item  className='fac_content'>
              <Item style={{ boxShadow: "none" }}>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Q: What is carpooling?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="faq_para">
                          A: Carpooling is when two or more people share a ride
                          in one car to travel to the same destination.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Q: How can carpooling save my money?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="faq_para">
                          A: By sharing the cost of gas, tolls, and parking,
                          carpooling can significantly reduce your
                          transportation expenses.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Q: What are the benefits of carpooling?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="faq_para">
                          A: Carpooling can save you money, reduce your
                          environmental impact, and provide a more comfortable
                          and social way to commute.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Q: How can I Share ride on Aaoo Chale App?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="faq_para">
                          A: You can create sharing ride with carpooling partner
                          follow the steps: -When you open the Aaoo Chale app
                          and then tap on “Share Ride”, the app will ask for
                          your pickup and drop-off location via GPS; after
                          confirming the route, you can also select stopover
                          city.
                          <br /><br />
                          - Choose your traveling date with the time of pickup
                          <br /><br />
                          - Select Vehicle for the ride If you're a first-time
                          user, add the vehicle details.
                          <br /><br />
                          - Specify the pickup capacity of passengers you can
                          accommodate in your vehicle
                          <br /><br />
                          - Confirm your per-passenger charges, or adjust/select
                          the recommended price in the app.
                          <br /><br />
                          - To inform your passengers you can also write your
                          message in the message box. <br /><br />
                          - Publish your ride by tapping on the 'Publish Ride'
                          button.
                          <br /><br />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Q: How do I find carpooling partners?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="faq_para">
                          A: You can find carpooling partners through Aaoo Chale
                          App. To find a carpooling partner follow the steps:{" "}
                          <br /><br />
                          -When you open the Aaoo Chale app and tap on 'Book
                          Ride', the app will ask for your pickup and drop-off
                          location using GPS.
                          <br /><br />
                          -Select no of seat to book with the date then search;{" "}
                          <br /><br />
                          -Choose an available carpooling partner accordingly
                          <br /><br />
                          -Confirm booking by tapping Book.
                          <br /><br />
                          If you’re getting the message “No ride for this day”,
                          you can set an alert by tapping “Create Alert”.<br />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Q: Can i schedule a trip request?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="faq_para">
                          A: "Yes, you can schedule a trip request with Aaoo
                          Chale! Our app allows you to plan your carpool ride in
                          advance, so you can travel with peace of mind."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        Q: Can i cancel my ride after booking it?"
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="faq_para">
                          A: "Yes, you can cancel your ride after booking it on
                          Aaoo Chale. However, please note that there may be a
                          cancellation fee depending on how close to the pickup
                          time you cancel the ride."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                        Q: How trip fares are calculated in Aaoo Chale App?
                      </button>
                    </h2>
                    <div
                      id="collapseEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingEight"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="faq_para">
                          A: The fare for a trip is determined by several
                          factors, such as the base fare, distance traveled, and
                          time spent on the trip. The specific tariff for a trip
                          may vary depending on the city, type of vehicle, and
                          time of day.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
