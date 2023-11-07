import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import BorderStyleIcon from "@mui/icons-material/BorderStyle";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  "&:hover": {
    color: "white",
    backgroundColor: "#F14E4E",
    borderTopRightRadius: "15px",
    borderBottomRightRadius: "15px",
    width: 20,
    height: 50,
    transition: "background-color 0.10s ease-in-out", // Add the transition property
  },
}));

const DashbordNavbar = () => {
  return (
    <div>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            marginTop: 10,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* Left Navigation Content */}
        <List>
          <Link
            href="/dashbord/dashbord"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button sx={{ height: 50, marginTop: 2 }}>
              <StyledListItemIcon>
                <DashboardIcon />
              </StyledListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
          <Link
            href="/dashbord/orders"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button sx={{ height: 50, marginTop: 2 }}>
              <StyledListItemIcon>
                <BorderStyleIcon />
              </StyledListItemIcon>
              <ListItemText primary="Order" />
            </ListItem>
          </Link>
          <ListItem button sx={{ height: 50, marginTop: 2 }}>
            <StyledListItemIcon>
              <MessageIcon />
            </StyledListItemIcon>
            <ListItemText primary="Message" />
          </ListItem>
          <ListItem button sx={{ height: 50, marginTop: 2 }}>
            <StyledListItemIcon>
              <PersonIcon />
            </StyledListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button sx={{ height: 50, marginTop: 2 }}>
            <StyledListItemIcon>
              <CloudUploadIcon />
            </StyledListItemIcon>
            <ListItemText primary="Upload" />
          </ListItem>
          <ListItem button sx={{ height: 50, marginTop: 2 }}>
            <StyledListItemIcon>
              <PaymentIcon />
            </StyledListItemIcon>
            <ListItemText primary="Payment" />
          </ListItem>
          <ListItem button sx={{ height: 50, marginTop: 2 }}>
            <StyledListItemIcon>
              <SettingsIcon />
            </StyledListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button sx={{ height: 50, marginTop: 2 }}>
            <StyledListItemIcon>
              <ExitToAppIcon />
            </StyledListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
          {/* Add the "Order" section below */}
        </List>
      </Drawer>
    </div>
  );
};

export default DashbordNavbar;
