import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, Typography } from "@mui/material";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#091627",

  ...theme.typography.body2,
  padding: theme.spacing(2),
 
  color: "white",
  boxShadow: "none",
}));

export default function Footer() {
  return (
    <>
      <footer
        style={{ background: "#091627", color: "white ", padding: "60px" }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              {" "}
              <Item>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "12px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    marginBottom: "15px",
                  }}
                >
                  FEEL FREE TO CONTACT WITH US
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "20px",
                    lineHeight: "38px",
                    fontWeight: "600",
                    marginBottom: "15px",
                  }}
                >
                  +88 01718925964
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    fontSize: "18px",
                    lineHeight: "27px",
                    fontWeight: "400",
                    marginBottom: "15px",
                  }}
                >
                  sdrinkukhan@magurait.com
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    fontSize: "18px",
                    lineHeight: "27px",
                    fontWeight: "400",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Item>
                {" "}
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    fontWeight: "600",
                    marginBottom: "55px",
                  }}
                >
                  Navigation
                </Typography>
                <Link
                  href="/"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "20px",
                      lineHeight: "30px",
                      fontWeight: "400",
                      marginBottom: "15px",
                    }}
                  >
                    Home
                  </Typography>
                </Link>
                <Link
                  href="/service"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "20px",
                      lineHeight: "30px",
                      fontWeight: "400",
                      marginBottom: "15px",
                    }}
                  >
                    Service
                  </Typography>
                </Link>
                <Link
                  href="/about"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "20px",
                      lineHeight: "30px",
                      fontWeight: "400",
                      marginBottom: "15px",
                    }}
                  >
                    About Us
                  </Typography>
                </Link>
                <Link
                  href="/contact"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "20px",
                      lineHeight: "30px",
                      fontWeight: "400",
                      marginBottom: "15px",
                    }}
                  >
                    Contact Us
                  </Typography>
                </Link>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Item>
                {" "}
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    fontWeight: "600",
                    marginBottom: "55px",
                  }}
                >
                  Quick Links
                </Typography>
                <Link
                  href="/services/web-design-service"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "20px",
                      lineHeight: "30px",
                      fontWeight: "400",
                      marginBottom: "15px",
                    }}
                  >
                    Web Design
                  </Typography>
                </Link>
                <Link
                  href="/services/web-development-service"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "20px",
                      lineHeight: "30px",
                      fontWeight: "400",
                      marginBottom: "15px",
                    }}
                  >
                    Web Development
                  </Typography>
                </Link>
                <Link
                  href="/services/ui-ux-service"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "20px",
                      lineHeight: "30px",
                      fontWeight: "400",
                      marginBottom: "15px",
                    }}
                  >
                    Ux/Ui Design
                  </Typography>
                </Link>
                <Typography
                  variant="body2"
                  style={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    marginBottom: "15px",
                  }}
                >
                  Request a Proposal
                </Typography>
              </Item>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Item>
                {" "}
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    fontWeight: "600",
                    marginBottom: "55px",
                  }}
                >
                  Customer service
                </Typography>
                <Link
                  href="/privacy-policy"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "20px",
                      lineHeight: "30px",
                      fontWeight: "400",
                      marginBottom: "15px",
                    }}
                  >
                    Privacy Policy
                  </Typography>
                </Link>
                <Typography
                  variant="body2"
                  style={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    marginBottom: "15px",
                  }}
                >
                  Terms & Conditions
                </Typography>
                <Link
                  href="/faq"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "20px",
                      lineHeight: "30px",
                      fontWeight: "400",
                      marginBottom: "15px",
                    }}
                  >
                    FAQ
                  </Typography>
                </Link>
                <Link
                  href="/sign-up"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "20px",
                      lineHeight: "30px",
                      fontWeight: "400",
                      marginBottom: "15px",
                    }}
                  >
                    Register
                  </Typography>
                </Link>
              </Item>
            </Grid>
          </Grid>
        </Container>
        <hr />
        <p style={{ textAlign: "center" }}>
          © 2023 Design By Sd Rinku Khan. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
