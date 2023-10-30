import { Grid, Typography } from "@mui/material";
import React from "react";
import Paypal from "../../public/assets/images/paymentoption/paypal.png";
import Payoneer from "../../public/assets/images/paymentoption/pyoneer.png";
import Stripe from "../../public/assets/images/paymentoption/stripe.png";
import Image from "next/image";

const Payment = () => {
  return (
    <fieldset
      style={{
        border: "2px solid #F14E4E",
        borderRadius: "20px",
        marginTop: 80,
        marginBottom: 80,
        padding: "30px",

      }}
    >
      <legend style={{ textAlign: "center",padding:"0 8em" }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: "48px",
            fontWeight: 500,
            color: "black",
           // Add margin to create space around the text
          }}
        >
          Payments options
        </Typography>
      </legend>

      <Grid container spacing={2} sx={{ marginTop: 5 }}>
        <Grid item xs={12} md={4}>
          <Image
            src={Paypal}
            alt="Paypal"
            width={332}
            height={205}
            style={{ borderRadius: 20 }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Image
            src={Payoneer}
            alt="Payoneer"
            width={332}
            height={205}
            style={{ borderRadius: 20, }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Image
            src={Stripe}
            alt="Stripe"
            width={332}
            height={205}
            style={{ borderRadius: 20 }}
          />
        </Grid>
      </Grid>
    </fieldset>
  );
};

export default Payment;
