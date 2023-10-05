import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Box,
  Container,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Image from "next/image";
import FaqBg from "../../../public/assets/images/faq.png";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { makeStyles } from "@mui/styles";
import { useForm, Controller } from "react-hook-form";
import FaqData from "./FaqData";

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
  //   width:auto,

  boxShadow: "none",
  background: `url("/assets/images/faq.svg")`, // Corrected background property
}));

export default function Faq() {
  const classes = useStyles();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here
  };

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

            color: "#fff",
          }}
        >
          Faq
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
      <Container style={{ marginBottom: 500 }}>
        <FaqData />
      </Container>
      <div style={{ marginTop: 600, background: "#ECEFF4", paddingTop: 50 }}>
        <Container>
          <Typography
            variant="h2"
            style={{
              fontSize: "48px",
              lineHeight: "60px",
              fontWeight: 700,
              textAlign: "center",
              marginTop: 100,
              marginBottom: 100,
              textTransform: "capitalize",
              color: "#000",
            }}
          >
            Not Enough? Still, Do you <br /> Have a question?
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="outlined-basic"
                      label="Enter Your Name"
                      variant="outlined"
                      fullWidth
                      error={!!errors.name}
                      helperText={errors.name && errors.name.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="outlined-basic"
                      label="Enter your Email"
                      variant="outlined"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email && errors.email.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="message"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Message is required" }}
                  render={({ field }) => (
                    <TextareaAutosize
                      {...field}
                      id="outlined-basic"
                      placeholder="Enter your Message"
                      variant="outlined"
                      style={{
                        width: "100%",
                        minHeight: "150px",
                        border: "1px solid gray",
                        padding: "8px",
                      }}
                      fullWidth
                      error={!!errors.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    id="submit-contact"
                    type="submit"
                    variant="contained"
                    style={{
                      background: "#F14E4E",
                      marginTop: 15,
                      marginBottom: 15,
                      padding: "15px 55px",
                      borderRadius: "35px",
                    }}
                  >
                    Submit Request
                  </Button>
                </div>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    </>
  );
}
