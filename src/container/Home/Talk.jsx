import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import TalkImg from "../../../public/assets/images/talk.png";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  marginTop: theme.spacing(2),
}));

export default function Talk() {
  const theme = useTheme();

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Item>
              <Typography
                variant="h4"
                style={{
                  fontSize: "40px",
                  lineHeight: "60px",
                  fontWeight: 500,
                }}
              >
                Accelerate your project with a <br /> high-performing team of{" "}
                <br /> Software Engineers.
              </Typography>
              <Typography
                variant="body2"
                style={{
                  marginTop: "30px",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Imperdiet enim facilisi
                aliquam bbr ipsum pretium pellentesque etiam ac ac. Turpis vel
                sapien fermentum accumsan nisl pellentesque sit pellentesque.
              </Typography>
              <Button
                variant="contained"
                style={{
                  marginTop: 30,
                  background: "#F14E4E",
                  padding: "10px 30px",
                  borderRadius: "15px",
                  fontSize: "18px",
                }}
              >
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="/contact"
                >
                  LET'S TALK
                </Link>
              </Button>
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <Image src={TalkImg} alt="My Image" width={500} height={428} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
