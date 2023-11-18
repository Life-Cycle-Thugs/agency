import React from "react";
import { useForm, Controller } from "react-hook-form";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, Typography } from "@mui/material";
import Link from "next/link";

export default function Forgot() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Your form submission logic here
    console.log(data);
  };

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Paper
          elevation={3}
          style={{
            padding: "40px",
            width: "50%",
            textAlign: "left",
          }}
        >
          <Typography style={{ fontSize: "28px", marginBottom: "15px" }}>
            Forgot your password?
          </Typography>
          <Typography style={{ fontSize: "16px", marginBottom: "15px" }}>
            Enter your email for the verification process; we will send a
            4-digit code to your email.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor=""> Email</label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  fullWidth
                  margin="normal"
                  label="Enter your Email"
                  variant="outlined"
                  type="email"
                  required
                  {...field}
                />
              )}
            />
            <br />

            <Button
              type="submit"
              variant="contained"
              style={{
                background: "#F14E4E",
                padding: "12px 155px",
                marginTop: 15,
                marginBottom: 15,
                textTransform: "uppercase",
              }}
            >
              Continue
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
}
