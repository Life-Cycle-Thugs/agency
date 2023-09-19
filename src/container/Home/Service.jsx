import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import ServiceCard from "./ServiceCard";

export default function Service() {
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
        }}
      >
        Our Services
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard />
        </Grid>
        
      </Grid>
    </Container>
  );
}
