import React from "react";
import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  return (
    <Container>
      <div position="fixed">
        <Toolbar>
          {/* Top Search Bar */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
            //   sx={{ border: "1px solid gray" }}
            />
          </div>
        </Toolbar>
      </div>
    </Container>
  );
};

export default Topbar;
