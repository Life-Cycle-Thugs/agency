import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Project1 from "../../../public/assets/images/project.png";

export default function ProjectTalk() {
  return (
    <div style={{ marginTop: 20, marginBottom: 30 }}>
      <div
        className="talk-project"
        style={{
          background: "#091627",

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
              <Typography
                style={{
                  color: "white",
                  marginTop: "20px",
                  fontSize: "25px",
                }}
              >
                Let’s talk about the Project!
              </Typography>
              <Typography
                style={{
                  color: "white",
                  marginTop: "20px",
                  fontSize: "15px",
                }}
              >
                Our clients get the best results when they have our team
                dedicated to their business for extended periods of time.
              </Typography>
              <Button
                id="project-talk-button"
                variant="contained"
                style={{
                  marginTop: 30,
                  background: "#F14E4E",
                  padding: "10px 30px",
                  borderRadius: "15px",
                  fontSize: "18px",
                }}
              >
                LET'S TALK
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
