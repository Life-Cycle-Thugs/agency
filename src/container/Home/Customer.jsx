import React, { useState } from "react";
import Slider from "react-slick";
import {
  Container,
  Typography,
  Card,
  CardContent,
  IconButton,
  Box,
  Rating,
  CardActionArea,
  CardMedia,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import image1 from "../../../public/assets/images/customer/customer-1.png";
import image2 from "../../../public/assets/images/customer/customer-2.png";
import image3 from "../../../public/assets/images/customer/customer-3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const StyledCarouselItem = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
});
const CenteredBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "120px", // Adjust the width as needed
  height: "120px", // Adjust the height as needed
});

const StarRating = ({ rating }) => {
  return (
    <Box display="flex" alignItems="center">
      <Rating name="customized-icons" defaultValue={rating} readOnly max={5} />
    </Box>
  );
};

const Customer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (index) => {
      if ((index + 1) % 3 === 0) {
        setActiveIndex(index);
      }
    },
    prevArrow: (
      <IconButton>
        <NavigateBeforeIcon />
      </IconButton>
    ),
    nextArrow: (
      <IconButton>
        <NavigateNextIcon />
      </IconButton>
    ),
  };

  const slides = [
    {
      image: image1,
      name: "James Pattinson",
      rating: 5, // Rating out of 5
      speech:
        "“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”",
    },
    {
      image: image2,
      name: "Greg Stuart",
      rating: 4, // Rating out of 5
      speech:
        "“Vestibulum, cum nam non amet consectetur morbi aenean condimentum eget. Ultricies integer nunc neque accumsan laoreet. Viverra nibh ultrices.”",
    },
    {
      image: image3,
      name: "Trevor Mitchell",
      rating: 3, // Rating out of 5
      speech:
        "“Ut tristique viverra sed porttitor senectus. A facilisis metus pretium ut habitant lorem. Velit vel bibendum eget aliquet sem nec, id sed. Tincidunt.”",
    },
    {
      image: image3,
      name: "Atik foysal",
      rating: 4, // Rating out of 5
      speech: "lorem ipsum dolor sit amet l",
    },
  ];

  return (
    <Container>
      <Typography
        variant="h2"
        style={{
          fontSize: "48px",
          lineHeight: "60px",
          fontWeight: 500,
          textAlign: "center",
          marginTop: 100,
          marginBottom: 50,
        }}
      >
        What Our Customer Say?
      </Typography>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <StyledCarouselItem key={index}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Card
                  sx={{
                    maxWidth: 345,
                    border: "1px solid",
                    borderRadius: "25px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardActionArea>
                    <Box sx={{ height: 120, width: 120 }}>
                      <Image
                        src={slide.image}
                        alt={slide.text}
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                            alignItems: "center",
                          marginLeft:"80%"
                        }}
                      />
                    </Box>
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontSize: 17, fontWeight: 700 }}
                      >
                        {slide.name}
                      </Typography>
                      <Typography sx={{ textAlign: "center",marginLeft:'30%' }}>
                        <StarRating rating={slide.rating}  />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {slide.speech}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </StyledCarouselItem>
        ))}
      </Slider>
    </Container>
  );
};

export default Customer;
