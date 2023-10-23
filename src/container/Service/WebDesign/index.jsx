import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Image from "next/image";

import IconButton from "@mui/material/IconButton";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { makeStyles } from "@mui/styles";

import WebDesign from "../../../../public/assets/images/webdesign/web-design.png";
import CreativeDesign from "../../../../public/assets/images/webdesign/creative.png";
import Innovative from "../../../../public/assets/images/webdesign/innovation.png";
import Elevated from "../../../../public/assets/images/webdesign/elevrate.png";
import Custom from "../../../../public/assets/images/webdesign/custom.png";

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

export default function WebDesignServices() {
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
            web design services
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
        {/* <OurService /> */}
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
              Award Winning Website Design & User Experience
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
              Today, designing a website goes far beyond aesthetics. <br />{" "}
              <br /> At Eftekhar Joy, we create websites that not only look
              good, but also function properly and rank highly in search
              results. Our team of expert web designers plan, conceptualize, and
              organize content and graphics to create robust, responsive
              websites. Our award-winning website designs guide users through
              the online customer journey to create an elevated user experience.
              Website design can have a huge impact on your performance on
              search engines like Google and Bing. Ensure that visitors and
              customers can find your website first with an optimized,
              award-winning website from Eftekhar Joy.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              src={WebDesign}
              alt="WebDesign"
              width={570}
              height={420}
              style={{ borderRadius: 20 }}
            />
          </Grid>

          <Grid item xs={12} sm={6} sx={{ marginTop: 20 }}>
            <Image
              src={CreativeDesign}
              alt="CreativeDesign"
              width={570}
              height={420}
              style={{ borderRadius: 20 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ marginTop: 20 }}>
            <Typography
              variant="h2"
              color="text.secondary"
              sx={{
                fontSize: "46px",
                fontWeight: 500,
                color: "#091627",
                marginBottom: 3,
                // marginRight: 5,
                marginLeft: 15,
              }}
            >
              Why Website Design Matters?
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: "15px",
                fontWeight: 400,
                color: "#091627",
                textAlign: "justify",
                marginLeft: 15,
              }}
            >
              <ul>
                <li>
                  {" "}
                  As a business, an online presence is essential – especially
                  with more than half of the world's population active on the
                  internet.
                </li>
                <li>
                  {" "}
                  Nowadays people shop online, search for services online, talk
                  to family and friends online, and expect every business they
                  encounter to have a fast, functional website.
                </li>
                <li>
                  {" "}
                  A sleek, responsive website sends the right message to
                  customers. It shows that you know that you are doing and are a
                  business they can trust to get the job done.
                </li>
                <li>
                  {" "}
                  Great website design and user experience facilitate brand
                  reputation and loyalty. People want to visit websites that
                  help them achieve their goals and leave them feeling
                  satisfied.
                </li>
              </ul>
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
                marginTop: 20,
                marginBottom: 3,
                marginRight: 15,
              }}
            >
              Innovative Design
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
              As one of the best rated website design agencies in the Canada,
              Eftekhar Joy strives to provide our clients with an elevated site
              that functions flawlessly and puts design first.
              <br /> <br />
              Eftekhar Joy, provides you with a website that is not only
              responsive, intuitive, and optimized across the web – we also
              create a beautiful design that elevates your brand and is
              something you can be proud to show to customers and partners.
              <br /> <br />
              Our designers deliver customer-first creative solutions to advance
              business objectives and resonate with audiences. Each design
              touchpoint helps further your goals and guide customers on a
              journey to connect with your brand.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ marginTop: 20 }}>
            <Image
              src={Innovative}
              alt="Innovative"
              width={570}
              height={420}
              style={{ borderRadius: 20 }}
            />
          </Grid>

          <Grid item xs={12} sm={6} sx={{ marginTop: 20 }}>
            <Image
              src={Elevated}
              alt="Elevated"
              width={570}
              height={420}
              style={{ borderRadius: 20 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ marginTop: 20 }}>
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
              Elevated Brand Identity
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
              A website is more than an online storefront or business presence;
              it’s also a large part of a company’s brand identity. Eftekhar
              Joy, uses your new website as the foundation to build an elevated
              brand identity for your company. <br /> <br /> From your brand’s
              logo, style guides, and digital content, to the graphics and
              designs you use, every aspect of your website becomes a part of a
              customer’s digital experience and shapes how they perceive your
              company. Our web design and development team take the time to
              listen to your concerns, then create a website that fulfils all
              your must-have items. <br /> <br /> We know that your website is
              an expansion of your business, so we take the time to get it
              right. Get web design services from the best to transform and
              elevate your online brand identity.
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
                marginTop: 20,
                marginBottom: 3,
                 marginRight: 10,
              }}
            >
              Custom Design, Content, And Graphics
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
              When it comes to your website, standing out from the crowd is
              essential. Every website visitor makes a split-second decision as
              to whether they are visiting the correct site to solve their
              problems or to get the answers that they are seeking.   <br /> <br /> Eftekhar
              Joy, offers custom website design services, unique, SEO content
              writing, and advanced graphic design to ensure that your website
              stands out from the competition and reflects all the best aspects
              of your brand.  <br /> <br />  Whether you want a sleek, professional website to
              entice business customers and showcase your service capabilities
              or a fresh, graphic-heavy e-commerce website with product listings
              and descriptions, our team can create a custom website that meets
              all of your needs.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ marginTop: 20 }}>
            <Image
              src={Custom}
              alt="Custom"
              width={570}
              height={420}
              style={{ borderRadius: 20 }}
            />
          </Grid>
        </Grid>
        {/* <ProjectTalk /> */}
      </Container>
    </>
  );
}
