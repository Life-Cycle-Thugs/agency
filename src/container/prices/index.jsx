import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, List, ListItem, ListItemText } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import StarIcon from "@mui/icons-material/Star";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function PricePlan() {
  return (
    <Grid container spacing={2} sx={{ marginTop: 15 }}>
      <Grid item xs={12} md={4}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 18, fontWeight: "bold" }} gutterBottom>
              <span style={{ color: "#F14E4E" }}> STANDARD</span>

              <span style={{ marginLeft: 100 }}>
                <StarIcon style={{ color: "gold" }} fontSize="medium" />
                <StarIcon style={{ color: "gold" }} fontSize="medium" />{" "}
                <StarIcon style={{ color: "gold" }} fontSize="medium" />
              </span>
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ background: "#ECEFF4", padding: "25px 10px" }}
            >
              <span style={{ fontSize: 15 }}>$</span>{" "}
              <span style={{ fontSize: 45, fontWeight: 600 }}>499</span>
              <span style={{ textAlign: "right", marginLeft: 100 }}>
                Monthly
              </span>
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontSize: 15, color: "grey" }}>
                    {" "}
                    <CheckIcon sx={{ fontSize: 20 }} />
                    Unique user interface & visual Design
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontSize: 15, color: "grey" }}>
                    {" "}
                    <CheckIcon sx={{ fontSize: 20 }} />
                    Stretergy and Desgin Derection
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontSize: 15, color: "grey" }}>
                    {" "}
                    <CheckIcon sx={{ fontSize: 20 }} />
                    User Experience Design
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontSize: 15, color: "grey" }}>
                    {" "}
                    <CheckIcon sx={{ fontSize: 20 }} />
                    Incrase your Page Conversions
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontSize: 15, color: "grey" }}>
                    {" "}
                    <CheckIcon sx={{ fontSize: 20 }} />
                    Premium Source for one website
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              // variant="outlined"
              sx={{
                fontSize: 20,
                fontWeight: 400,
                border: "1px solid #EAEAEA",
                color: "gray",
                borderColor: "grey",
                borderRadius: 5,
                padding: "10px 55px",
              }}
            >
              PURCHASE NOW
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={0} md={1}>
        {/* Empty grid item */}
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 18, fontWeight: "bold" }} gutterBottom>
              <span style={{ color: "#F14E4E" }}> PREMIUM</span>

              <span style={{ marginLeft: 100 }}>
                <StarIcon style={{ color: "#FD9E47" }} fontSize="medium" />
                <StarIcon style={{ color: "#FD9E47" }} fontSize="medium" />{" "}
                <StarIcon style={{ color: "#FD9E47" }} fontSize="medium" />
                <StarIcon style={{ color: "#FD9E47" }} fontSize="medium" />
                <StarIcon style={{ color: "#FD9E47" }} fontSize="medium" />
              </span>
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ background: "#ECEFF4", padding: "25px 10px" }}
            >
              <span style={{ fontSize: 15 }}>$</span>{" "}
              <span style={{ fontSize: 45, fontWeight: 600 }}>999</span>
              <span
                style={{
                  textAlign: "right",
                  marginLeft: 100,
                  textTransform: "uppercase",
                }}
              >
                yearly
              </span>
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontSize: 15, color: "grey" }}>
                    {" "}
                    <CheckIcon sx={{ fontSize: 20 }} />
                    Unique user interface & visual Design
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontSize: 15, color: "grey" }}>
                    {" "}
                    <CheckIcon sx={{ fontSize: 20 }} />
                    Stretergy and Desgin Derection
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontSize: 15, color: "grey" }}>
                    {" "}
                    <CheckIcon sx={{ fontSize: 20 }} />
                    User Experience Design
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontSize: 15, color: "grey" }}>
                    {" "}
                    <CheckIcon sx={{ fontSize: 20 }} />
                    Incrase your Page Conversions
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontSize: 15, color: "grey" }}>
                    {" "}
                    <CheckIcon sx={{ fontSize: 20 }} />
                    Premium Source for one website
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              // variant="outlined"
              sx={{
                fontSize: 20,
                fontWeight: 400,
                border: "1px solid #EAEAEA",
                color: "White",
                backgroundColor: "#F14E4E",
                borderColor: "#F14E4E",
                borderRadius: 5,
                padding: "10px 55px",
              }}
            >
              PURCHASE NOW
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={0} md={1}>
        {/* Empty grid item */}
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 18, fontWeight: "bold" }} gutterBottom>
              <span style={{ color: "#F14E4E" }}> CUSTOM</span>

              <span style={{ marginLeft: 100 }}>
                <StarIcon style={{ color: "#FD9E47" }} fontSize="medium" />
                <StarIcon style={{ color: "#FD9E47" }} fontSize="medium" />{" "}
                <StarIcon style={{ color: "#FD9E47" }} fontSize="medium" />
              </span>
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{
                background: "#ECEFF4",
                padding: "25px 10px",
                color: "#F14E4E",
                textTransform: "uppercase",
              }}
            >
              Your Requirement
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontSize: 15, color: "grey" }}>
                    {" "}
                    <CheckIcon sx={{ fontSize: 20 }} />
                    Unique user interface & visual Design
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontSize: 15, color: "grey" }}>
                    {" "}
                    <CheckIcon sx={{ fontSize: 20 }} />
                    Stretergy and Desgin Derection
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontSize: 15, color: "grey" }}>
                    {" "}
                    <CheckIcon sx={{ fontSize: 20 }} />
                    User Experience Design
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontSize: 15, color: "grey" }}>
                    {" "}
                    <CheckIcon sx={{ fontSize: 20 }} />
                    Incrase your Page Conversions
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontSize: 15, color: "grey" }}>
                    {" "}
                    <CheckIcon sx={{ fontSize: 20 }} />
                    Premium Source for one website
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              // variant="outlined"
              sx={{
                fontSize: 20,
                fontWeight: 400,
                border: "1px solid #EAEAEA",
                color: "white",
                backgroundColor:" #091627",
                borderColor: "grey",
                borderRadius: 5,
                padding: "10px 55px",
              }}
            >
            CONTACT US NOW
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
