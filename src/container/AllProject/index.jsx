import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Image from "next/image";
import Project1 from "../../../public/assets/images/project.png";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  circleButton: {
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
    marginBottom: 100,
    cursor: "pointer", // Add cursor pointer for better UX
  },
  arrowIcon: {
    fontSize: "36px",
    color: "black",
  },
}));

const scrollToContent = () => {
  // Smooth scroll to the content section when the button is clicked
  const contentSection = document.getElementById("loading-button");
  if (contentSection) {
    contentSection.scrollIntoView({ behavior: "smooth" });
  }
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));
const AllProjectItem = styled(Paper)(({ theme }) => ({
  padding: "5px 20px",
  textAlign: "center",
  marginBottom: -40,
  background: "#E7EBEB",
  boxShadow: "none",
}));

export default function AllProject() {
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
            marginBottom: 60,
          }}
        >
          All Projects
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
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Link href="#">
                <Image src={Project1} alt="Project" width={425} height={255} />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Link href="#">
                <Image src={Project1} alt="Project" width={425} height={255} />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Link href="#">
                <Image src={Project1} alt="Project" width={425} height={255} />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Link href="#">
                <Image src={Project1} alt="Project" width={425} height={255} />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Link href="#">
                <Image src={Project1} alt="Project" width={425} height={255} />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Link href="#">
                <Image src={Project1} alt="Project" width={425} height={255} />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Link href="#">
                <Image src={Project1} alt="Project" width={425} height={255} />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Link href="#">
                <Image src={Project1} alt="Project" width={425} height={255} />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Link href="#">
                <Image src={Project1} alt="Project" width={425} height={255} />
              </Link>
            </Item>
          </Grid>
        </Grid>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            id="loading-button"
            variant="contained"
            style={{
              marginTop: 30,
              marginBottom: 30,
              background: "#F14E4E",
              padding: "10px 30px",
              borderRadius: "15px",
              fontSize: "23px",
              alignItems: "center",
            }}
          >
            LOADING MORE
          </Button>
        </div>
      </Container>
    </>
  );
}
