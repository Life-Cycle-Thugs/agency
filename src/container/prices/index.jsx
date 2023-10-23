import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, List, ListItem, ListItemText } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

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
            <Typography
              sx={{ fontSize: 18, fontWeight: "bold" }}
              color="#F14E4E"
              gutterBottom
            >
              STANDARD
            </Typography>
            <Typography variant="h5" component="div">
              $499 <span>Monthly</span>
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontSize: 15, color: "grey" }}>
                    {" "}
                    <CheckIcon />
                    Unique user interface & visual Design
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontSize: 15, color: "grey" }}>
                    {" "}
                    <CheckIcon />
                    Stretergy and Desgin Derection
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontSize: 15, color: "grey" }}>
                    {" "}
                    <CheckIcon />
                    User Experience Design
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontSize: 15, color: "grey" }}>
                    {" "}
                    <CheckIcon />
                    Incrase your Page Conversions
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography sx={{ fontSize: 15, color: "grey" }}>
                    {" "}
                    <CheckIcon sx={{fontSize:20}} />
                    Premium Source for one website
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </CardContent>
          <CardActions>
            <Button
              variant="outlined"
              sx={{ fontSize: 20, fontWeight: 400, color: "gray" }}
            >
              PURCHASE NOW
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={0} md={1}>
        {/* Empty grid item */}
      </Grid>
      <Grid item xs={12} md={3}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={0} md={1}>
        {/* Empty grid item */}
      </Grid>
      <Grid item xs={12} md={3}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
