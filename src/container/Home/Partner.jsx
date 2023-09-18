import React from "react";
import Slider from "react-slick";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Partner = () => {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: "16px", marginTop: "16px" }}>
        <Typography variant="h4">Single Item</Typography>
        <Slider {...settings}>
          <div>
            <Paper
              elevation={3}
              style={{ padding: "20px", textAlign: "center" }}
            >
              <Typography variant="h3">1</Typography>
            </Paper>
          </div>
          <div>
            <Paper
              elevation={3}
              style={{ padding: "20px", textAlign: "center" }}
            >
              <Typography variant="h3">2</Typography>
            </Paper>
          </div>
          <div>
            <Paper
              elevation={3}
              style={{ padding: "20px", textAlign: "center" }}
            >
              <Typography variant="h3">3</Typography>
            </Paper>
          </div>
          <div>
            <Paper
              elevation={3}
              style={{ padding: "20px", textAlign: "center" }}
            >
              <Typography variant="h3">4</Typography>
            </Paper>
          </div>
          <div>
            <Paper
              elevation={3}
              style={{ padding: "20px", textAlign: "center" }}
            >
              <Typography variant="h3">5</Typography>
            </Paper>
          </div>
          <div>
            <Paper
              elevation={3}
              style={{ padding: "20px", textAlign: "center" }}
            >
              <Typography variant="h3">6</Typography>
            </Paper>
          </div>
        </Slider>
      </Paper>
    </Container>
  );
};

export default Partner;
