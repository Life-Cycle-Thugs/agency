import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import UiUX from "../../../../public/assets/images/uiux/ui-ux-process.png";

export default function UiUXProcess() {
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
        <span style={{ color: "#F14E4E" }}> Design Thinking</span> Process
      </Typography>
      <Typography
        variant="h2"
        style={{
          fontSize: "18px",
   
          fontWeight: 400,

          marginTop: 100,
          marginBottom: 50,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Typography>
      <Box>
        <Image src={UiUX} alt="UiUX" width={1320} height={330} />
      </Box>
    </Container>
  );
}
