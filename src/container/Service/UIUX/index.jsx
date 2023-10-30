import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { makeStyles } from "@mui/styles";
import UiUX from "../../../../public/assets/images/uiux/ui-ux.png";

import ProjectTalk from "@/container/AllProject/ProjectTalk";
import PricePlan from "@/container/prices";
import Payment from "@/Payment";
import UiUXProcess from "./ui-ux-process";
import UIUXTechnology from "./UIUXTechnology";

const useStyles = makeStyles((theme) => ({
  circleButton: {
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3) !important",
    marginBottom: 100,
    cursor: "pointer", // Add cursor pointer for better UX
  },
  arrowIcon: {
    fontSize: "36px",
    color: "black",
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  padding: "80px 100px",

  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "1px solid #F2F4F6",
  borderRadius: 20,
  background: "linear-gradient(0deg, #E7EBEB, #E7EBEB) ",
}));

const scrollToContent = () => {
  // Smooth scroll to the content section when the button is clicked
  const contentSection = document.getElementById("project-talk-button");
  if (contentSection) {
    contentSection.scrollIntoView({ behavior: "smooth" });
  }
};

const AllProjectItem = styled(Paper)(({ theme }) => ({
  padding: "5px 20px",
  textAlign: "center",
  marginBottom: -40,
  background: "#E7EBEB",
  boxShadow: "none",
}));

export default function UiUx() {
  const classes = useStyles();

  return (
    <>
      <AllProjectItem>
        <Container>
          <Typography
            variant="h2"
            style={{
              fontSize: "40px",
              lineHeight: "60px",
              fontWeight: 500,
              textAlign: "left",
              marginTop: 100,

              textTransform: "uppercase",
              color: "#000",
            }}
          >
            Ux/Ui Design Services
          </Typography>
          <Typography
            variant="h2"
            style={{
              fontSize: "16px",
              fontWeight: 400,
              textAlign: "left",
              marginTop: 30,

              textTransform: "uppercase",
              color: "#000",
            }}
          >
            Experts in: JavaScript, TypeScript, .NET, Node.js, NestJS and
            ReactJS.
          </Typography>
          <Grid container spacing={2} justify="flex-start">
            <Grid item>
              <Button
                variant="contained"
                style={{
                  marginTop: 30,
                  background: "#F14E4E",
                  padding: "10px 30px",
                  borderRadius: "15px",
                  fontSize: "16px",
                  marginBottom: 80,
                }}
              >
                Request a Proposal
              </Button>
            </Grid>
          </Grid>
        </Container>
      </AllProjectItem>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <IconButton
          className={classes.circleButton}
          onClick={scrollToContent} // Scroll to content when button is clicked
        >
          <ArrowDownwardIcon className={classes.arrowIcon} />
        </IconButton>
      </div>
      <Container>
        <Grid container spacing={2} sx={{ marginTop: 20, marginBottom: 20 }}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h2"
              color="text.secondary"
              sx={{
                fontSize: "48px",
                fontWeight: 500,
                color: "#091627",
                marginBottom: 3,
                marginRight: 2,
              }}
            >
              Ux/Ui Design
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: "15px",
                fontWeight: 400,
                color: "#091627",
                marginRight: 15,
              }}
            >
              A professional, eye-catching, responsive and user-friendly website
              must bring your brand to life. Your website is just like a
              showcase where you will put everything about your brand or
              business so that all the potential customers and clients can
              interact as they like. Start a good business journey with your
              customers and clients with just a click. Are you ready?
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Responsive" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Speed Optimized" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Brand Consistent" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Cross-Browser Compatible" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              src={UiUX}
              alt="UiUX"
              width={570}
              height={420}
              style={{ borderRadius: 20 }}
            />
          </Grid>
        </Grid>

        <UiUXProcess />
        <UIUXTechnology />
        <PricePlan />
        <Payment />
        <ProjectTalk />
      </Container>
    </>
  );
}
