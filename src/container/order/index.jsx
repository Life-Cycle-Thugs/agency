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
import WebDesign from "../../../public/assets/images/web-design.png";

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
export default function Order() {
  const classes = useStyles();
  const [quantity, setQuantity] = React.useState(1); // Initialize quantity with 1

  // ...

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
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
            textTransform: "capitalize",
          }}
        >
          Order Details
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
            <Grid item xs={12} md={6}>
              <Item>
                <Box
                  sx={{
                    height: "100%", // This makes the image container responsive
                    width: "100%", // This makes the image container responsive
                    borderRadius: "10px",
                  }}
                >
                  <Image
                    src={WebDesign}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                  {/* Make sure the image itself is also responsive */}
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 500, fontSize: "62px" }}
              >
                Website Design
              </Typography>
              <br />
              <Typography
                variant="h5"
                sx={{ fontWeight: 300, fontSize: "20px" }}
              >
                Highly scalable platforms and well tested web apps that are
                ready to handle millions of users daily.
              </Typography>
              <br />

              <br />
              <br />
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, fontSize: "30px" }}
              >
                $208.00
              </Typography>
              <Typography>
                {" "}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <span
                    style={{ marginRight: 15, fontWeight: 600, fontSize: 33 }}
                  >
                    QUANTITY
                  </span>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "grey",
                      color: "white",
                      fontWeight: "bold",
                    }}
                    onClick={decrementQuantity}
                  >
                    -
                  </Button>
                  <Typography variant="h6" sx={{ margin: "0 10px" }}>
                    {quantity}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: " #F14E4E",
                      color: "white",
                      fontWeight: "bold",
                    }}
                    onClick={incrementQuantity}
                  >
                    +
                  </Button>
                </div>
              </Typography>
              <Typography>
                {" "}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "grey",
                      color: "white",
                      fontWeight: "bold",
                      padding: "15px",
                    }}
                  >
                    Add to cart
                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: " #F14E4E",
                      color: "white",
                      fontWeight: "bold",
                      marginLeft: 5,
                      padding: "15px",
                    }}
                  >
                    ORDER now
                  </Button>
                </div>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
