import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";

import Image from "next/image";
import Project1 from "../../../public/assets/images/project.png";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  //   marginTop: 5,
  boxShadow: "none",
}));

export default function Project() {
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
          marginBottom: 20,
        }}
      >
        Our Recent Projects
        <Link href='/all-project' size="small" style={{float:"right",borderRadius:"15px",color:"black",border:"1px solid",padding:"0px 18px",textDecoration:"none",fontSize:20}}>See all</Link>
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            {" "}
            <Image src={Project1} alt="Project" width={370} height={230} />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            {" "}
            <Image src={Project1} alt="Project" width={370} height={230} />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            {" "}
            <Image src={Project1} alt="Project" width={370} height={230} />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            {" "}
            <Image src={Project1} alt="Project" width={370} height={230} />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            {" "}
            <Image src={Project1} alt="Project" width={370} height={230} />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            {" "}
            <Image src={Project1} alt="Project" width={370} height={230} />
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}
