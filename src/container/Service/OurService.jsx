import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import WebDesign from "../../../public/assets/images/web-design.png";
import WebDevelopment from "../../../public/assets/images/web-development.png";
import UIUx from "../../../public/assets/images/ui-ux.png";
import Link from "next/link";


export default function OurService() {
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
        Our Services
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Link href="/ui-ux-service" style={{ textDecoration: "none" }}>
            <Card sx={{ maxWidth: 345 }}>
              <Image src={UIUx} alt="UIUx" width={300} height={194} />
              <CardContent>
                <Typography
                  variant="h2"
                  color="text.secondary"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "#091627",
                    marginBottom: 3,
                  }}
                >
                  Ux/Ui Design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link href="/web-design-service" style={{ textDecoration: "none" }}>
            <Card sx={{ maxWidth: 345 }}>
              <Image src={WebDesign} alt="WebDesign" width={300} height={194} />
              <CardContent>
                <Typography
                  variant="h2"
                  color="text.secondary"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "#091627",
                    marginBottom: 3,
                  }}
                >
                  Web Design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link
            href="/web-development-service"
            style={{ textDecoration: "none" }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <Image
                src={WebDevelopment}
                alt="WebDevelopment"
                width={300}
                height={194}
              />
              <CardContent>
                <Typography
                  variant="h2"
                  color="text.secondary"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "#091627",
                    marginBottom: 3,
                  }}
                >
                  Web Development
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
