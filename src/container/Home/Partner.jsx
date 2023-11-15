import React from "react";
import Partner1 from "../../../public/assets/images/partner-1.png";
import Partner2 from "../../../public/assets/images/partner-2.png";
import Partner3 from "../../../public/assets/images/partner-3.png";
import Partner4 from "../../../public/assets/images/partner-4.png";
import Partner5 from "../../../public/assets/images/partner-5.png";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
const partners = [Partner1, Partner2, Partner3, Partner4, Partner5];

const Partner = () => {
  return (
    <>
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
        Our Partner
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {partners.map((partner, index) => (
          <Grid
            item
            key={index}
            xs={6}
            sm={2}
            style={{ margin: index === 2 ? "0 20px" : "0" }}
          >
            {/* Add margin to the third item */}
            <div style={{ height: "50px", width: "180px" }}>
              <Image src={partner} alt={`Partner${index + 1}`} />
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Partner;
