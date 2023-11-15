import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link"; // Import Link from "next/link"
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Define custom CSS styles for the links
const linkStyles = {
  textDecoration: "none", // Remove underline
  color: "inherit", // Inherit text color
};

const pages = [
  { label: "Home", path: "/" },
  { label: "Service", path: "/service" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
        marginBottom: "35px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link} // Use Link from Next.js
            href="/" // Use href instead of to
            sx={{
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              mr: 2,
              display: isMobile ? "none" : "flex",
            }}
            className="logo"
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: isMobile ? "flex" : "none" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: isMobile ? "block" : "none",
              }}
            >
              {pages.map((page) => (
                <Link href={page.path} passHref key={page.label}>
                  {" "}
                  {/* Use href and passHref */}
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      sx={{
                        "&:hover": {
                          color: "tomato",
                        },
                        ...linkStyles, // Apply custom styles
                      }}
                    >
                      {page.label}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component={Link} // Use Link from React Router
            href="/"
            sx={{
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              mr: 5,
              display: isMobile ? "flex" : "none",
              flexGrow: 1,
            }}
            style={{ fontSize: "24px" }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: isMobile ? "none" : "flex",
              marginLeft: "25px",
              display: "flex !important",
              alignItems: "center !important",
              justifyContent: "center !important",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link} // Use Link from React Router
                href={page.path}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontSize: "24px",
                  marginLeft: 3,
                  "&:hover": {
                    color: "tomato",
                    fontWeight: "600",
                  },
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <Button
                component={Link}
                href="/sign-in"
                style={{
                  color: "white",
                  fontSize: "20px",
                  backgroundColor: "#F14E4E",
                  padding: "10px 25px",
                  borderRadius: "20px",
                }}
              >
                Sign in
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
