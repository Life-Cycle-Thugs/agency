import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, Typography } from "@mui/material";
import Image from "next/image";

import Team1 from "../../../public/assets/images/team.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
//   marginTop: 5,
  boxShadow: "none",
}));

export default function Team() {
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
        Our Pro Team
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Item>
            {" "}
            <Image src={Team1} alt="Team1" width={370} height={230} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            {" "}
            <Image src={Team1} alt="Team1" width={370} height={230} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            {" "}
            <Image src={Team1} alt="Team1" width={370} height={230} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            {" "}
            <Image src={Team1} alt="Team1" width={370} height={230} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            {" "}
            <Image src={Team1} alt="Team1" width={370} height={230} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            {" "}
            <Image src={Team1} alt="Team1" width={370} height={230} />
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}
