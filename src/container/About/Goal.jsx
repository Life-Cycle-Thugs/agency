import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import customer from "../../../public/assets/images/004-customers.png";
import complete from "../../../public/assets/images/Group.png";
import award from "../../../public/assets/images/002-success.png";
import coffee from "../../../public/assets/images/Page-1.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Goal() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={customer}
                alt="customer"
                style={{ height: "60px", width: "60px" }}
              />
            </div>

            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: 55,
                  background:
                    "linear-gradient(260.52deg, #1C99FE -4.98%, #7644FF 48.42%, #FD4766 96.9%)",
                  WebkitBackgroundClip: "text", // Enable text clipping for the gradient
                  color: "transparent", // Make the text transparent
                }}
              >
                329+
              </Typography>

              <Typography
                variant="body2"
                sx={{ fontWeight: 500, fontSize: 16, textAlign: "center" }}
              >
                Staticfied Customers
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={complete}
                alt="complete"
                style={{ height: "60px", width: "60px" }}
              />
            </div>

            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: 55,
                  background:
                    "linear-gradient(260.52deg, #1C99FE -4.98%, #7644FF 48.42%, #FD4766 96.9%)",
                  WebkitBackgroundClip: "text", // Enable text clipping for the gradient
                  color: "transparent", // Make the text transparent
                }}
              >
                98+
              </Typography>

              <Typography
                variant="body2"
                sx={{ fontWeight: 500, fontSize: 16, textAlign: "center" }}
              >
                Complete Project
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={award}
                alt="award"
                style={{ height: "60px", width: "60px" }}
              />
            </div>

            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: 55,
                  background:
                    "linear-gradient(260.52deg, #1C99FE -4.98%, #7644FF 48.42%, #FD4766 96.9%)",
                  WebkitBackgroundClip: "text", // Enable text clipping for the gradient
                  color: "transparent", // Make the text transparent
                }}
              >
                149+
              </Typography>

              <Typography
                variant="body2"
                sx={{ fontWeight: 500, fontSize: 16, textAlign: "center" }}
              >
                Win Global Award
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={coffee}
                alt="coffee"
                style={{ height: "60px", width: "60px" }}
              />
            </div>

            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: 55,
                  background:
                    "linear-gradient(260.52deg, #1C99FE -4.98%, #7644FF 48.42%, #FD4766 96.9%)",
                  WebkitBackgroundClip: "text", // Enable text clipping for the gradient
                  color: "transparent", // Make the text transparent
                }}
              >
                280+
              </Typography>

              <Typography
                variant="body2"
                sx={{ fontWeight: 500, fontSize: 16, textAlign: "center" }}
              >
                Cup of coffee
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
