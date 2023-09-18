import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
    marginTop: 50,
  boxShadow:"none",
}));

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
        <Grid item xs={4}>
          <Item>
            <ServiceCard />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <ServiceCard />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <ServiceCard />
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}
