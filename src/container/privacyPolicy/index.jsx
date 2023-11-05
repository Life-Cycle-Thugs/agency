import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {
  Box,
  Container,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
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
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3) !important",
    marginBottom: 100,
    cursor: "pointer", // Add cursor pointer for better UX
  },
  arrowIcon: {
    fontSize: "36px",
    color: "black",
  },
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
export default function PrivacyPolicy() {
  const classes = useStyles();
     const [activeSection, setActiveSection] = React.useState(null);

     const scrollToSection = (index) => {
       setActiveSection(index);
       // Scroll to the corresponding text area using the element's id
       const contentSection = document.getElementById(index.toString());
       if (contentSection) {
         contentSection.scrollIntoView({ behavior: "smooth" });
       }
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
          PRIVACY & POLICY
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
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid xs={3}>
            <List>
              <ListItem
                button
                key="Terms and Conditions of Use"
                onClick={() => scrollToSection(1)} // Scroll to the section with id "2"
                sx={{ "&:hover": { color: "#F14E4E" } }}
              >
                <ListItemText primary="Website administrator" />
              </ListItem>
              <ListItem
                button
                key="Terms and Conditions of Use"
                onClick={() => scrollToSection(2)} // Scroll to the section with id "2"
                sx={{ "&:hover": { color: "#F14E4E" } }}
              >
                <ListItemText primary="Terms and Conditions of Use" />
              </ListItem>
              <ListItem
                button
                key="Terms and Conditions of Use"
                onClick={() => scrollToSection(3)} // Scroll to the section with id "2"
                sx={{ "&:hover": { color: "#F14E4E" } }}
              >
                <ListItemText primary="Use License" />
              </ListItem>
              <ListItem
                button
                key="Terms and Conditions of Use"
                onClick={() => scrollToSection(4)} // Scroll to the section with id "2"
                sx={{ "&:hover": { color: "#F14E4E" } }}
              >
                <ListItemText primary="Disclaimer" />
              </ListItem>
              <ListItem
                button
                key="Terms and Conditions of Use"
                onClick={() => scrollToSection(5)} // Scroll to the section with id "2"
                sx={{ "&:hover": { color: "#F14E4E" } }}
              >
                <ListItemText primary="Limitations" />
              </ListItem>
              <ListItem
                button
                key="Terms and Conditions of Use"
                onClick={() => scrollToSection(6)} // Scroll to the section with id "2"
                sx={{ "&:hover": { color: "#F14E4E" } }}
              >
                <ListItemText primary="Revision & Errata" />
              </ListItem>
              <ListItem
                button
                key="Terms and Conditions of Use"
                onClick={() => scrollToSection(7)} // Scroll to the section with id "2"
                sx={{ "&:hover": { color: "#F14E4E" } }}
              >
                <ListItemText primary="Links" />
              </ListItem>
              <ListItem
                button
                key="Terms and Conditions of Use"
                onClick={() => scrollToSection(8)} // Scroll to the section with id "2"
                sx={{ "&:hover": { color: "#F14E4E" } }}
              >
                <ListItemText primary="Modification" />
              </ListItem>
            </List>
          </Grid>
          <Grid xs={8}>
            <Typography
              variant="h2"
              style={{
                fontSize: "26px",
                fontWeight: 200,
                textTransform: "capitalize",
              }}
              id='1'
            >
              <b>Website</b> administrator
            </Typography>
            <Typography
              variant="h2"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                marginTop: 40,
                marginBottom: 100,
                textTransform: "capitalize",
                lineHeight: "30px",
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia
            </Typography>
            <Typography
              variant="h2"
              style={{
                fontSize: "26px",
                fontWeight: 200,
                textTransform: "capitalize",
              }}
              id="2"
            >
              <b> Terms and </b>Conditions of Use
            </Typography>
            <Typography
              variant="h2"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                marginTop: 40,
                marginBottom: 100,
                textTransform: "capitalize",
                lineHeight: "30px",
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia
            </Typography>
            <Typography
              variant="h2"
              style={{
                fontSize: "26px",
                fontWeight: 200,
                textTransform: "capitalize",
              }}
              id="3"
            >
              <b> Use </b> License
            </Typography>
            <Typography
              variant="h2"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                marginTop: 40,
                marginBottom: 100,
                textTransform: "capitalize",
                lineHeight: "30px",
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia
            </Typography>
            <Typography
              variant="h2"
              style={{
                fontSize: "26px",
                fontWeight: 200,
                // textTransform: "capitalize",
              }}
              id="4"
            >
              <b> Discla</b>imer
            </Typography>
            <Typography
              variant="h2"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                marginTop: 40,
                marginBottom: 100,
                textTransform: "capitalize",
                lineHeight: "30px",
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia
            </Typography>
            <Typography
              variant="h2"
              style={{
                fontSize: "26px",
                fontWeight: 200,
                // textTransform: "capitalize",
              }}
              id="5"
            >
              <b> Limita</b>tions
            </Typography>
            <Typography
              variant="h2"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                marginTop: 40,
                marginBottom: 100,
                textTransform: "capitalize",
                lineHeight: "30px",
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia
            </Typography>
            <Typography
              variant="h2"
              style={{
                fontSize: "26px",
                fontWeight: 200,
                // textTransform: "capitalize",
              }}
              id="6"
            >
              <b> Revision</b> & Errata
            </Typography>
            <Typography
              variant="h2"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                marginTop: 40,
                marginBottom: 100,
                textTransform: "capitalize",
                lineHeight: "30px",
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia
            </Typography>
            <Typography
              variant="h2"
              style={{
                fontSize: "26px",
                fontWeight: 200,
                // textTransform: "capitalize",
              }}
              id="7"
            >
              <b> Lin</b>ks
            </Typography>
            <Typography
              variant="h2"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                marginTop: 40,
                marginBottom: 100,
                textTransform: "capitalize",
                lineHeight: "30px",
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia
            </Typography>{" "}
            <Typography
              variant="h2"
              style={{
                fontSize: "26px",
                fontWeight: 200,
                // textTransform: "capitalize",
              }}
              id="8"
            >
              <b> Modifi</b>cation
            </Typography>
            <Typography
              variant="h2"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                marginTop: 40,
                marginBottom: 100,
                textTransform: "capitalize",
                lineHeight: "30px",
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
