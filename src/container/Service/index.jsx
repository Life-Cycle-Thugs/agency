import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Image from "next/image";
import Man from "../../../public/assets/images/eftekhar.png";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { makeStyles } from "@mui/styles";
import Service from "../Home/Service";
import OurService from "./OurService";
import Strategy from "../../../public/assets/images/strategy.png";
import WebDesign from "../../../public/assets/images/webdesign-iocn.png";
import WebDevelopment from "../../../public/assets/images/web-development.png";
import UIUx from "../../../public/assets/images/ui-ux.png";
import ProjectTalk from "../AllProject/ProjectTalk";

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

export default function ServiceArea() {
  const classes = useStyles();

  return (
    <>
      {" "}
      <AllProjectItem>
        {" "}
        <Typography
          variant="h2"
          style={{
            fontSize: "55px",
            lineHeight: "60px",
            fontWeight: 700,
            textAlign: "center",
            marginTop: 100,
            marginBottom: 100,
            textTransform: "uppercase",

            color: "#000",
          }}
        >
          services
        </Typography>
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
        <OurService />
        <Grid container spacing={2} sx={{ marginTop: 20,marginBottom:20 }}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h2"
              color="text.secondary"
              sx={{
                fontSize: "48px",
                fontWeight: 500,
                color: "#091627",
                marginBottom: 3,
                marginRight: 15,
              }}
            >
              Discover own Identity with New Experience
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
              Vast advantage of technology has opened a new window of new
              oppertunirties. Attach your dreams with magical touch of
              Infomation and Technoplogy and reach at the last corner of the
              world with the best outcome of your own business and services. We
              are being committed standing by 24/7 only for you, only for your
              brand & business.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              src={Strategy}
              alt="WebDesign"
              width={535}
              height={325}
              style={{ borderRadius: 20 }}
            />
          </Grid>

          <Grid item xs={12} sm={6} sx={{ marginTop: 10 }}>
            <Image
              src={WebDesign}
              alt="WebDesign"
              width={535}
              height={325}
              style={{ borderRadius: 20 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ marginTop: 10 }}>
            <Typography
              variant="h2"
              color="text.secondary"
              sx={{
                fontSize: "48px",
                fontWeight: 500,
                color: "#091627",
                marginBottom: 3,
                // marginRight: 5,
                marginLeft: 15,
              }}
            >
              Web Design
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: "15px",
                fontWeight: 400,
                color: "#091627",

                marginLeft: 15,
              }}
            >
              Vast advantage of technology has opened a new window of new
              oppertunirties. Attach your dreams with magical touch of
              Infomation and Technoplogy and reach at the last corner of the
              world with the best outcome of your own business and services. We
              are being committed standing by 24/7 only for you, only for your
              brand & business.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h2"
              color="text.secondary"
              sx={{
                fontSize: "48px",
                fontWeight: 500,
                color: "#091627",
                marginBottom: 3,
                marginRight: 15,
              }}
            >
              Web Development
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
              Vast advantage of technology has opened a new window of new
              oppertunirties. Attach your dreams with magical touch of
              Infomation and Technoplogy and reach at the last corner of the
              world with the best outcome of your own business and services. We
              are being committed standing by 24/7 only for you, only for your
              brand & business.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              src={WebDevelopment}
              alt="WebDesign"
              width={535}
              height={325}
              style={{ borderRadius: 20 }}
            />
          </Grid>

          <Grid item xs={12} sm={6} sx={{ marginTop: 10 }}>
            <Image
              src={UIUx}
              alt="WebDesign"
              width={535}
              height={325}
              style={{ borderRadius: 20 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ marginTop: 10 }}>
            <Typography
              variant="h2"
              color="text.secondary"
              sx={{
                fontSize: "48px",
                fontWeight: 500,
                color: "#091627",
                marginBottom: 3,
                // marginRight: 5,
                marginLeft: 15,
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

                marginLeft: 15,
              }}
            >
              Vast advantage of technology has opened a new window of new
              oppertunirties. Attach your dreams with magical touch of
              Infomation and Technoplogy and reach at the last corner of the
              world with the best outcome of your own business and services. We
              are being committed standing by 24/7 only for you, only for your
              brand & business.
            </Typography>
          </Grid>
        </Grid>
        <ProjectTalk />
      </Container>
    </>
  );
}
