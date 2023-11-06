import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
  height: 300,
  width: 400,
  borderRadius: 10,
}));

export default function DashboardHome() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ fontSize: 18, fontWeight: 700 }}
            >
              Total order
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ fontSize: 18, fontWeight: 700 }}
            >
              Payment delevered
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ fontSize: 18, fontWeight: 700 }}
            >
              Payment Pending
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
