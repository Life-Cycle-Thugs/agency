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
import Goal from "./Goal";
import Customer from "../Home/Customer";
import Partner from "../Home/Partner";

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
  const contentSection = document.getElementById("loading-button");
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

export default function AboutUS() {
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

            color: "#F14E4E",
          }}
        >
          about us
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
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={7}>
              <p style={{ fontSize: "54px" }}>
                About
                <br />
                <span style={{ color: "#F14E4E" }}>Eftekhar </span>
                joy
              </p>

              <p style={{ fontSize: "20px", fontWeight: 200, color: "gray" }}>
                {/* <br /> */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia doloribus adipisci molestias, voluptatibus animi vero
                fuga odit, praesentium perferendis, commodi illo expedita dolor
                assumenda voluptas quisquam! Voluptates libero earum unde culpa
                dolor? Aut perferendis, asperiores, aliquid provident libero
                nesciunt doloribus unde, esse eos ad consectetur voluptas
                explicabo est molestias numquam aperiam. Debitis ad odit dolorem
                assumenda soluta suscipit amet eos reprehenderit, repudiandae
                inventore, quo sint illo fugiat magnam id tempore impedit ab
                animi nihil eum aut. Temporibus numquam eaque nesciunt
                voluptatem voluptatum cumque, eius exercitationem dolore
                tempora. Voluptates dolorem perferendis esse temporibus
                molestiae veniam rerum et saepe autem. Doloribus, neque!
              </p>
              <Button
                variant="contained"
                style={{
                  background: "#F14E4E",
                  marginTop: 15,
                    marginBottom: 15,
                    padding: "15px 25px",
                  borderRadius:"15px"
                }}
              >
               GET IN TOUCH
              </Button>
            </Grid>
            <Grid item xs={12} lg={1}></Grid>

            <Grid item lg={4} xs={12}>
              <Box
                sx={{height:530,width:530}}
                component={"img"}
                src={"/assets/images/eftekhar.png"}
                alt="signup"
              />
            </Grid>
          </Grid>
        </Box>
        <Goal />
        <Partner/>
        <Customer/>
      </Container>
    </>
  );
}
