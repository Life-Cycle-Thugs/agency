import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Container, Typography } from "@mui/material";
import { useSpring, animated } from "react-spring";
import Link from "next/link";

const AnimatedCheckCircleOutlineIcon = animated(CheckCircleOutlineIcon);

export default function NewPassword() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [successIconAnimation, setSuccessIconAnimation] = useSpring(() => ({
    opacity: 0,
  }));

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    // Your form submission logic here
    console.log(data);
    setSuccessModalOpen(true);
    reset(); // Reset the form fields

    // Trigger the success icon animation
    setSuccessIconAnimation({ opacity: 1 });
  };

  const handleCloseSuccessModal = () => {
    // Reset the success icon animation when closing the modal
    setSuccessIconAnimation({ opacity: 0 });
    setSuccessModalOpen(false);
  };

  const newPassword = watch("newPassword", "");

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
            New Password
          </Typography>
          <Typography style={{ fontSize: "16px", marginBottom: "15px" }}>
            Set the new password for your account so you can log in and access
            all features.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">New Password</label>
            <Controller
              name="newPassword"
              control={control}
              defaultValue=""
              rules={{
                required: "New password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  margin="normal"
                  label="Enter your new password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  required
                  {...field}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            <br />

            <label htmlFor="">Confirm Password</label>
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              rules={{
                required: "Confirm password is required",
                validate: (value) =>
                  value === newPassword || "Passwords do not match",
              }}
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  margin="normal"
                  label="Confirm your new password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  required
                  {...field}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
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

          {/* Success Modal */}
          <Dialog
            open={isSuccessModalOpen}
            onClose={handleCloseSuccessModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              <Typography sx={{ color: "#F14E4E" }}>Successfully!</Typography>
            </DialogTitle>
            <DialogContent>
              <AnimatedCheckCircleOutlineIcon
                style={{ ...successIconAnimation }}
                
                sx={{ fontSize: 150, margin: "auto", color: "#F14E4E" }}
              />
              <Typography variant="body1" sx={{ color: "gray" }}>
                Your password has been successfully updated.
              </Typography>
              <Button
                onClick={handleCloseSuccessModal}
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
            </DialogContent>
          </Dialog>
        </Paper>
      </Box>
    </Container>
  );
}
