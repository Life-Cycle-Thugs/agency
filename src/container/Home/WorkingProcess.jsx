import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import work from "../../../public/assets/images/wok.png";

export default function WorkingProcess() {
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
        Our Working Process
      </Typography>
      <Box>
        <Image src={work} alt="Team1" width={1320} height={430} />
      </Box>
    </Container>
  );
}
