import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Box,
  Container,
  TextField,
  Typography,
  TextareaAutosize,
  Button,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Image from "next/image";
import call from "../../../public/assets/images/call.png";
import vec from "../../../public/assets/images/Vector.png";
import loc from "../../../public/assets/images/loc.png";
import { useForm, Controller } from "react-hook-form";

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
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const responsiveCardStyle = {
  maxWidth: 345,
  padding: "25px 10px",
    background: "#ECEFF4",
  
};
const scrollToContent = () => {
  // Smooth scroll to the content section when the button is clicked
  const contentSection = document.getElementById("submit-contact");
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
export default function Contact() {
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
      <AllProjectItem>
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
          contact us
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
            <Grid xs={12} md={4}>
              <Card
                sx={responsiveCardStyle} // Apply responsive styles
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={call}
                    alt="customer"
                    style={{ height: "41px", width: "41px" }}
                  />
                </div>

                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      fontWeight: 600,
                      fontSize: 24,
                    }}
                  >
                    Call Us 24/7
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 400,
                      fontSize: 20,
                      textAlign: "center",
                      color: "#616161",
                    }}
                  >
                    (+88) 01718-925964
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} md={4}>
              <Card
                sx={responsiveCardStyle} // Apply responsive styles
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={vec}
                    alt="vec"
                    style={{
                      height: "41px",
                      width: "41px",
                    }}
                  />
                </div>

                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      fontWeight: 600,
                      fontSize: 24,
                    }}
                  >
                    Write Us Anytime
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 400,
                      fontSize: 20,
                      textAlign: "center",
                      color: "#616161",
                    }}
                  >
                    sdrinkukhan@gmail.com
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} md={4}>
              <Card
                sx={responsiveCardStyle} // Apply responsive styles
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={loc}
                    alt="loc"
                    style={{ height: "41px", width: "41px" }}
                  />
                </div>

                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      fontWeight: 600,
                      fontSize: 24,
                    }}
                  >
                    We are Here
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 400,
                      fontSize: 20,
                      textAlign: "center",
                      color: "#616161",
                    }}
                  >
                    Dhanmondi, Dhaka, BD
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Typography
          variant="h2"
          style={{
            fontSize: "48px",
            lineHeight: "60px",
            fontWeight: 500,
            textAlign: "center",
            marginTop: 100,
            marginBottom: 100,
            color: "#F14E4E",
          }}
        >
          Send Us <span style={{ color: "black" }}>a Message​</span>
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
                name="address"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="outlined-basic"
                    label="Enter your Address"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="subject"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="outlined-basic"
                    label="Enter your subject"
                    variant="outlined"
                    fullWidth
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
                    borderRadius: "15px",
                  }}
                >
                  Submit
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
