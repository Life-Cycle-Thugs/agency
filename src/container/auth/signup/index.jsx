import React from "react";
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

export default function SignUp() {
  const { control, handleSubmit, watch, setError } = useForm();

  const watchPassword = watch("password", "");
  const watchConfirmPassword = watch("confirmPassword", "");

  const onSubmit = (data) => {
    // Add your form submission logic here
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
                    <label htmlFor="">Your Full Name</label>
                    <Controller
                      name="fullName"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          fullWidth
                          margin="normal"
                          label=" Enter your full name"
                          variant="outlined"
                          required
                          {...field}
                        />
                      )}
                    />
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
                    <label htmlFor="" style={{ marginTop: "15px" }}>
                      Your password
                    </label>
                    <Controller
                      name="password"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <div style={{ marginTop: 15 }}>
                          <OutlinedInput
                            fullWidth
                            id="outlined-adornment-password"
                            type={field.showPassword ? "text" : "password"}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() =>
                                    field.onChange(!field.showPassword)
                                  }
                                  onMouseDown={(e) => {
                                    e.preventDefault();
                                  }}
                                  edge="end"
                                >
                                  {field.showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            {...field}
                          />
                        </div>
                      )}
                    />
                    <label htmlFor="" style={{ marginTop: "15px" }}>
                      Your confirm password
                    </label>
                    <Controller
                      name="confirmPassword"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <div style={{ marginTop: 15 }}>
                          <OutlinedInput
                            fullWidth
                            id="outlined-adornment-confirm-password"
                            type={field.showPassword ? "text" : "password"}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() =>
                                    field.onChange(!field.showPassword)
                                  }
                                  onMouseDown={(e) => {
                                    e.preventDefault();
                                  }}
                                  edge="end"
                                >
                                  {field.showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            {...field}
                          />
                        </div>
                      )}
                    />
                    {watchPassword !== watchConfirmPassword && (
                      <Typography style={{ color: "red" }}>
                        Passwords do not match
                      </Typography>
                    )}
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
                      Sign Up
                    </Button>
                  </form>
                  <p style={{ textAlign: "center" }}>
                    Already have an account?{" "}
                    <span>
                      <Link style={{ color: "#F14E4E" }} href="/sign-in">
                        Sign in
                      </Link>
                    </span>{" "}
                  </p>
                </Box>
              </>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
