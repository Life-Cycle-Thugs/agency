import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import {
  Container,
  FormControlLabel,
  OutlinedInput,
  Switch,
  Typography,
} from "@mui/material";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  padding: "80px 100px",
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "1px solid #F2F4F6",
  borderRadius: 20,
  background: "linear-gradient(0deg, #E7EBEB, #E7EBEB) ",
}));

export default function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    // Your form submission logic here
    console.log(data);
  };

  return (
    <div style={{ marginBottom: "100px" }}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={7}>
              <Item>
                <Box
                  sx={{}}
                  component={"img"}
                  src={"/assets/images/Illustration.png"}
                  alt="signup"
                />
              </Item>
            </Grid>
            <Grid item xs={12} lg={1}></Grid>
            <Grid item lg={4} xs={12}>
              <>
                <Box>
                  <Typography
                    style={{ fontSize: "28px", marginBottom: "15px" }}
                  >
                    <b>Create your</b> Account
                  </Typography>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="">Your Email</label>
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

                    <label htmlFor="">Your Password</label>
                    <Controller
                      name="yourPassword"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "Your password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                      }}
                      render={({ field, fieldState }) => (
                        <TextField
                          fullWidth
                          margin="normal"
                          label="Enter your  password"
                          variant="outlined"
                          type={showPassword ? "text" : "password"}
                          error={!!fieldState.error}
                          helperText={
                            fieldState.error ? fieldState.error.message : ""
                          }
                          required
                          {...field}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={togglePasswordVisibility}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      )}
                    />

                    <br />

                    <FormControlLabel
                      control={
                        <Switch
                          color="primary"
                          {...control}
                          name="rememberMe"
                        />
                      }
                      label="Remember me"
                      labelPlacement="Remember me"
                    />
                    <Link
                      style={{
                        color: "#F14E4E",
                        textAlign: "left",
                        alignItems: "left",
                      }}
                      href="/forgot"
                    >
                      Forgot password
                    </Link>
                    <br />

                    <Button
                      type="submit"
                      variant="contained"
                      style={{
                        background: "#F14E4E",
                        padding: "12px 155px",
                        marginTop: 15,
                        marginBottom: 15,
                      }}
                    >
                      Sign IN
                    </Button>
                    <hr style={{ color: "#ECEFF4" }} />
                    <Button
                      type="submit"
                      variant="contained"
                      style={{
                        background: "#F2F4F6",
                        padding: "12px 80px",
                        marginTop: 15,
                        marginBottom: 15,
                        color: " #808080",
                        fontSize: "13px",
                      }}
                    >
                      <img
                        style={{ height: "23px", width: "23px" }}
                        component={"img"}
                        src={"/assets/images/google.png"}
                        alt="signup"
                      ></img>
                      Or Sign in with Google
                    </Button>
                    <p style={{ textAlign: "center" }}>
                      Don't have an account ?
                      <Link style={{ color: "#F14E4E" }} href="/sign-up">
                        Sign Up
                      </Link>
                    </p>
                  </form>
                  {/* ... */}
                </Box>
              </>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
