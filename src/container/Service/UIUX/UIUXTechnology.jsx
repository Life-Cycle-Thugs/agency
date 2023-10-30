import React from "react";
import Fig from "../../../../public/assets/images/uiux/figma.png";
import Xd from "../../../../public/assets/images/uiux/xd.png";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const UIUXTechnology = () => {
  return (
    <div>
      <Typography
        variant="h2"
        style={{
          fontSize: "48px",
          lineHeight: "60px",
          fontWeight: 500,
          textAlign: "left",
          marginTop: 100,
          color: "#000",
          textAlign: "center",
          marginTop: 150,
          marginBottom: 50,
        }}
      >
        Technology that’s we use
      </Typography>
      <Box sx={{}}>
        <Grid container spacing={2} sx={{ marginTop: 20, marginBottom: 20 }}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ height: "87px", width: "245px"}}>
              <Image src={Fig} alt={Fig} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ height: "43px", width: "85px",marginRight:10 }}>
              <Image src={Xd} alt={Xd} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default UIUXTechnology;
