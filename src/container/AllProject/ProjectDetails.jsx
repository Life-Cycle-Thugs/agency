import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Project1 from "../../../public/assets/images/project.png";
import IconButton from "@mui/material/IconButton";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { makeStyles } from "@mui/styles";
import ProjectTalk from "./ProjectTalk";

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


export default function ProjectDetails() {
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
            textTransform: "uppercase",
          }}
        >
          Projects details
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
        <Image src={Project1} alt="Project" width={1320} height={500} />
        <Typography
          variant="h5"
          style={{
            fontSize: "48px",
            lineHeight: "60px",
            fontWeight: 500,
            textAlign: "left",
            marginTop: 100,
            marginBottom: 60,
            textTransform: "capitalize",
          }}
        >
          Real Estate Website Design
        </Typography>
        <Typography
          variant="paragraph"
          style={{
            fontSize: "16px",
            lineHeight: "20px",
            fontWeight: 400,
            textAlign: "left",
            // marginTop: 100,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est
          consequatur delectus eos! Quidem dolore reprehenderit aspernatur
          exercitationem sint ducimus ad consequuntur suscipit sapiente placeat
          ipsum, inventore blanditiis incidunt maxime? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Cupiditate pariatur tenetur esse
          aliquam error maiores atque sequi ipsam neque voluptate ut vitae non
          quaerat, distinctio consequuntur doloribus aut id. Ducimus quidem
          dolore asperiores, rem aspernatur corporis modi quae veritatis
          eligendi accusamus ex similique ratione exercitationem laborum iure
          officiis perspiciatis esse reprehenderit porro impedit quo earum vel,
          odio sed. Laborum enim quidem facere consectetur. Ratione perferendis
          quia, esse tempore quae omnis praesentium dolorum? Corporis sequi cum
          minus at rerum dolorem officia suscipit tempore deleniti, officiis,
          natus neque libero accusamus consequatur vel. Aperiam harum, sequi qui
          minima fugiat adipisci corporis unde voluptas.
        </Typography>
        <Typography
          variant="body1"
          style={{
            fontSize: "16px",
            lineHeight: "20px",
            fontWeight: 400,
            textAlign: "left",
            marginTop: 30,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est
          consequatur delectus eos! Quidem dolore reprehenderit aspernatur
          exercitationem sint ducimus ad consequuntur suscipit sapiente placeat
          ipsum, inventore blanditiis incidunt maxime? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Cupiditate pariatur tenetur esse
          aliquam error maiores atque sequi ipsam neque voluptate ut vitae non
          quaerat, distinctio consequuntur doloribus aut id. Ducimus quidem
          dolore asperiores, rem aspernatur corporis modi quae veritatis
          eligendi accusamus ex similique ratione exercitationem laborum iure
          officiis perspiciatis esse reprehenderit porro impedit quo earum vel,
          odio sed. Laborum enim quidem facere consectetur. Ratione perferendis
          quia, esse tempore quae omnis praesentium dolorum? Corporis sequi cum
          minus at rerum dolorem officia suscipit tempore deleniti, officiis,
          natus neque libero accusamus consequatur vel. Aperiam harum, sequi qui
          minima fugiat adipisci corporis unde voluptas.
        </Typography>
        <Typography
          variant="body1"
          style={{
            fontSize: "16px",
            lineHeight: "20px",
            fontWeight: 400,
            textAlign: "left",
            marginTop: 30,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est
          consequatur delectus eos! Quidem dolore reprehenderit aspernatur
          exercitationem sint ducimus ad consequuntur suscipit sapiente placeat
          ipsum, inventore blanditiis incidunt maxime? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Cupiditate pariatur tenetur esse
          aliquam error maiores atque sequi ipsam neque voluptate ut vitae non
          quaerat, distinctio consequuntur doloribus aut id. Ducimus quidem
          dolore asperiores, rem aspernatur corporis modi quae veritatis
          eligendi accusamus ex similique ratione exercitationem laborum iure
          officiis perspiciatis esse reprehenderit porro impedit quo earum vel,
          odio sed. Laborum enim quidem facere consectetur. Ratione perferendis
          quia, esse tempore quae omnis praesentium dolorum? Corporis sequi cum
          minus at rerum dolorem officia suscipit tempore deleniti, officiis,
          natus neque libero accusamus consequatur vel. Aperiam harum, sequi qui
          minima fugiat adipisci corporis unde voluptas.
        </Typography>
        <Typography
          variant="h5"
          style={{
            fontSize: "48px",
            lineHeight: "60px",
            fontWeight: 500,
            textAlign: "left",
            marginTop: 100,
            // marginBottom: 60,
            textTransform: "capitalize",
          }}
        >
          Our Service
        </Typography>
        <ul>
          <li>Responsive</li>
          <li>Speed Optimized </li>
          <li>Brand Consistent</li>
          <li>Cross-Browser</li>
          <li> Compatible Responsive</li>
          <li> Speed Optimized</li>
          <li>Brand Consistent</li>
          <li> Cross-Browser Compatible</li>
          <li>Responsive</li>
          <li>Speed Optimized </li>
          <li>Brand Consistent</li>
          <li>Cross-Browser</li>
          <li> Compatible Responsive</li>
          <li> Speed Optimized</li>
          <li>Brand Consistent</li>
          <li> Cross-Browser Compatible</li>
        </ul>
        <ProjectTalk />
      </Container>
    </>
  );
}
