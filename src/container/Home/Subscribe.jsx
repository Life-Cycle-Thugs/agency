import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Image from "next/image";
import Project1 from "../../../public/assets/images/project.png";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

const InputContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "6px",
});

export default function Subscribe() {
  const [email, setEmail] = React.useState("");

  const handleSubscribe = () => {
    console.log("Subscribed with email:", email);
    // You can send the email to your server for processing
  };

  return (
    <Container style={{ marginTop: 20, marginBottom: 30 }}>
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
        Get In Touch
      </Typography>
      <div
        className="subscribe"
        style={{
          background: "black",
          borderRadius: 15,
          marginBottom: 100,
          padding: "30px 20px", // Adjusted padding for responsiveness
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} md={6}>
              <Image src={Project1} alt="Project" width={570} height={260} />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputContainer>
                <TextField
                  style={{
                    background: "white",
                    borderRadius: "20px",
                    marginBottom: "20px", // Adjusted margin for responsiveness
                  }}
                  label="Email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  variant="contained"
                  onClick={handleSubscribe}
                  style={{
                    background: "#F14E4E",
                    borderRadius: "20px",
                    padding: "15px 30px",
                  }}
                >
                  Subscribe
                </Button>
              </InputContainer>
              <Typography
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "16px",
                  padding: "0 20px", // Adjusted padding for responsiveness
                }}
              >
                Our clients get the best results when they have our team
                dedicated to their business for extended periods of time.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  );
}
