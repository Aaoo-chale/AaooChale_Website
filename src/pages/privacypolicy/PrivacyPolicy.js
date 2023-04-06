import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React from "react";
import Navbar from "../../component/navbar/Navbar";
import "./privacy.css";
import LooterFooter from "../../component/lowerfooter/LooterFooter";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const PrivacyPolicy = () => {
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
            <h1 className="privacy_heading">PrivacyPolicy</h1>
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
            <Grid item  className='privacy_content'>
              <Item
                style={{
                  boxShadow: "none",
                  backgroundColor: "white",
                  marginTop: "6%",
                  marginBottom: "6%",
                }}
              >
                <p
                  style={{
                    fontSize: "18px",
                    textAlign: "justify",
                    padding: "40px 40px",
                    lineHeight: 2,
                  }}
                  className="privacy_paragraph"
                >
                  This policy statement describes the privacy practices for this
                  website that AAOO CHALE owns and maintains. The only
                  information gathered by this website is covered by this
                  privacy notice. You’ll receive the following notifications:
                  <br />
                  <br />
                  What information may be used to identify you personally is
                  gathered from you through the website, as well as how and with
                  whom it could be shared.
                  <br />
                  <br />
                  The options that are open to you on how to utilize your data
                  <br />
                  <br />
                  the security measures put in place to prevent your information
                  from being misused.
                  <br />
                  <br />
                  how to fix any errors in the information that you find.
                  <br />
                  <br />
                  <h3 className="privacy_heading1">
                    how to fix any errors in the information that you find.
                  </h3>
                  <br />
                  The data gathered on this website is solely our property.{" "}
                  <br />
                  <br />
                  When you contact us directly, whether, by email or another
                  means, you willingly provide us with personal information. We
                  won’t provide this information to anyone for sale or rental.
                  In order to answer to you the reason you contacted us, we will
                  utilize the information you provide. Except as required to
                  carry out your request, we won’t disclose your information to
                  anybody outside of our company. <br />
                  <br />
                  If you don’t tell us not to, we could get in touch with you in
                  the future to let you know about deals, brand-new goods or
                  services, or modifications to our privacy statement. <br />
                  <br />
                  Google Analytics is used on this website to track user
                  behavior. Google Analytics collects anonymous visitor activity
                  and normal internet log information using “cookies,” which are
                  text files that are placed on your computer. Your IP address
                  and other anonymous information about how you use the website,
                  as produced by the cookie, is sent to Google. The AAOO
                  CHALEalone uses this data to create statistical reports on
                  website activity and assess how users utilize the site.
                  <br />
                  <br />
                  Google Analytics will never be used by us to monitor or gather
                  any personally identifying data. Your IP address won’t be
                  linked to any other information that Google stores. Neither
                  Google nor we will attempt to connect an IP address to a
                  computer user’s identity. Unless you voluntarily give such
                  information via a fill-in form on our website, we will not
                  link any data collected from this site with any personally
                  identifiable information from any source. <br />
                  <br />
                  Links to other websites are located on this webpage. Please be
                  aware that the content and privacy policies of such other
                  sites are not our responsibility. We advise our users to read
                  the privacy policies of any other website that collects
                  personally identifiable information and to be aware when they
                  leave our site.
                  <br />
                  <br />
                  <h3 className="privacy_heading1">Surveys & Contests</h3>
                  <br />
                  Our website occasionally asks users for information through
                  surveys or competitions. You have a choice as to whether or
                  not to engage in these surveys or competitions and, as a
                  result, divulge this information. Contact details (such as
                  name and shipping address), demographic data, and other
                  information may be required (such as zip code, and age level).
                  To contact the winners and distribute prizes, contact
                  information will be utilized. Information from the survey will
                  be used to track or enhance how well and how often users are
                  satisfied with both our website and our overall marketing
                  initiatives. <br />
                  <br />
                  <h3 className="privacy_heading1">Your Information Control and Access Rights</h3>
                  <br />
                  At any moment, you can choose not to receive any more
                  communication from us. By getting in touch with us at any time
                  via the phone number or contact form provided below, you may
                  do the following:
                  <br />
                  <br />
                  View whatever information we may have on you.
                  <br />
                  <br />
                  Change or update any information we have about you.
                  <br />
                  <br />
                  Please have whatever information we have on you deleted.
                  <br />
                  <br />
                  Speak out if you have any concerns about how we are using your
                  data.
                  <br />
                  <br />
                  <h3 className="privacy_heading1">Security</h3>
                  <br />
                  We take security measures to safeguard your information. Your
                  information is secure both online and offline when you submit
                  sensitive data via the website.
                  <br />
                  <br />
                  While we encrypt important information before sending it over
                  the internet, we also secure your information offline.
                  Personal information is only accessible to staff members who
                  require it to carry out a specific task (like customer support
                  or billing). We keep personally identifiable information on
                  computers and servers in a secure setting.
                  <br />
                  <br />
                  On our website, some of our business partners could utilize
                  cookies (for example, advertisers). However, we are unable to
                  access or manage these cookies.
                  <br />
                  <br />
                  If you believe that we are not adhering to this privacy statement, please call us at …………… right away……
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

export default PrivacyPolicy;
