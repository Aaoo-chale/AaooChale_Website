import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";

import Navbar from "../../component/navbar/Navbar";
import "./contact.css";
import LooterFooter from "../../component/lowerfooter/LooterFooter";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Contact = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const [eusername, seteusername] = useState("");
  const [eemail, seteemail] = useState("");
  const [epassword, setepassword] = useState("");
  const [ecpassword, setecpassword] = useState("");

  const [ucolor, setucolor] = useState("");
  const [ecolor, setecolor] = useState("");
  const [pcolor, setpcolor] = useState("");
  const [cpcolor, setcpcolor] = useState("");

  function validate() {
    if (username.length > 8) {
      seteusername("");
      setucolor("orange");
    } else {
      seteusername("username must be 8 letters long");
      setucolor("red");
    }

    if (email.includes("@gmail")) {
      seteemail("");
      setecolor("green");
    } else {
      seteemail("email should have @gmail");
      setecolor("red");
    }

    if (password.length > 10 && password.includes(".")) {
      setepassword("");
      setpcolor("green");
    } else {
      setepassword("mobile should be 10 letters long and it should have .");
      setpcolor("red");
    }

    if (password != "" && password == cpassword) {
      setecpassword("");
      setcpcolor("green");
    } else {
      setecpassword("write message must be 10 letters long");
      setcpcolor("red");
    }
  }
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
            <h1 className="contact_heading">Contact Us</h1>
          </Item>
        </Grid>

        <Grid item xs={12}>
          <Item
            style={{
              boxShadow: "none",
              backgroundColor: "aliceblue",
            }}
          >
            <Grid item xs={12}>
              <Item style={{ boxShadow: "none", backgroundColor: "white" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.7502263593715!2d80.98920211504222!3d26.784230683183072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be4ac0341a871%3A0x96e094c54c92ecc7!2sLulu%20Mall%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1679938418398!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "1%",
                  }}
                >
                  <Grid
                    className="contact_content"
                  >
                    <Item
                      style={{
                        height: "80vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "none",
                      }}
                    >
                      <div
                        className="row justify-content-center"
                        style={{ width: "100%" }}
                      >
                        <div className="col-md-8">
                          <input
                            type="text"
                            placeholder="username"
                            className="form-control"
                            style={{ borderColor: ucolor }}
                            value={username}
                            onChange={(e) => {
                              setusername(e.target.value);
                            }}
                          />
                          <p>{eusername}</p>
                          <input
                            type="text"
                            placeholder="email"
                            className="form-control"
                            style={{ borderColor: ecolor }}
                            value={email}
                            onChange={(e) => {
                              setemail(e.target.value);
                            }}
                          />
                          <p>{eemail}</p>
                          <input
                            type="text"
                            placeholder="mobile"
                            className="form-control"
                            style={{ borderColor: pcolor }}
                            value={password}
                            onChange={(e) => {
                              setpassword(e.target.value);
                            }}
                          />
                          <p>{epassword}</p>
                          <textarea
                            type="text"
                            placeholder="write message..."
                            className="form-control"
                            style={{ borderColor: cpcolor, height: "30vh" }}
                            value={cpassword}
                            onChange={(e) => {
                              setcpassword(e.target.value);
                            }}
                          />
                          <p>{ecpassword}</p>
                          <button className="btn_btn_btn1" onClick={validate}>
                            SUBMIT
                          </button>
                        </div>
                      </div>
                    </Item>
                  </Grid>
                </div>
              </Item>
            </Grid>
          </Item>
          <LooterFooter ht="100vh" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
