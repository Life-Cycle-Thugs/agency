import React from "react";
import { useForm, Controller } from "react-hook-form";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, Typography } from "@mui/material";
import Link from "next/link";

export default function Varification() {
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
            Verification
          </Typography>
          <Typography style={{ fontSize: "16px", marginBottom: "15px" }}>
            Enter the 4-digit code that you received on your email.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box display="flex" gap={10}>
              {[1, 2, 3, 4].map((index) => (
                <Controller
                  key={index}
                  name={`digit${index}`}
                  control={control}
                  defaultValue={index}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      type="text"
                      inputProps={{ maxLength: 1,}}
                      required
                      {...field}
                    />
                  )}
                />
              ))}
            </Box>
            <br />

            <Button
              type="submit"
              variant="contained"
              href="/newpassword"
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
          <p style={{ textAlign: "center" }}>
            If you didn’t receive a code!
            <span>
              <Link style={{ color: "#F14E4E" }} href="/sign-in">
                Resend
              </Link>
            </span>{" "}
          </p>
        </Paper>
      </Box>
    </Container>
  );
}
