import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Container, FormHelperText, Input, InputLabel, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


import Image from "next/image";
import Project1 from "../../../public/assets/images/project.png";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: "black",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));
const InputContainer = styled("div")({
  display: "flex",
  // alignItems: "center",
  // gap: "16px",
});

export default function Subscribe() {
  const [email, setEmail] = React.useState("");

  const handleSubscribe = () => {
    // Handle subscription logic here
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
          padding: "30px 50px",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} md={6}>
              <Image src={Project1} alt="Project" width={570} height={260} />
              {/* <Item>1</Item> */}
            </Grid>
            <Grid item xs={12} md={6}>
              <InputContainer>
                <TextField
                  style={{background: "white",borderRadius: "20px",marginLeft: "100px"}}
                  label="Email"
                  // variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  variant="contained"
                  // color="primary"
                  onClick={handleSubscribe}
                  style={{background:" #F14E4E",borderRadius:"20px",padding:"15px 30px",marginRight:"1px"}}
                >
                  Subscribe
                </Button>
              </InputContainer>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  );
}
