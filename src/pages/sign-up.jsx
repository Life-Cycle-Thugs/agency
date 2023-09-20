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
// import SvgIcon from "@material-ui/core/SvgIcon";

//  import PasswordField from "material-ui-password-field";

import {
  Container,
  FormControlLabel,
  FormHelperText,
  Input,
  Switch,
  Typography,
} from "@mui/material";
import Image from "next/image";

import signup from "../../public/assets/images/Illustration.png";

const Item = styled(Paper)(({ theme }) => ({
  padding: "80px 100px",
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "1px solid #F2F4F6",
  borderRadius: 20,
  background: "linear-gradient(0deg, #E7EBEB, #E7EBEB) ",
}));

export default function SignUp() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Item>
              <Image src={signup} alt="signup" width={500} height={428} />
            </Item>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <Typography style={{ fontSize: "28px" }}>
              {" "}
              <b>Create your</b> Account
            </Typography>
            <form onSubmit={handleSubmit}>
              <label htmlFor="">Your Full Name</label>
              <TextField
                fullWidth
                margin="normal"
                label=" Enter your full name"
                variant="outlined"
                required
                value={values.fullName}
                onChange={handleChange("fullName")}
              />
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
              <label htmlFor="">Your Password</label>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="outlined-adornment-password">
                  Your Password
                </InputLabel>
                <TextField
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  required
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <label htmlFor="">Your Confirm Password</label>

              <TextField
                fullWidth
                margin="normal"
                label="Confirm Password"
                variant="outlined"
                type="password"
                required
                value={values.confirmPassword}
                onChange={handleChange("confirmPassword")}
              />
              <FormControlLabel
                value="Remember me"
                control={<Switch color="primary" />}
                label="Remember me"
                labelPlacement="Remember me"
              />
              <br />
              <Button
                type="submit"
                variant="contained"
                style={{ background: "#F14E4E", padding: "12px 155px" }}
              >
                Sign Up
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
