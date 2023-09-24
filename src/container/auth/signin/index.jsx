import React, { useState } from "react";
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

const FormItem = styled(Paper)(({ theme }) => ({
  padding: "80px 100px",
  width: "100%",
  textAlign: "left",
  color: theme.palette.text.secondary,
  border: "1px solid #F2F4F6",
  borderRadius: 20,
  background: "white",
}));

export default function SignIn() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
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
                  // width={500}
                  // height={428}
                />
              </Item>
            </Grid>
            <Grid item xs={12} lg={1}></Grid>

            <Grid item lg={4} xs={12}>
              <FormItem>
                <Box>
                  <Typography
                    style={{ fontSize: "28px", marginBottom: "15px" }}
                  >
                    {" "}
                    <b>Create your</b> Account
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="">Your Email</label>
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Enter your Email"
                      variant="outlined"
                      type="email"
                      required
                      value={values.email}
                      onChange={handleChange("email")}
                    />

                    <br />
                    <label htmlFor="" style={{ marginTop: "105px" }}>
                      Your password
                    </label>
                    {/* <FormControl> */}
                    {/* <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel> */}
                    <div style={{ marginTop: 15 }}>
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        // label="Password"
                      />
                    </div>

                    <FormControlLabel
                      value="Remember me"
                      control={<Switch color="primary" />}
                      label="Remember me"
                      labelPlacement="Remember me"
                    />
                    <Link
                      style={{
                        color: "#F14E4E",
                        textAlign: "left",
                        alignItems: "left",
                      }}
                      href="#"
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
                  </form>
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
                      fontSize:"13px"
                    }}
                  >
                    <img
                      style={{height:"23px", width:"23px"}}
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

                  {/* <CustomButton>Hello</CustomButton> */}
                </Box>
              </FormItem>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
